import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import SelectorRelative from '../../components/basics/SelectorRelative';
import dropArrowSource from '../../assets/images/icons/primary-arrow-down.svg';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import { useTextarea, useInput } from '../../components/inputs/Inputs.hooks';
import CloseButton from '../../components/buttons/CloseButton';

import { OPTIONS_PERMISION, EMAIL_REGEX } from './constants';
import ProjectInfoShare from './components/ProjectInfoShare';
import {
  onHideModal,
  checkUserEmail,
  sendUserInvitation,
  hideDisclaimer,
} from './actions';
import {
  Container,
  ButtonCloseContainer,
  Title,
  SearcherContainer,
  Disclaimer,
  IconInfo,
  DescDisclaimer,
  EmailDesc,
  Label,
  InputMailContainer,
  Searcher,
  PermissionSelectorContainer,
  PermisionLabel,
  IconArrowDown,
  TitleConfigContainer,
  TitleConfig,
  Message,
  ContainerButtons,
  ErrorInput,
} from './styles';

const SpecModalNewMember = () => {
  const dispatch = useDispatch();
  const { id: projectID } = useParams();
  const [currentCheckMail, setCurrentCheckMail] = useState('');
  const [inputMailInvalid, setInputMailInvalid] = useState(false);
  const [permision, setPermision] = useState(OPTIONS_PERMISION[0]);
  const [isAllProject, setIsAllProject] = useState(false);
  const [selectedSections, setSelectedSections] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const {
    onChange: handleMailChange,
    set: setMailValue,
    value: mailValue,
  } = useInput('');
  const {
    onChange: handleMessageChange,
    set: setMessageValue,
    value: messageValue,
  } = useTextarea('');
  const { newMemberModal: show, showDisclaimer } = useSelector(
    (state) => state.specModalTeam,
  );
  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => dispatch(onHideModal()),
    exitingCallback: () => {
      setMessageValue('');
      setMailValue('');
    },
  });

  const handleBlur = ({ target: { value } }) => {
    if (value) {
      if (EMAIL_REGEX.test(value)) {
        setInputMailInvalid(false);
        setCurrentCheckMail(value);
        dispatch(checkUserEmail(value));
      } else {
        setInputMailInvalid(true);
      }
    } else if (showDisclaimer) dispatch(hideDisclaimer());
  };

  const sendInvitation = () => {
    const invitation = {
      recipients: [mailValue],
      sections: selectedSections,
      items: selectedItems,
      all: isAllProject,
      ability: permision.value,
      ...(messageValue && { message: messageValue }),
    };
    dispatch(sendUserInvitation(projectID, invitation));
  };

  return (
    <ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
      <Container>
        <ButtonCloseContainer>
          <Title>Invita a tu equipo al proyecto</Title>
          <CloseButton onClick={handleClose} />
        </ButtonCloseContainer>

        <SearcherContainer>
          <Label>Compartir con:</Label>
          <InputMailContainer>
            <Searcher
              inputMailInvalid={inputMailInvalid}
              placeholder="Añade a un miembro del equipo"
              onBlur={handleBlur}
              onChange={handleMailChange}
              value={mailValue}
            />
            {inputMailInvalid && (
              <ErrorInput>Formato de email invalido</ErrorInput>
            )}
          </InputMailContainer>
          <PermissionSelectorContainer>
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
                  <PermisionLabel>{permision.label}</PermisionLabel>
                  <IconArrowDown alt="" src={dropArrowSource} />
                </>
              }
            />
          </PermissionSelectorContainer>
        </SearcherContainer>
        {showDisclaimer && (
          <Disclaimer>
            <IconInfo className="fas fa-info-circle" />
            <DescDisclaimer>
              <EmailDesc>{currentCheckMail}</EmailDesc> no es parte de
              SpecAtelier, se enviará un correo para unirse y tener acceso al
              proyecto.
            </DescDisclaimer>
          </Disclaimer>
        )}
        <TitleConfigContainer>
          <TitleConfig>Partidas compartidas</TitleConfig>
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
        <Message
          placeholder="Añade un mensaje (opcional)"
          value={messageValue || ''}
          onChange={handleMessageChange}
        />
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
            onClick={sendInvitation}
            disabled={
              !mailValue ||
              (!isAllProject &&
                !selectedSections.length &&
                !selectedItems.length) ||
              inputMailInvalid
            }
          >
            Enviar
          </Button>
        </ContainerButtons>
      </Container>
    </ModalLayout>
  );
};

export default SpecModalNewMember;
