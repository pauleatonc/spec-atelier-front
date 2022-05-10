import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SPEC_ICON_ALERT_CIRCLE } from '../../../../assets/Images';
import { Button } from '../../../../components/SpecComponents';
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
  const [blocksAccepted, setBlocksAccepted] = useState([]);
  const [blocksRejected, setBlocksRejected] = useState([]);
  const changes = blocksAccepted.length + blocksRejected.length;
  const dispatch = useDispatch();
  const { blocks, changesCount, project } = useSelector(
    (state) => state.specDocument,
  );

  const handleSaveChanges = () => {
    const params = {
      blocks_accepted: blocksAccepted,
      blocks_rejected: blocksRejected,
    };
    dispatch(onSaveSpecChanges(specID, params));
  };

  return (
    <Container>
      <DisclaimerContainer>
        <IcDisclaimer src={SPEC_ICON_ALERT_CIRCLE} alt="icon circle alert" />
        <DescDisclaimer>
          <TextDisclaimer bold>
            {`Tienes ${changesCount - changes} cambios pendientes de revisión`}
          </TextDisclaimer>
          <TextDisclaimer>
            {`Hay ${changesCount - changes} cambios en el proyecto ${
              project.name
            }.`}
          </TextDisclaimer>
        </DescDisclaimer>
      </DisclaimerContainer>
      <ContainerChanges>
        {blocks.map((block) => (
          <ChangeItem
            key={`${block.type}-${block.change.action}-${block.id}`}
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
        {changesCount ? (
          <Button
            variant={VARIANTS_BUTTON.PRIMARY}
            onClick={handleSaveChanges}
            disabled={!changes}
          >
            {`Confirmar ${changes || ''} cambios`}
          </Button>
        ) : (
          <ChangesConfirmed>Cambios confirmados</ChangesConfirmed>
        )}
      </ContainerButton>
    </Container>
  );
};

export default SpecChangeManagement;
