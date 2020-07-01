import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onShowSpecCreateProductSuccess } from '../spec-create-product/SpecCreateProduct.actions';
import { onShowSpecProducts } from '../spec-products/SpecProducts.actions';
import { onCreateSpecBlockText, onRemoveSpecBlock } from './SpecDocument.actions';
import useDropdown from '../../components/basics/Dropdown.hooks';
import Dropdown from '../../components/basics/Dropdown';
import Editor from '../../components/inputs/Editor';
import {
  Root,
  AddIcon,
  AddMenuItem,
  Page,
  Group,
  BlockEditor,
  BlockMenuItem,
  BlockDotsIcon,
  Section,
  Item,
  Product,
  ProductTitle,
  ProductDescription,
  ProductSystem,
  ProductReference,
} from './SpecDocument.styles';
import specAddSource from '../../assets/images/icons/spec-add.svg';
import threeDotsVerticalSource from '../../assets/images/icons/three-dots-vertical.svg';

/**
 * The SpecDocument's container.
 */
const SpecDocument = () => {
  const { id: projectID } = useParams();
  const { blocks } = useSelector(state => state.specDocument);
  const dispatch = useDispatch();
  const [selectedBlockID, setSelectedBlockID] = useState('');
  const [showBlockEditor, setShowBlockEditor] = useState('');
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
  const handleShowBlockMenu = blockID => event => {
    handleBlockMenuOpen(event);
    setSelectedBlockID(blockID);
  };
  const handleShowBlockEditor = blockID => () => {
    handleBlockMenuClose();
    setShowBlockEditor(blockID);
  };
  const handleHideBlockEditor = () => setShowBlockEditor('');
  const handleShowProducts = () => {
    handleAddMenuClose();
    dispatch(onShowSpecProducts());
  };
  const handleCreateProduct = () => {
    handleAddMenuClose();
    dispatch(onShowSpecCreateProductSuccess());
  };
  const handleCreateBlockText = () => text => {
    handleHideBlockEditor();
    dispatch(onCreateSpecBlockText({ projectID, text }));
  };
  const handleRemoveBlock = blockID => () => {
    handleHideBlockEditor();
    dispatch(onRemoveSpecBlock(blockID));
  };
  const selectedBlock = blocks.find(block => block.id === selectedBlockID);

  return (
    <Root>
      <AddIcon alt="Agregar sección" src={specAddSource} onClick={handleAddMenuOpen} />
      <Dropdown
        anchorRef={addAnchor}
        offset={{ x: -8, y: -8 }}
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
          {selectedBlock?.type === 'product' && <BlockMenuItem>Añadir una imagen</BlockMenuItem>}
          <BlockMenuItem onClick={handleShowBlockEditor(selectedBlockID)}>Añadir texto</BlockMenuItem>
          {selectedBlock?.type === 'product' && <BlockMenuItem>Editar</BlockMenuItem>}
          <BlockMenuItem onClick={handleRemoveBlock(selectedBlockID)}>Eliminar</BlockMenuItem>
        </Dropdown>
      )}
      <Page>
        <Group>
          {blocks.map(block => {
            if (block.type === 'section') {
              return <Section key={block.id}>{block.title}</Section>;
            }

            if (block.type === 'item') {
              return (
                <Item draggable key={block.id}>
                  {showBlockEditor === block.id && (
                    <BlockEditor>
                      <Editor
                        actions
                        label="Texto"
                        placeholder="Ingresa el texto"
                        onCancel={handleHideBlockEditor}
                        onSubmit={handleCreateBlockText(block.id)}
                      />
                    </BlockEditor>
                  )}
                  <BlockDotsIcon src={threeDotsVerticalSource} onClick={handleShowBlockMenu(block.id)} />
                  {block.title}
                </Item>
              );
            }

            return (
              <Product draggable key={block.id}>
                {showBlockEditor === block.id && (
                  <BlockEditor>
                    <Editor
                      actions
                      label="Texto"
                      placeholder="Ingresa el texto"
                      onCancel={handleHideBlockEditor}
                      onSubmit={handleCreateBlockText(block.id)}
                    />
                  </BlockEditor>
                )}
                <BlockDotsIcon src={threeDotsVerticalSource} onClick={handleShowBlockMenu(block.id)} />
                <ProductTitle>{block.title}</ProductTitle>
                {block.description && <ProductDescription>{block.description}</ProductDescription>}
                {block.system && <ProductSystem>{`Sistema constructivo: ${block.system}`}</ProductSystem>}
                {block.reference && <ProductReference>{`Referencia ${block.reference}`}</ProductReference>}
              </Product>
            );
          })}
        </Group>
      </Page>
    </Root>
  );
};
  
export default SpecDocument;
