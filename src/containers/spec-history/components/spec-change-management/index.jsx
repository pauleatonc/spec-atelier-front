import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SPEC_ICON_ALERT_CIRCLE } from '../../../../assets/Images';
import { Button } from '../../../../components/SpecComponents';
import Confirm from '../../../../components/confirm/Confirm';
import { VARIANTS_BUTTON } from '../../../../config/constants/button-variants';
import { onSaveSpecChanges } from '../../../spec-document/SpecDocument.actions';
import ChangeItem from './components/ChangeItem';

import {
  Container,
  DisclaimerContainer,
  IcDisclaimer,
  DescDisclaimer,
  TextDisclaimer,
  ContainerChanges,
  ContainerButton,
  ChangesConfirmed,
} from './styles';

const SpecChangeManagement = ({ actionsIcons }) => {
  const { id: specID } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [blocksAccepted, setBlocksAccepted] = useState([]);
  const [blocksRejected, setBlocksRejected] = useState([]);
  const changes = blocksAccepted.length + blocksRejected.length;
  const dispatch = useDispatch();
  const {
    blocks,
    changesCount,
    project: { user_owner, name },
  } = useSelector((state) => state.specDocument);

  const handleSaveChanges = () => {
    const params = {
      blocks_accepted: blocksAccepted,
      blocks_rejected: blocksRejected,
    };
    dispatch(onSaveSpecChanges(specID, params));
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container>
      <DisclaimerContainer>
        <IcDisclaimer src={SPEC_ICON_ALERT_CIRCLE} alt="icon circle alert" />
        <DescDisclaimer>
          <TextDisclaimer bold>
            {`Tienes ${changesCount - changes} cambio${
              changesCount - changes === 1 ? '' : 's'
            } pendientes de revisión`}
          </TextDisclaimer>
          <TextDisclaimer>
            {`Hay ${changesCount - changes} cambio${
              changesCount - changes === 1 ? '' : 's'
            } en el proyecto ${name}.`}
          </TextDisclaimer>
        </DescDisclaimer>
      </DisclaimerContainer>
      <ContainerChanges>
        {blocks.map((block) => (
          <ChangeItem
            key={`${block.type}-${block.change.action}-${block.id}`}
            isOwner={user_owner}
            blockId={block.id}
            type={block.type}
            change={block.change}
            status={block.status}
            element={block.element}
            icon={actionsIcons[block.change.action]}
            blocksAccepted={blocksAccepted}
            blocksRejected={blocksRejected}
            setBlocksAccepted={setBlocksAccepted}
            setBlocksRejected={setBlocksRejected}
          />
        ))}
      </ContainerChanges>
      <ContainerButton>
        {changesCount && user_owner ? (
          <Button
            variant={VARIANTS_BUTTON.PRIMARY}
            onClick={() => setShowModal(true)}
            disabled={!changes}
          >
            {`Confirmar ${changes || ''} cambios`}
          </Button>
        ) : (
          <ChangesConfirmed>Cambios confirmados</ChangesConfirmed>
        )}
      </ContainerButton>
      <Confirm
        show={showModal}
        onClose={handleCloseModal}
        onExit={handleCloseModal}
        question="¿Estás seguro que deseas confirmar los cambios?"
        cancelText="Volver"
        confirmText="Aceptar"
        onConfirm={handleSaveChanges}
      />
    </Container>
  );
};

export default SpecChangeManagement;
