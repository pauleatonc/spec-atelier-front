import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  SPEC_ICON_ALERT_CIRCLE,
  ICON_ARROW_DOWN,
} from '../../../../assets/Images';
import { Button } from '../../../../components/SpecComponents';
import Confirm from '../../../../components/confirm/Confirm';
import SelectorRelative from '../../../../components/basics/SelectorRelative';
import IconUser from '../../../../components/IconUser';
import { VARIANTS_BUTTON } from '../../../../config/constants/button-variants';
import {
  onSaveSpecChanges,
  onGetApproveRequest,
  onGetApproveRequestBlocks,
} from '../../../spec-document/SpecDocument.actions';
import ChangeItem from './components/ChangeItem';

import { getDataSelecUser } from './utils';

import {
  Container,
  DisclaimerContainer,
  IcDisclaimer,
  DescDisclaimer,
  TextDisclaimer,
  ContainerChanges,
  ContainerButton,
  ChangesConfirmed,
  FilterContainer,
  FilterContent,
  Label,
} from './styles';

import {
  ContentUser,
  NameSection,
} from '../../../../components/basics/SelectorRelative.styles';

import { FilterSelectBox } from '../../SpecHistory.styles';

const SpecChangeManagement = ({ actionsIcons }) => {
  const { id: specID } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [approveRequestSelected, setApproveRequestSelected] = useState();
  const [blocksAccepted, setBlocksAccepted] = useState([]);
  const [blocksRejected, setBlocksRejected] = useState([]);
  const changes = blocksAccepted.length + blocksRejected.length;
  const dispatch = useDispatch();
  const {
    approveRequest,
    approveRequestBlocks,
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

  const onChangeApproveRequestSelected = (request) => {
    onGetApproveRequestBlocks(specID, request.id, () => {
      setApproveRequestSelected(request);
    });
  };

  useEffect(() => {
    dispatch(onGetApproveRequest(specID));
  }, [dispatch]);

  useEffect(() => {
    if (approveRequest.length && !approveRequestSelected)
      setApproveRequestSelected(approveRequest[0]);
  }, [approveRequest, approveRequestSelected]);

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
      {approveRequest.length && approveRequestSelected && (
        <FilterContainer>
          <FilterContent>
            <Label>Filtras por autor</Label>
            <SelectorRelative
              width="237px"
              maxHeight="152px"
              options={getDataSelecUser(approveRequest)}
              onChange={onChangeApproveRequestSelected}
              backgroundPuertoRico
              renderInput={
                <FilterSelectBox>
                  <ContentUser>
                    <IconUser user={approveRequestSelected.user} />
                    <NameSection>{`${approveRequestSelected.user.first_name} ${approveRequestSelected.user.last_name}`}</NameSection>
                  </ContentUser>
                  <img alt="icon-arrow-down" src={ICON_ARROW_DOWN} />
                </FilterSelectBox>
              }
            />
          </FilterContent>
        </FilterContainer>
      )}
      {approveRequestBlocks && (
        <ContainerChanges>
          {approveRequestBlocks.map(
            (block) =>
              block.change && (
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
              ),
          )}
        </ContainerChanges>
      )}
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