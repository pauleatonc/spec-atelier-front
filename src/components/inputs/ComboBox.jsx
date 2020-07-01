import React from 'react';
import PropTypes from 'prop-types';
import { Root, Label, Section, Input, InputUnderline, Options, Option, OptionCheckboxIcon, OptionText } from './ComboBox.styles';
import checkboxOffSource from '../../assets/images/icons/checkbox-off.svg';
import checkboxOnSource from '../../assets/images/icons/checkbox-on.svg';

/**
 * The ComboBox's component.
 */
const ComboBox = props => {
  const { disabled, label, options, optionAll, placeholder, type, values: selectedOptions, onChange } = props;
  const handleClickOptionAll = selected => () => {
    const updatedOptions = selected ? [] : options;

    onChange(updatedOptions);
  };
  const handleClickOption = (option, selected) => () => {
    const updatedOptions = selected
      ? selectedOptions.filter(selectOption => selectOption.value !== option.value)
      : selectedOptions.concat(option);

    onChange(updatedOptions);
  };
  const formatInputValue = () => {
    const optionsLabels = selectedOptions.map(selectedOption => selectedOption.label);

    if (optionsLabels.length === 0) {
      return '';
    }

    if (optionsLabels.length === 1) {
      return optionsLabels.shift();
    }

    if (optionsLabels.length === 2) {
      return optionsLabels.join(', ');
    }

    return `${optionsLabels.shift()}, ${optionsLabels.shift()}, (+${optionsLabels.length})`;
  };
  const allSelected = options.length === selectedOptions.length;

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Section>
        {type === 'default' && <Input readOnly disabled={disabled} placeholder={placeholder} value={formatInputValue()} />}
        {type === 'underline' && <InputUnderline readOnly disabled={disabled} placeholder={placeholder} value={formatInputValue()} /> }
      </Section>
      <Options type={type}>
        {optionAll && (
          <Option onClick={handleClickOptionAll(allSelected)}>
            <OptionCheckboxIcon src={allSelected ? checkboxOnSource : checkboxOffSource} />
            <OptionText>Todas</OptionText>
          </Option>
        )}
        {options.map(option => {
          const selected = selectedOptions.find(selectedOption => selectedOption.value === option.value);
          
          return (
            <Option key={option.value} onClick={handleClickOption(option, selected)}>
              <OptionCheckboxIcon src={selected ? checkboxOnSource : checkboxOffSource} />
              <OptionText>{option.label}</OptionText>
            </Option>
          );
        })}
      </Options>
    </Root>
  );
};

ComboBox.defaultProps = {
  disabled: false,
  label: '',
  optionAll: false,
  placeholder: '',
  type: 'default',
};
ComboBox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
  optionAll: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['default', 'underline']),
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ComboBox;
