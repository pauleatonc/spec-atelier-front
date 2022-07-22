import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import addIconSource from '../../assets/images/icons/add-circle-outline-primary.svg';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import CloseButton from '../../components/buttons/CloseButton';

import ProjectInfoShare from './components/ProjectInfoShare';
import UserTeamEmail from './components/UserTeamEmail';
import IconUser from '../../components/IconUser';
import { onHideModal, onShowModal, setDetailMember } from './actions';
import { TYPE_MODALS } from './constants';
import { getCheckListData } from './utils';
import { Email } from './components/UserTeamEmail/styles';
import {
  Container,
  ButtonCloseContainer,
  Title,
  ContainerButtons,
  TitleConfigContainer,
  TitleConfig,
  NewMemberButton,
  AddIcon,
  AddMemberLabel,
  ContainerTeam,
  ContainerOwner,
} from './styles';

const SpecModalTeam = ({ projectStructure }) => {
  const dispatch = useDispatch();
  const { teamModal: show } = useSelector((state) => state.specModalTeam);
  const {
    project: { team, user_owner, owner },
  } = useSelector((state) => state.specDocument);
  const [checklistData, setChecklistData] = useState(
    getCheckListData(projectStructure, null, team),
  );
  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => dispatch(onHideModal(TYPE_MODALS.TEAM_MODAL)),
  });

  const showNewMemberModal = () => {
    dispatch(onShowModal(TYPE_MODALS.NEW_MEMBER_MODAL));
  };

  const handleClickMember = (member) => {
    if (user_owner) dispatch(setDetailMember(member));
  };

  useEffect(() => {
    setChecklistData(getCheckListData(projectStructure, null, team));
  }, [projectStructure, team]);

  return (
    <ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
      <Container>
        <ButtonCloseContainer mBottom={23}>
          <Title>Tu equipo</Title>
          <CloseButton onClick={handleClose} />
        </ButtonCloseContainer>
        {team && (
          <ContainerTeam>
            <ContainerOwner>
              <IconUser user={owner} />
              <Email>{owner.email}</Email>
              (propietario)
            </ContainerOwner>
            {team.map((member) => (
              <UserTeamEmail
                key={`${member?.permission?.id}-${member?.user?.email}-${member?.user?.id}`}
                member={member}
                onClick={handleClickMember}
              />
            ))}
          </ContainerTeam>
        )}
        {user_owner && (
          <NewMemberButton onClick={showNewMemberModal}>
            <AddIcon alt="Agregar nuevo miembro" src={addIconSource} />
            <AddMemberLabel>Nuevo miembro</AddMemberLabel>
          </NewMemberButton>
        )}
        <TitleConfigContainer>
          <TitleConfig>Partidas compartidas</TitleConfig>
        </TitleConfigContainer>
        <ProjectInfoShare
          checklistData={checklistData}
          setChecklistData={setChecklistData}
        />
        <ContainerButtons>
          <Button
            variant={VARIANTS_BUTTON.PRIMARY}
            width="120px"
            onClick={handleClose}
          >
            Cerrar
          </Button>
        </ContainerButtons>
      </Container>
    </ModalLayout>
  );
};

export default SpecModalTeam;
