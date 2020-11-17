import React from 'react';
import PropTypes from 'prop-types';
import Button from './Tag.styles';

/**
 * The Tag's component. 
 */
const Tag = props => {
  const { children, disabled, selected, onClick } = props;

  return (
    <Button disabled={disabled} selected={selected} type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

Tag.defaultProps = {
  disabled: false,
  selected: false,
  onClick: () => undefined,
};
Tag.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tag;
