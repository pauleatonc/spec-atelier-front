import React from 'react';
import { CloseIcon } from './CloseButton.styles';

const CloseButton = (props) => (
  <CloseIcon alt="Cerrar" tabIndex="0" role="button" {...props} />
);

export default CloseButton;
