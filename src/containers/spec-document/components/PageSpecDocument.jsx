import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { handleSubmitChanges } from '../SpecDocument.actions';
import BlocksSpecDocument from './BlocksSpecDocument';
import Confirm from '../../../components/confirm/Confirm';
import { Button } from '../../../components/SpecComponents';
import { Page, Footer } from '../SpecDocument.styles';
import Textarea from '../../../components/inputs/Textarea';
import { useTextarea } from '../../../components/inputs/Inputs.hooks';

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
  const { onChange: handleComment, value: comment } = useTextarea('');

  const handleConfirm = () => {
    const changedBlockIDs = changedBlocks.map((block) => {
      const blockAccepted = block.status !== 'accepted';
      const blockTextAccepted = block?.text?.status !== 'accepted';
      const imageAccepted = block?.image?.status !== 'accepted';
      const unsentBlocks = block?.change?.sent === false;
      const unsentBlocksText = block?.text?.change?.sent === false;
      const unsentBlocksImage = block?.image?.change?.sent === false;
      return (
        (unsentBlocks && blockAccepted && block.id) ||
        (unsentBlocksText && blockTextAccepted && block.text?.id) ||
        (unsentBlocksImage && imageAccepted && block.image?.id)
      );
    });

    handleCloseModal();
    dispatch(handleSubmitChanges({ blocks: changedBlockIDs, specID, comment }));
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
                <Textarea
                  placeholder="¿Quieres agregar algún comentario?"
                  minHeightTextArea="38px"
                  height="40px"
                  width="300px"
                  value={comment || ''}
                  onChange={handleComment}
                  maxlength={80}
                />
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
