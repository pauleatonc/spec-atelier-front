import React from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  Label,
  Input as InputBase,
  InputUnderline,
  InputForm,
} from './Input.styles';

/** The Input's component */
const Input = (props) => {
  const {
    label,
    placeholder,
    value,
    width,
    onChange,
    name,
    variant,
    type,
    disabled,
    inputType,
    ...restProps
  } = props;

  return (
    <Root width={width}>
      {label && <Label>{label}</Label>}
      {type === 'default' && (
        <InputBase
          name={name}
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={onChange}
        />
      )}
      {type === 'underline' && (
        <InputUnderline
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          variant={variant}
          type={inputType}
          value={value}
          onChange={onChange}
          {...restProps}
        />
      )}
      {type === 'form' && (
        <InputForm
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          variant={variant}
          type={inputType}
          value={value}
          onChange={onChange}
          {...restProps}
        />
      )}
    </Root>
  );
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  width: '100%',
  name: '',
  type: 'default',
  disabled: false,
  inputType: 'text',
};
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'underline', 'form']),
  disabled: PropTypes.bool,
  inputType: PropTypes.string,
};

export default Input;
