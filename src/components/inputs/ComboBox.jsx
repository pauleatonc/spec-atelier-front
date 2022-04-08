import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/Button';
import {
  Root,
  Label,
  Section,
  Input,
  InputUnderline,
  Options,
  Option,
  OptionCheckboxIcon,
  OptionText,
  Actions,
} from './ComboBox.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import {
  CHECKBOX_OFF_SOURCE,
  CHECKBOX_ON_SECONDARY,
  CHECKBOX_ON_SOURCE,
} from '../../assets/Images';

/** The ComboBox's component */
const ComboBox = (props) => {
  const {
    disabled,
    label,
    options,
    optionAll,
    placeholder,
    submit,
    type,
    values,
    variant,
    onChange,
    onSubmit,
    onChangeSubmit,
  } = props;
  const [selectedOptions, setSelectedOptions] = useState(values || []);

  const handleClickOptionAll = (selected) => () => {
    const updatedOptions = selected ? [] : options;
    setSelectedOptions(updatedOptions);
    if (!submit || onChangeSubmit) {
      onChange(updatedOptions);
    }
  };

  const handleClickOption = (option, selected) => () => {
    const updatedOptions = selected
      ? selectedOptions.filter(
          (selectOption) => selectOption.value !== option.value,
        )
      : selectedOptions.concat(option);
    setSelectedOptions(updatedOptions);
    if (!submit || onChangeSubmit) {
      onChange(updatedOptions);
    }
  };

  const handleClickClean = () => {
    setSelectedOptions([]);
    if (!submit || onChangeSubmit) {
      onChange([]);
    }
  };

  const handleClickSubmit = () => onSubmit(selectedOptions);

  const formatInputValue = () => {
    const optionsLabels = selectedOptions.map(
      (selectedOption) => selectedOption.label,
    );
    if (optionsLabels.length === 0) {
      return '';
    }
    if (optionsLabels.length === 1) {
      return optionsLabels.shift();
    }
    if (optionsLabels.length === 2) {
      return optionsLabels.join(', ');
    }
    return `${optionsLabels.shift()}, ${optionsLabels.shift()}, (+${
      optionsLabels.length
    })`;
  };

  const allSelected = options.length === selectedOptions.length;
  const checkboxIconOn =
    variant === VARIANTS_BUTTON.PRIMARY
      ? CHECKBOX_ON_SOURCE
      : CHECKBOX_ON_SECONDARY;

  useEffect(() => {
    setSelectedOptions(values);
  }, [values]);

  return (
    <Root>
      {label && <Label>{label}</Label>}
      {type !== 'list' && (
        <Section>
          {type === 'default' && (
            <Input
              readOnly
              disabled={disabled}
              placeholder={placeholder}
              value={formatInputValue()}
            />
          )}
          {type === 'underline' && (
            <InputUnderline
              readOnly
              disabled={disabled}
              placeholder={placeholder}
              value={formatInputValue()}
            />
          )}
        </Section>
      )}
      <Options type={type}>
        {optionAll && (
          <Option onClick={handleClickOptionAll(allSelected)}>
            <OptionCheckboxIcon
              src={allSelected ? checkboxIconOn : CHECKBOX_OFF_SOURCE}
            />
            <OptionText>Todas</OptionText>
          </Option>
        )}
        {options.map((option) => {
          const selected = selectedOptions.find(
            (selectedOption) => selectedOption.value === option.value,
          );

          return (
            <Option
              key={option.value}
              onClick={handleClickOption(option, selected)}
            >
              <OptionCheckboxIcon
                src={selected ? checkboxIconOn : CHECKBOX_OFF_SOURCE}
              />
              <OptionText>{option.label}</OptionText>
            </Option>
          );
        })}
      </Options>
      {submit && (
        <Actions>
          <Button
            variant={VARIANTS_BUTTON.CANCEL_SECONDARY}
            onClick={handleClickClean}
          >
            Borrar
          </Button>
          <Button variant={variant} onClick={handleClickSubmit}>
            Guardar
          </Button>
        </Actions>
      )}
    </Root>
  );
};

ComboBox.defaultProps = {
  disabled: false,
  label: '',
  optionAll: false,
  placeholder: '',
  submit: false,
  type: 'default',
  variant: 'primary',
  onChange: () => undefined,
  onSubmit: () => undefined,
};
ComboBox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  optionAll: PropTypes.bool,
  placeholder: PropTypes.string,
  submit: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'underline', 'list']),
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ComboBox;
