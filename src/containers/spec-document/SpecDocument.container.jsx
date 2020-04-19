import React, { useState } from 'react';
import DropdownMenu from '../../components/dropdown/DropdownMenu';
import { Root, AddIcon, MenuItem } from './SpecDocument.styles';
import specAddSource from '../../assets/images/icons/spec-add.svg';

/**
 * The SpecDocument's container.
 */
const SpecDocument = () => {
  const [anchor, setAnchor] = useState(undefined);
  const handleOpen = event => setAnchor(event.currentTarget);
  const handleClose = () => setAnchor(undefined);

  return (
    <Root>
      <AddIcon alt="Agregar sección" src={specAddSource} onClick={handleOpen} />
      <DropdownMenu
        anchorRef={anchor}
        offset={{ x: -15, y: -16 }}
        open={Boolean(anchor)}
        origin={{ x: 'right', y: 'top' }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Añadir texto</MenuItem>
        <MenuItem onClick={handleClose}>Añadir producto</MenuItem>
        <MenuItem onClick={handleClose}>Crear producto</MenuItem>
      </DropdownMenu>
    </Root>
  );
};

export default SpecDocument;
