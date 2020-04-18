import React from 'react';
import { Root, Add } from './SpecDocument.styles';
import specAddSource from '../../assets/images/icons/spec-add.svg';

/**
 * The SpecDocument's container.
 */
const SpecDocument = () => {
  return (
    <Root>
      <Add alt="Agregar sección" src={specAddSource} />
    </Root>
  );
};

export default SpecDocument;
