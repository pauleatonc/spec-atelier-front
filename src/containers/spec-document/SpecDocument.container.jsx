import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onShowSpecCreateProductSuccess } from '../spec-create-product/SpecCreateProduct.actions';
import { onShowSpecImagesModalSuccess } from '../spec-images-modal/SpecImagesModal.actions';
import { onShowSpecProducts } from '../spec-products/SpecProducts.actions';
import { onAddSpecBlockText, onRemoveSpecBlock, onUpdateSpecBlocksSort, onGetSpecBlocks } from './SpecDocument.actions';
import useDropdown from '../../components/basics/Dropdown.hooks';
import Dropdown from '../../components/basics/Dropdown';
import DraggableList from '../../components/basics/DraggableList';
import Editor from '../../components/inputs/Editor';
import {
  Root,
  AddIcon,
  AddMenuItem,
  Page,
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
  const { id: specID } = useParams();
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
  const handleBlocksSortChange = blocksIDs => dispatch(onUpdateSpecBlocksSort(blocksIDs));
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
    dispatch(onAddSpecBlockText({ blockID, specID, text }));
  };
  const handleRemoveBlock = blockID => () => {
    handleHideBlockEditor();
    dispatch(onRemoveSpecBlock(blockID));
  };
  const getBlockMarginByType = type => {
    if (type === 'Section') {
      return '0 0 4px 0';
    }

    if (type === 'Item') {
      return '0 0 7px 0';
    }

    return '0 0 15px 0';
  };
  const getBlockWrapperByType = (type, content) => {
    if (type === 'Section') {
      return <Section>{content}</Section>;
    }

    if (type === 'Item') {
      return <Item>{content}</Item>;
    }

    return <Product>{content}</Product>;
  };
  const selectedBlock = blocks.find(block => block.id === selectedBlockID);

  useEffect(() => {
    dispatch(onGetSpecBlocks(specID));
  }, []);

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
          {selectedBlock?.type === 'Product' && (
            <BlockMenuItem onClick={handleShowImagesModal(selectedBlockID)}>
              Añadir una imagen
            </BlockMenuItem>
          )}
          {selectedBlock?.type === 'Product' && <BlockMenuItem>Editar</BlockMenuItem>}
          <BlockMenuItem onClick={handleRemoveBlock(selectedBlockID)}>Eliminar</BlockMenuItem>
        </Dropdown>
      )}
      <Page>
        <DraggableList onChange={handleBlocksSortChange}>
          {blocks.map(block => {
            return ( 
              <Block disabled={block.type === 'Section'} id={block.id} key={block.id} margin={getBlockMarginByType(block.type)}>
                {getBlockWrapperByType(block.type, (
                  <>
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
                    {(block.type === 'Product' && (block?.element?.image || block?.element?.image === 0)) && (
                      <BlockImage>
                        <ProductImage src={block?.element?.images[block?.element?.image]?.url || '#'} />
                      </BlockImage>
                    )}
                    {block.type !== 'Product' && block?.element?.name}
                    {block.type === 'Product' && (
                      <BlockContent>
                        <ProductTitle>{block?.element?.name}</ProductTitle>
                        {block?.element?.long_desc && <ProductDescription dangerouslySetInnerHTML={{ __html: block?.element?.long_desc?.replace(/\n/g, '<br />') }} />}
                        {block?.element?.system && <ProductSystem>{`Sistema constructivo: ${block?.element?.system?.name}`}</ProductSystem>}
                        {block?.element?.reference && <ProductReference>{`Referencia ${block?.element?.reference}`}</ProductReference>}
                      </BlockContent>
                    )}
                  </>
                ))}
                {block?.element?.text && <BlockText dangerouslySetInnerHTML={{ __html: block?.element.text?.text }} />}
              </Block>
            );
          })}
        </DraggableList>
      </Page>
    </Root>
  );
};
  
export default SpecDocument;
