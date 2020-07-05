import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onShowSpecCreateProductSuccess } from '../spec-create-product/SpecCreateProduct.actions';
import { onShowSpecImagesModalSuccess } from '../spec-images-modal/SpecImagesModal.actions';
import { onShowSpecProducts } from '../spec-products/SpecProducts.actions';
import { onAddSpecBlockText, onRemoveSpecBlock } from './SpecDocument.actions';
import useDropdown from '../../components/basics/Dropdown.hooks';
import Dropdown from '../../components/basics/Dropdown';
import Editor from '../../components/inputs/Editor';
import {
  Root,
  AddIcon,
  AddMenuItem,
  Page,
  Group,
  Block,
  BlockEditor,
  BlockMenuItem,
  BlockDotsIcon,
  BlockImage,
  BlockContent,
  BlockText,
  Section,
  Item,
  Product,
  ProductImage,
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
  const handleShowProducts = () => {
    handleAddMenuClose();
    dispatch(onShowSpecProducts());
  };
  const handleCreateProduct = () => {
    handleAddMenuClose();
    dispatch(onShowSpecCreateProductSuccess());
  };
  const handleShowBlockMenu = blockID => event => {
    handleBlockMenuOpen(event);
    setSelectedBlockID(blockID);
  };
  const handleShowImagesModal = blockID => () => {
    handleBlockMenuClose();
    dispatch(onShowSpecImagesModalSuccess({ blockID }));
  };
  const handleHideBlockEditor = () => setShowBlockEditor('');
  const handleShowBlockEditor = blockID => () => {
    handleBlockMenuClose();
    setShowBlockEditor(blockID);
  };
  const handleCreateBlockText = blockID => text => {
    handleHideBlockEditor();
    dispatch(onAddSpecBlockText({ blockID, projectID, text }));
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
          <BlockMenuItem onClick={handleShowBlockEditor(selectedBlockID)}>Añadir texto</BlockMenuItem>
          {selectedBlock?.type === 'product' && (
            <BlockMenuItem onClick={handleShowImagesModal(selectedBlockID)}>
              Añadir una imagen
            </BlockMenuItem>
          )}
          {selectedBlock?.type === 'product' && <BlockMenuItem>Editar</BlockMenuItem>}
          <BlockMenuItem onClick={handleRemoveBlock(selectedBlockID)}>Eliminar</BlockMenuItem>
        </Dropdown>
      )}
      <Page>
        <Group>
          {blocks.map(block => {
            if (block.type === 'section') {
              return (
                <Block key={block.id} margin="0 0 4px 0">
                  <Section>
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
                    {block?.element?.title}
                  </Section>
                  {block?.text && <BlockText dangerouslySetInnerHTML={{ __html: block?.text?.text }} />}
                </Block>
              );
            }

            if (block.type === 'item') {
              return (
                <Block draggable key={block.id} margin="0 0 7px 0">
                  <Item>
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
                    {block?.element?.title}
                  </Item>
                  {block?.text && <BlockText dangerouslySetInnerHTML={{ __html: block?.text?.text }} />}
                </Block>
              );
            }

            return (
              <Block draggable key={block.id} margin="0 0 15px 0">
                <Product>
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
                  {(block?.element?.image || block?.element?.image === 0) && (
                    <BlockImage>
                      <ProductImage src={block?.element?.images[block?.element?.image]?.url || '#'} />
                    </BlockImage>
                  )}
                  <BlockContent>
                    <ProductTitle>{block?.element?.title}</ProductTitle>
                    {block?.element?.description && <ProductDescription>{block?.element?.description}</ProductDescription>}
                    {block?.element?.system && <ProductSystem>{`Sistema constructivo: ${block?.element?.system}`}</ProductSystem>}
                    {block?.element?.reference && <ProductReference>{`Referencia ${block?.element?.reference}`}</ProductReference>}
                  </BlockContent>
                </Product>
                {block?.text && <BlockText dangerouslySetInnerHTML={{ __html: block?.text?.text }} />}
              </Block>
            );
          })}
        </Group>
      </Page>
    </Root>
  );
};
  
export default SpecDocument;
