import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onShowSpecCreateProductSuccess } from '../spec-create-product/SpecCreateProduct.actions';
import { onShowSpecProductsSuccess } from '../spec-products/SpecProducts.actions';
import { onCreateSpecItemText } from './SpecDocument.actions';
import useDropdown from '../../components/basics/Dropdown.hooks';
import Dropdown from '../../components/basics/Dropdown';
import Editor from '../../components/inputs/Editor';
import { Root, AddIcon, MenuItem, Page, Block, BlockTitle, Section, SectionTitle, SectionItem, BlockEditor } from './SpecDocument.styles';
import specAddSource from '../../assets/images/icons/spec-add.svg';

/**
 * The SpecDocument's container.
 */
const SpecDocument = () => {
  const { id: projectID } = useParams();
  const dispatch = useDispatch();
  const [showTextEditor, setShowTextEditor] = useState(false);
  const {
    anchor,
    onClose: handleMenuClose,
    onOpen: handleMenuOpen,
  } = useDropdown();
  const handleShowTextEditor = () => {
    handleMenuClose();
    setShowTextEditor(true);
  };
  const handleHideTextEditor = () => setShowTextEditor(false);
  const handleShowProducts = () => {
    handleMenuClose();
    dispatch(onShowSpecProductsSuccess());
  };
  const handleCreateProduct = () => {
    handleMenuClose();
    dispatch(onShowSpecCreateProductSuccess());
  };
  const handleCreateSpecTextItem = text => {
    handleHideTextEditor();
    dispatch(onCreateSpecItemText({ projectID, text }));
  };

  return (
    <Root>
      <AddIcon alt="Agregar sección" src={specAddSource} onClick={handleMenuOpen} />
      <Dropdown
        anchorRef={anchor}
        offset={{ x: -15, y: -16 }}
        open={Boolean(anchor)}
        origin={{ x: 'right', y: 'top' }}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleShowTextEditor}>Añadir texto</MenuItem>
        <MenuItem onClick={handleShowProducts}>Añadir producto</MenuItem>
        <MenuItem onClick={handleCreateProduct}>Crear producto</MenuItem>
      </Dropdown>
      <Page>
        <Block>
          {showTextEditor && (
            <BlockEditor>
              <Editor
                actions
                label="Texto"
                placeholder="Ingresa el texto"
                onCancel={handleHideTextEditor}
                onSubmit={handleCreateSpecTextItem}
              />
            </BlockEditor>
          )}
          <BlockTitle>Terminaciones</BlockTitle>
          <Section>
            <SectionTitle>Puertas</SectionTitle>
            <SectionItem />
          </Section>
        </Block>
        <Block>
          <BlockTitle />
          <Section>
            <SectionTitle />
            <SectionItem />
          </Section>
        </Block>
        <Block>
          <BlockTitle />
          <Section>
            <SectionTitle />
            <SectionItem />
          </Section>
        </Block>
      </Page>
    </Root>
  );
};
  
export default SpecDocument;
