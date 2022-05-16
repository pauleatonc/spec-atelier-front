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
  onUpdateSpecBlockText,
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
  const { blocks, project } = useSelector((state) => state.specDocument);
  const [selectedBlockID, setSelectedBlockID] = useState('');
  const [selectedBlockTextID, setSelectedBlockTextID] = useState('');
  const [showBlockEditor, setShowBlockEditor] = useState('');
  const [showBlockTextEditor, setShowBlockTextEditor] = useState('');
  const windowSize = window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches;
  const selectedBlock = blocks.find((block) => block.id === selectedBlockID);
  const userOwner = project.user_owner;
  const typeBlock = selectedBlock?.type;
  const productImage = selectedBlock?.image?.image?.id;
  const elementUserOwned = selectedBlock?.element.user_owned;

  useEffect(() => {
    dispatch(onGetSpecBlocks(specID));
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

  const handleShowProducts = () => {
    handleAddMenuClose();
    dispatch(onShowSpecProducts());
  };

  const handleCreateProduct = () => {
    handleAddMenuClose();
    dispatch(onShowSpecCreateProductSuccess());
  };

  const handleEditProduct = (block) => (event) => {
    handleBlockMenuClose(event);
    dispatch(onShowSpecEditProduct({ id: block.element.id || 1 }));
  };

  const handleUndoRemove = (blockID) => (event) => {
    // TODO
    //   handleBlockMenuClose();
    //   dispatch(undoRemove({ blockID, specID, userID }));
  };

  const handleShowBlockMenu = (blockID) => (event) => {
    handleBlockMenuOpen(event);
    setSelectedBlockID(blockID);
  };

  const handleShowBlockTextMenu = (textID) => (event) => {
    handleBlockTextMenuOpen(event);
    setSelectedBlockTextID(textID);
  };

  const handleShowImagesModal = (blockID) => () => {
    handleBlockMenuClose();
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

  const canEdit =
    selectedBlock?.change?.action !== 'remove' || elementUserOwned;
  const canAddText = selectedBlock?.text?.user_owned
    ? !selectedBlock?.text
    : !selectedBlock?.text ||
      (selectedBlock?.text && selectedBlock?.text?.status !== 'accepted');
  const canRemoveImage = selectedBlock?.image?.user_owned
    ? true
    : selectedBlock?.image?.status === 'accepted';

  const handleRemoveBlock = (blockID) => () => {
    // if(!userOwner && selectedBlock.status === "accepted"){
    //    Aquí va la función que al eliminar el bloque lo cambie de block.status = "waiting"
    //    y change.action = "delete"
    // } else {la funcion que esta aqui abajo}
    dispatch(onRemoveSpecBlock({ block: [blockID], specID }));
  };

  const handleBlockImageRemove = (blockID) => () => {
    handleBlockMenuClose();
    dispatch(onRemoveSpecBlockImage({ blockID, specID }));
  };

  const handleBlockTextRemove = (textID) => () => {
    handleBlockTextMenuClose();
    dispatch(onRemoveSpecBlockText({ textID, specID }));
  };

  const availableOptions = () => {
    if (canEdit)
      return (
        <>
          {canAddText && (
            <BlockMenuItem onClick={handleShowBlockEditor(selectedBlockID)}>
              Añadir texto
            </BlockMenuItem>
          )}
          {typeBlock === 'Product' && (
            <BlockMenuItem onClick={handleShowImagesModal(selectedBlockID)}>
              {productImage ? 'Editar imagen' : 'Añadir una imagen'}
            </BlockMenuItem>
          )}
          {canRemoveImage && (
            <BlockMenuItem onClick={handleBlockImageRemove(selectedBlockID)}>
              Eliminar imagen
            </BlockMenuItem>
          )}
          {typeBlock === 'Product' && elementUserOwned && (
            <BlockMenuItem onClick={handleEditProduct(selectedBlock)}>
              Editar
            </BlockMenuItem>
          )}
          {typeBlock === 'Product' && (
            <BlockMenuItem onClick={handleRemoveBlock(selectedBlockID)}>
              Eliminar
            </BlockMenuItem>
          )}
        </>
      );
    return (
      <>
        {selectedBlock.change?.action === 'remove' && (
          <BlockMenuItem onClick={handleUndoRemove(selectedBlockID)}>
            Deshacer Eliminar
          </BlockMenuItem>
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
          <BlockMenuItem onClick={handleShowTextEditor(selectedBlockTextID)}>
            Editar texto
          </BlockMenuItem>
          <BlockMenuItem onClick={handleBlockTextRemove(selectedBlockTextID)}>
            Eliminar texto
          </BlockMenuItem>
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
