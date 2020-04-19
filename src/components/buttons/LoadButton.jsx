import React from 'react';
import PropTypes from 'prop-types';
import Button from './LoadButton.styles';

/**
 * The LoadButton's component.
 */
const LoadButton = props => {
  const { children, onClick } = props;
  
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

LoadButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoadButton;
