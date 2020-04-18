import React from 'react';
import PropTypes from 'prop-types';
import Button from './Tag.styles';

/**
 * The Tag's component. 
 */
const Tag = props => {
  const { children, selected, onClick } = props;

  return (
    <Button selected={selected} type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

Tag.defaultProps = {
  selected: false,
  onClick: () => undefined,
};
Tag.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tag;
