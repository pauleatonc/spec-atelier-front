import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useDropdown from '../basics/Dropdown.hooks';
import Dropdown from '../basics/Dropdown';
import { Root, Label, Section, Input, InputUnderline, DropIcon, Option, OptionCheckboxIcon, OptionText } from './MultiSelect.styles';
import checkboxOffSource from '../../assets/images/icons/checkbox-off.svg';
import checkboxOnSource from '../../assets/images/icons/checkbox-on.svg';
import dropArrowSource from '../../assets/images/icons/drop-arrow.svg';

/**
 * The MultiSelect' component.
 */
const MultiSelect = props => {
  const { disabled, label, options, placeholder, type, values: selectedOptions, width, onChange } = props;
  const {
    anchor,
    width: anchorWidth,
    onClick: handleClick,
    onClose: handleClose,
    onOpen: handleOpen,
  } = useDropdown({
    closeOnClick: false,
    clickCallback: (option, selected) => {
      const updatedOptions = selected
        ? selectedOptions.filter(selectOption => selectOption.value !== option.value)
        : selectedOptions.concat(option);

      onChange(updatedOptions);
    },
  });
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

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Section onClick={disabled ? undefined : handleOpen}>
        {type === 'default' && <Input readOnly disabled={disabled} placeholder={placeholder} value={formatInputValue()} />}
        {type === 'underline' && <InputUnderline readOnly disabled={disabled} placeholder={placeholder} value={formatInputValue()} /> }
        <DropIcon alt="" src={dropArrowSource} />
      </Section>
      <Dropdown 
        anchorRef={anchor}
        maxHeight="212px"
        offset={{ x: 0, y: 14 }}
        open={Boolean(anchor)}
        width={width || anchorWidth}
        onClose={handleClose}
      >
        {options.map(option => {
          const selected = selectedOptions.find(selectedOption => selectedOption.value === option.value);
          
          return (
            <Option key={option.value} onClick={handleClick(option, selected)}>
              <OptionCheckboxIcon src={selected ? checkboxOnSource : checkboxOffSource} />
              <OptionText>{option.label}</OptionText>
            </Option>
          );
        })}
      </Dropdown>
    </Root>
  );
};

MultiSelect.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  type: 'default',
  width: '251px',
};
MultiSelect.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['default', 'underline']),
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  width: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default MultiSelect;
