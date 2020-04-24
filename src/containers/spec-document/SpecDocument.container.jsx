import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onShowSpecCreateProduct } from '../spec-create-product/SpecCreateProduct.actions';
import DropdownMenu from '../../components/menus/DropdownMenu';
import { Root, AddIcon, MenuItem } from './SpecDocument.styles';
import specAddSource from '../../assets/images/icons/spec-add.svg';

/**
 * The SpecDocument's container.
 */
const SpecDocument = () => {
  const dispatch = useDispatch();
  const [anchor, setAnchor] = useState(undefined);
  const handleMenuOpen = event => setAnchor(event.currentTarget);
  const handleMenuClose = () => setAnchor(undefined);
  const handleCreateProduct = () => {
    handleMenuClose();
    dispatch(onShowSpecCreateProduct());
  }; 

  return (
    <Root>
      <AddIcon alt="Agregar sección" src={specAddSource} onClick={handleMenuOpen} />
      <DropdownMenu
        anchorRef={anchor}
        offset={{ x: -15, y: -16 }}
        open={Boolean(anchor)}
        origin={{ x: 'right', y: 'top' }}
        onClose={handleMenuClose}
      >
        <MenuItem>Añadir texto</MenuItem>
        <MenuItem>Añadir producto</MenuItem>
        <MenuItem onClick={handleCreateProduct}>Crear producto</MenuItem>
      </DropdownMenu>
    </Root>
  );
};

export default SpecDocument;
