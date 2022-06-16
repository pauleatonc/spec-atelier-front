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
  const { project, changes } = useSelector((state) => state.specDocument);
  const userOwner = project?.user_owner;
  const [showSendChangesModal, setShowSendChangesModal] = useState(false);
  const handleCloseModal = () => setShowSendChangesModal(false);
  const handleSendChanges = () => setShowSendChangesModal(true);
  const { onChange: handleComment, value: comment } = useTextarea('');

  const handleConfirm = () => {
    const changedIDs = changes.map((change) => change.id);
    handleCloseModal();
    dispatch(handleSubmitChanges({ changes: changedIDs, specID, comment }));
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
            {changes.length > 0 && (
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
                  Enviar {changes.length} cambios
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
