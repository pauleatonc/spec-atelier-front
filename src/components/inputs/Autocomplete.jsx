import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from '../menus/DropdownMenu';
import { Root, Label, Section, Input, AddOption, AddAction, AddText, Option } from './Autocomplete.styles';

/**
 * The Autocomplete' component.
 */
const Autocomplete = props => {
  const { disabled, label, options, placeholder, value: selectedOption, onChange } = props;
  const [anchor, setAnchor] = useState(undefined);
  const [width, setWidth] = useState('initial');
  const [innerValue, setInnerValue] = useState(selectedOption.label || '');
  const handleOpen = event => {
    setAnchor(event.currentTarget);
    setWidth(`${event.currentTarget.clientWidth - 18}px`);
  };
  const handleClose = () => setAnchor(undefined);
  const handleClick = option => () => {
    onChange(option);
    handleClose();
  };
  const handleChange = event => {
    onChange({ label: event.target.value, value: event.target.value });
  
    if (event.target.value === '') {
      handleClose();
    } else {
      handleOpen(event);
    }
  };

  useEffect(() => {
    setInnerValue(selectedOption.label || '');
  }, [selectedOption.label]);

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Section open={Boolean(anchor)}>
        <Input
          disabled={disabled}
          placeholder={placeholder}
          value={innerValue}
          onChange={handleChange}
        />
      </Section>
      <DropdownMenu 
        anchorRef={anchor}
        maxHeight="212px"
        offset={{ x: 9, y: 0 }}
        open={Boolean(anchor)}
        width={width}
        onClose={handleClose}
      >
        {!options.find(option => option.label === innerValue) && (
          <AddOption>
            <AddAction onClick={handleClose}>Añadir</AddAction>
            <AddText>{innerValue}</AddText>
          </AddOption>
        )}
        {options
          .filter(option => option.label.includes(innerValue))
          .map(option => (
          <Option key={option.value} onClick={handleClick(option)}>{option.label}</Option>
        ))}
      </DropdownMenu>
    </Root>
  );
};

Autocomplete.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
};
Autocomplete.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Autocomplete;
