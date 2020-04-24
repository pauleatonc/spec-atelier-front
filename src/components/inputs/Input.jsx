import React from 'react';
import PropTypes from 'prop-types';
import { Root, Label, Input as InputBase } from './Input.styles';

/**
 * The Input's component.
 */
const Input = props => {
  const { label, placeholder, value, width, onChange } = props;

  return (
    <Root width={width}>
      {label && <Label>{label}</Label>}
      <InputBase placeholder={placeholder} type="text" value={value} onChange={onChange} />
    </Root>
  );
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  width: '100%',
};
Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
