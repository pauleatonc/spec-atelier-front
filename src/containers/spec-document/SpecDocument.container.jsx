import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onShowSpecCreateProductSuccess } from '../spec-create-product/SpecCreateProduct.actions';
import { onShowSpecEditProduct } from '../spec-edit-product/SpecEditProduct.actions';
import { onShowSpecImagesModalSuccess } from '../spec-images-modal/SpecImagesModal.actions';
import { onShowSpecProducts } from '../spec-products/SpecProducts.actions';
import {
  onGetSpecBlocks,
  onRemoveSpecBlock,
  onRemoveSpecBlockImage,
  onRemoveSpecBlockText,
  onUndoChange,
  onUndoSend,
  onUpdateSpecBlockText,
  onGetProjectStructure,
} from './SpecDocument.actions';
import useDropdown from '../../components/basics/Dropdown.hooks';
import Dropdown from '../../components/basics/Dropdown';
import PageSpecDocument from './components/PageSpecDocument';
import { MAX_SCREEN_SMALL_NAV_JS } from '../../config/constants/styled-vars';
import { SPEC_ADD_SOURCE } from '../../assets/Images';
import {
  Root,
  AddIcon,
  AddMenuItem,
  BlockMenuItem,
} from './SpecDocument.styles';

/** The SpecDocument's container */
const SpecDocument = () => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  const { blocks } = useSelector((state) => state.specDocument);
  const [selectedBlockID, setSelectedBlockID] = useState('');
  const [selectedBlockTextID, setSelectedBlockTextID] = useState('');
  const [selectedBlockImageID, setSelectedBlockImageID] = useState('');
  const [showBlockEditor, setShowBlockEditor] = useState('');
  const [showBlockTextEditor, setShowBlockTextEditor] = useState('');
  const windowSize = window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches;
  const selectedBlock = blocks.find((block) => block.id === selectedBlockID);
  const selectedBlockText = blocks.find(
    (block) => block.text?.id === selectedBlockTextID,
  );
  const selectedBlockImage = blocks.find(
    (block) => block.image?.id === selectedBlockImageID,
  );
  const typeBlock = selectedBlock?.type;
  const productImage = selectedBlock?.image?.image?.id;
  const elementUserOwned = selectedBlock?.element.user_owned;
  const action = selectedBlock?.change?.action;
  const actionText = selectedBlockText?.text?.change?.action;
  const actionImage = selectedBlockImage?.image?.change?.action;
  const productImages = selectedBlock?.element.images;
  const sent = selectedBlock?.change?.sent;
  const sentText = selectedBlockText?.text?.change?.sent;
  const sentImage = selectedBlockImage?.image?.change?.sent;
  const status = selectedBlock?.change?.status;
  const statusText = selectedBlockText?.text?.change?.status;
  const statusImage = selectedBlockImage?.image?.change?.status;

  useEffect(() => {
    dispatch(onGetSpecBlocks(specID));
    dispatch(onGetProjectStructure(specID));
  }, []);

  const {
    anchor: addAnchor,
    onClose: handleAddMenuClose,
    onOpen: handleAddMenuOpen,
  } = useDropdown();

  const {
    anchor: blockAnchor,
    onClose: handleBlockMenuClose,
    onOpen: handleBlockMenuOpen,
  } = useDropdown({ closeCallback: () => setSelectedBlockID('') });

  const {
    anchor: blockTextAnchor,
    onClose: handleBlockTextMenuClose,
    onOpen: handleBlockTextMenuOpen,
  } = useDropdown({ closeCallback: () => setSelectedBlockTextID('') });

  const {
    anchor: blockImageAnchor,
    onClose: handleBlockImageMenuClose,
    onOpen: handleBlockImageMenuOpen,
  } = useDropdown({ closeCallback: () => setSelectedBlockImageID('') });

  const handleShowProducts = () => {
    handleAddMenuClose();
    dispatch(onShowSpecProducts({ specID }));
  };

  const handleCreateProduct = () => {
    handleAddMenuClose();
    dispatch(onShowSpecCreateProductSuccess());
  };

  const handleEditProduct = (block) => (event) => {
    handleBlockMenuClose(event);
    dispatch(onShowSpecEditProduct({ id: block.element.id || 1 }));
  };

  const changeID =
    selectedBlock?.change.id ||
    selectedBlockText?.text?.change.id ||
    selectedBlockImage?.image?.change.id;

  const handleUndoChange = () => (event) => {
    handleBlockMenuClose(event);
    handleBlockTextMenuClose(event);
    handleBlockImageMenuClose(event);
    dispatch(onUndoChange({ changeID, specID }));
  };

  const handleUndoSend = () => (event) => {
    handleBlockMenuClose(event);
    handleBlockTextMenuClose(event);
    handleBlockImageMenuClose(event);
    dispatch(onUndoSend({ changeID, specID }));
  };

  const handleShowBlockMenu = (blockID) => (event) => {
    handleBlockMenuOpen(event);
    setSelectedBlockID(blockID);
  };

  const handleShowBlockTextMenu = (textID) => (event) => {
    handleBlockTextMenuOpen(event);
    setSelectedBlockTextID(textID);
  };

  const handleShowBlockTImageMenu = (imageID) => (event) => {
    handleBlockImageMenuOpen(event);
    setSelectedBlockImageID(imageID);
  };

  const handleShowImagesModal = (blockID) => () => {
    handleBlockMenuClose();
    handleBlockImageMenuClose();
    dispatch(onShowSpecImagesModalSuccess({ blockID }));
  };

  const handleHideBlockEditor = () => setShowBlockEditor('');

  const handleShowBlockEditor = (blockID) => () => {
    handleBlockMenuClose();
    setShowBlockEditor(blockID);
  };

  const handleHideBlockTextEditor = () => setShowBlockTextEditor('');

  const handleShowTextEditor = (textID) => () => {
    handleBlockTextMenuClose();
    setShowBlockTextEditor(textID);
  };

  const handleEditBlockText = (textID) => (textValue) => {
    handleHideBlockTextEditor();
    dispatch(onUpdateSpecBlockText({ textID, specID, textValue }));
  };

  const canEdit = (action !== 'remove' && !sent) || elementUserOwned;
  const canEditText = actionText !== 'remove' && !sentText;
  const canEditImage = actionImage !== 'remove' && !sentImage;
  const canAddText = !selectedBlock?.text;

  const canRemoveImage = selectedBlockImage?.image?.user_owned
    ? true
    : selectedBlockImage?.image?.change?.status === 'accepted';

  const handleRemoveBlock = (blockID) => () => {
    handleBlockMenuClose();
    dispatch(onRemoveSpecBlock({ block: [blockID], specID }));
  };

  const handleImageRemove = (imageBlockID) => () => {
    handleBlockImageMenuClose();
    dispatch(onRemoveSpecBlockImage({ imageBlockID, specID }));
  };

  const handleBlockTextRemove = (textID) => () => {
    handleBlockTextMenuClose();
    dispatch(onRemoveSpecBlockText({ textID, specID }));
  };

  const availableOptions = () => {
    if (canEdit)
      return (
        <>
          {canAddText && !sent && (
            <BlockMenuItem onClick={handleShowBlockEditor(selectedBlockID)}>
              Añadir texto
            </BlockMenuItem>
          )}
          {typeBlock === 'Product' &&
            productImages.length > 0 &&
            !productImage &&
            !sent && (
              <BlockMenuItem onClick={handleShowImagesModal(selectedBlockID)}>
                Añadir una imagen
              </BlockMenuItem>
            )}
          {typeBlock === 'Product' && elementUserOwned && !sent && (
            <BlockMenuItem onClick={handleEditProduct(selectedBlock)}>
              Editar
            </BlockMenuItem>
          )}
          {typeBlock === 'Product' && !sent && (
            <BlockMenuItem onClick={handleRemoveBlock(selectedBlockID)}>
              Eliminar
            </BlockMenuItem>
          )}
          {action === 'edit' && status !== 'accepted' && !sent && (
            <BlockMenuItem onClick={handleUndoChange()}>
              Deshacer Edición
            </BlockMenuItem>
          )}
        </>
      );
    return (
      <>
        {!sent && (
          <BlockMenuItem onClick={handleUndoChange()}>
            Deshacer Eliminar
          </BlockMenuItem>
        )}
        {sent && (
          <BlockMenuItem onClick={handleUndoSend()}>
            Deshacer Enviar
          </BlockMenuItem>
        )}
      </>
    );
  };

  const availableOptionsText = () => {
    if (canEditText)
      return (
        <>
          <BlockMenuItem onClick={handleShowTextEditor(selectedBlockTextID)}>
            Editar texto
          </BlockMenuItem>
          <BlockMenuItem onClick={handleBlockTextRemove(selectedBlockTextID)}>
            Eliminar texto
          </BlockMenuItem>
          {actionText === 'edit' && statusText !== 'accepted' && (
            <BlockMenuItem onClick={handleUndoChange()}>
              Deshacer Edición
            </BlockMenuItem>
          )}
        </>
      );
    return (
      <>
        {!sentText && (
          <BlockMenuItem onClick={handleUndoChange()}>
            Deshacer Eliminar
          </BlockMenuItem>
        )}
        {sentText && (
          <BlockMenuItem onClick={handleUndoSend()}>
            Deshacer Enviar
          </BlockMenuItem>
        )}
      </>
    );
  };

  const availableOptionsImage = () => {
    if (canEditImage)
      return (
        <>
          {selectedBlockImage?.image?.image?.id && (
            <BlockMenuItem
              onClick={handleShowImagesModal(selectedBlockImage?.id)}
            >
              Editar imagen
            </BlockMenuItem>
          )}
          {canRemoveImage && (
            <BlockMenuItem
              onClick={handleImageRemove(selectedBlockImage?.image?.id)}
            >
              Eliminar imagen
            </BlockMenuItem>
          )}
          {actionImage === 'edit' && statusImage !== 'accepted' && (
            <BlockMenuItem onClick={handleUndoChange()}>
              Deshacer Edición
            </BlockMenuItem>
          )}
        </>
      );
    return (
      <>
        {!sentImage && (
          <BlockMenuItem onClick={handleUndoChange()}>
            Deshacer Eliminar
          </BlockMenuItem>
        )}
        {sentImage && selectedBlockImage?.change?.action !== 'remove' && (
          <BlockMenuItem onClick={handleUndoSend()}>
            Deshacer Enviar
          </BlockMenuItem>
        )}
        {selectedBlockImage?.change?.action === 'remove' && (
          <BlockMenuItem>No puedes editar</BlockMenuItem>
        )}
      </>
    );
  };

  return (
    <Root>
      <Dropdown
        anchorRef={addAnchor}
        offset={windowSize ? { x: 0, y: -80 } : { x: -7, y: -7 }}
        open={Boolean(addAnchor)}
        origin={{ x: 'right', y: 'top' }}
        onClose={handleAddMenuClose}
      >
        <AddMenuItem onClick={handleShowProducts}>Añadir producto</AddMenuItem>
        <AddMenuItem onClick={handleCreateProduct}>Crear producto</AddMenuItem>
      </Dropdown>
      {Boolean(blockAnchor) && selectedBlock && (
        <Dropdown
          anchorRef={blockAnchor}
          offset={{ x: -5, y: -4 }}
          open={Boolean(blockAnchor)}
          origin={{ x: 'right', y: 'top' }}
          onClose={handleBlockMenuClose}
        >
          {availableOptions()}
        </Dropdown>
      )}
      {Boolean(blockTextAnchor) && (
        <Dropdown
          anchorRef={blockTextAnchor}
          offset={{ x: -5, y: -4 }}
          open={Boolean(blockTextAnchor)}
          origin={{ x: 'right', y: 'top' }}
          onClose={handleBlockTextMenuClose}
        >
          {availableOptionsText()}
        </Dropdown>
      )}
      {Boolean(blockImageAnchor) && (
        <Dropdown
          anchorRef={blockImageAnchor}
          offset={{ x: -5, y: -4 }}
          open={Boolean(blockImageAnchor)}
          origin={{ x: 'right', y: 'top' }}
          onClose={handleBlockImageMenuClose}
        >
          {availableOptionsImage()}
        </Dropdown>
      )}
      <PageSpecDocument
        showBlockEditor={showBlockEditor}
        showBlockTextEditor={showBlockTextEditor}
        handleHideBlockEditor={handleHideBlockEditor}
        handleShowBlockMenu={handleShowBlockMenu}
        handleHideBlockTextEditor={handleHideBlockTextEditor}
        handleEditBlockText={handleEditBlockText}
        handleShowBlockTextMenu={handleShowBlockTextMenu}
        handleShowBlockTImageMenu={handleShowBlockTImageMenu}
      />
      <AddIcon
        alt="Agregar sección"
        src={SPEC_ADD_SOURCE}
        onClick={windowSize ? handleShowProducts : handleAddMenuOpen}
      />
    </Root>
  );
};

export default SpecDocument;
