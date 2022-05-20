import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { handleSubmitChanges } from '../SpecDocument.actions';
import BlocksSpecDocument from './BlocksSpecDocument';
import Confirm from '../../../components/confirm/Confirm';
import { Button } from '../../../components/SpecComponents';
import { Page, Footer, Comment } from '../SpecDocument.styles';

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
  const userOwner = project?.user_owner;
  const [showSendChangesModal, setShowSendChangesModal] = useState(false);
  const handleCloseModal = () => setShowSendChangesModal(false);
  const handleSendChanges = () => setShowSendChangesModal(true);

  const handleConfirm = () => {
    const changedBlockIDs = changedBlocks.map((block) =>
      block.status !== 'accepted' ? block.id : block.text?.id,
    );
    handleCloseModal();
    // Agregar el comentario que está en el editor para enviarlo cuando se envien los cambios
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
          <Footer>
            {changedBlocks.length > 0 && (
              <>
                <Comment placeholder="¿Quieres agregar algún comentario?" />
                <Button
                  variant="primary"
                  fontSize="14px"
                  onClick={handleSendChanges}
                >
                  Enviar {changedBlocks.length} cambios
                </Button>
              </>
            )}
          </Footer>
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
