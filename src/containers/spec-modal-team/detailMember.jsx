import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import IconUser from '../../components/IconUser';
import SelectorRelative from '../../components/basics/SelectorRelative';
import CloseButton from '../../components/buttons/CloseButton';

import dropArrowSource from '../../assets/images/icons/primary-arrow-down.svg';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

import ProjectInfoShare from './components/ProjectInfoShare';
import { onHideModal } from './actions';
import { OPTIONS_PERMISION } from './constants';
import {
  Container,
  ButtonCloseContainer,
  ContainerButtons,
  TitleConfigContainer,
  TitleConfig,
  InfoUserContainer,
  InfoUser,
  ItemInfo,
  PermisionLabel,
  IconArrowDown,
  DeleteUser,
  LabelDelete,
  IconDelete,
  Disclaimer,
  IconInfo,
  DescDisclaimer,
  EmailDesc,
  ResendLabel,
} from './styles';

const DetailMemberModal = () => {
  const dispatch = useDispatch();
  const { detailMemberModal: show, detailMember } = useSelector(
    (state) => state.specModalTeam,
  );
  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => dispatch(onHideModal()),
  });
  const [permision, setPermision] = useState(
    detailMember?.permission.ability === 'write'
      ? OPTIONS_PERMISION[0]
      : OPTIONS_PERMISION[1],
  );

  const [isAllProject, setIsAllProject] = useState(false);
  const [selectedSections, setSelectedSections] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (detailMember) {
      setIsAllProject(detailMember?.permission?.all);
    }
  }, [detailMember]);

  return (
    <ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
      <Container>
        <ButtonCloseContainer flexEnd>
          <CloseButton onClick={handleClose} />
        </ButtonCloseContainer>

        {detailMember && (
          <InfoUserContainer>
            <IconUser user={detailMember?.user} size={100} fontSize={20} />
            <InfoUser>
              {detailMember?.user?.name && (
                <ItemInfo>{detailMember?.user?.name}</ItemInfo>
              )}
              {detailMember?.user?.company && (
                <ItemInfo>{detailMember?.user?.company}</ItemInfo>
              )}
              {detailMember?.user?.email && (
                <ItemInfo>{detailMember?.user?.email}</ItemInfo>
              )}
            </InfoUser>
            <div>
              <SelectorRelative
                name="sort"
                hoverPrimaryColor
                maxHeight="180px"
                options={OPTIONS_PERMISION}
                placeholder="HOLA"
                value={permision.id}
                onChange={setPermision}
                renderInput={
                  <>
                    <PermisionLabel fontSize={14}>
                      {permision.label}
                    </PermisionLabel>
                    <IconArrowDown alt="" src={dropArrowSource} />
                  </>
                }
              />
            </div>
          </InfoUserContainer>
        )}

        <TitleConfigContainer>
          <TitleConfig>Partidas compartidas</TitleConfig>
          <DeleteUser onClick={() => console.log('delete user')}>
            <LabelDelete>Eliminar usuario</LabelDelete>
            <IconDelete className="fas fa-trash" />
          </DeleteUser>
        </TitleConfigContainer>
        <ProjectInfoShare
          withChecks
          isAllProject={isAllProject}
          setIsAllProject={setIsAllProject}
          selectedSections={selectedSections}
          setSelectedSections={setSelectedSections}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        {detailMember?.user && detailMember?.status === 'esperando' && (
          <Disclaimer>
            <IconInfo className="fas fa-info-circle" />
            <DescDisclaimer>
              <EmailDesc>{detailMember?.user?.email}</EmailDesc> no ha aceptado
              aún la invitación a colaborar.{' '}
              <ResendLabel onClick={() => console.log('reenviar')}>
                (Reenviar)
              </ResendLabel>
            </DescDisclaimer>
          </Disclaimer>
        )}
        {detailMember?.user && detailMember?.status !== 'esperando' && (
          <Disclaimer>
            <IconInfo className="fas fa-info-circle" />
            <DescDisclaimer>
              <EmailDesc>{detailMember?.user?.email}</EmailDesc> recibirá un
              correo indicando los cambios realizados en los permisos.
            </DescDisclaimer>
          </Disclaimer>
        )}
        <ContainerButtons>
          <Button
            variant={VARIANTS_BUTTON.CANCEL}
            width="120px"
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            variant={VARIANTS_BUTTON.PRIMARY}
            width="120px"
            onClick={() => console.log('guardar')}
          >
            Guardar
          </Button>
        </ContainerButtons>
      </Container>
    </ModalLayout>
  );
};

export default DetailMemberModal;
