import React from 'react';
import PropTypes from 'prop-types';

/**
 * The LoadButton's component.
 */
const LoadButton = props => {
  const { children, onClick } = props;
  
  return (
    <button className="load-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

LoadButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoadButton;
