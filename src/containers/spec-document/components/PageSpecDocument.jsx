import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import BlocksSpecDocument from './BlocksSpecDocument';
import Confirm from '../../../components/confirm/Confirm';
import { Button } from '../../../components/SpecComponents';
import { ContentButton, Page, SubmittedChanges } from '../SpecDocument.styles';
import { handleSubmitChanges } from '../SpecDocument.actions';

const PageSpecDocument = ({
  showBlockEditor,
  showBlockTextEditor,
  handleHideBlockEditor,
  handleShowBlockMenu,
  handleHideBlockTextEditor,
  handleEditBlockText,
  handleShowBlockTextMenu,
}) => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  const { project, changedBlocks } = useSelector((state) => state.specDocument);
  const [showSendChangesModal, setShowSendChangesModal] = useState(false);
  const userOwner = project?.user_owner;
  const handleCloseModal = () => setShowSendChangesModal(false);
  const handleSendChanges = () => setShowSendChangesModal(true);

  const handleConfirm = () => {
    handleCloseModal();
    const changedBlockIDs = changedBlocks.map((block) => block.id);
    dispatch(handleSubmitChanges({ blocks: changedBlockIDs, specID }));
  };

  return (
    <>
      <Page>
        <BlocksSpecDocument
          showBlockEditor={showBlockEditor}
          handleHideBlockEditor={handleHideBlockEditor}
          handleShowBlockMenu={handleShowBlockMenu}
          showBlockTextEditor={showBlockTextEditor}
          handleHideBlockTextEditor={handleHideBlockTextEditor}
          handleEditBlockText={handleEditBlockText}
          handleShowBlockTextMenu={handleShowBlockTextMenu}
        />
        {!userOwner && (
          <ContentButton>
            {changedBlocks.length > 0 ? (
              <Button
                variant="primary"
                fontSize="14px"
                onClick={handleSendChanges}
              >
                Enviar {changedBlocks.length} cambios
              </Button>
            ) : (
              <SubmittedChanges>Cambios enviados</SubmittedChanges>
            )}
          </ContentButton>
        )}
      </Page>
      <Confirm
        show={showSendChangesModal}
        onClose={handleCloseModal}
        onExit={handleCloseModal}
        onConfirm={handleConfirm}
        question="¿Estás seguro que deseas enviar los cambios?"
      />
    </>
  );
};

export default PageSpecDocument;
