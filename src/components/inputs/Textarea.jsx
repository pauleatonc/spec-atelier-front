import React from 'react';
import PropTypes from 'prop-types';
import { Root, Label, Textarea as TextareaBase } from './Textarea.styles';

/**
 * The Textarea' component.
 */
const Textarea = props => {
  const { label, placeholder, value, onChange, name, minHeightTextArea } = props;

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <TextareaBase name={name} placeholder={placeholder} value={value} onChange={onChange} minHeightTextArea={minHeightTextArea} />
    </Root>
  );
};

Textarea.defaultProps = {
  label: '',
  placeholder: '',
  minHeightTextArea: '152px',
};
Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minHeightTextArea: PropTypes.string,
};

export default Textarea;
