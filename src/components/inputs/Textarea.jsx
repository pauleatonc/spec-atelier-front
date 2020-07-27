import React from 'react';
import PropTypes from 'prop-types';
import { Root, Label, Textarea as TextareaBase } from './Textarea.styles';

/**
 * The Textarea' component.
 */
const Textarea = props => {
  const { label, placeholder, value, onChange, name, minHeight } = props;

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <TextareaBase name={name} placeholder={placeholder} value={value} onChange={onChange} minHeight={minHeight} />
    </Root>
  );
};

Textarea.defaultProps = {
  label: '',
  placeholder: '',
};
Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
