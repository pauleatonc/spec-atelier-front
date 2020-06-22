import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from '../menus/DropdownMenu';
import { Root, Label, Section, Input, DropIcon, Option, InputUnderline } from './Select.styles';
import dropArrowSource from '../../assets/images/icons/drop-arrow.svg';

/**
 * The MultiSelect' component.
 */
const MultiSelect = props => {
  const { disabled, label, options, placeholder, value: selectedOption, onChange, type } = props;
  const [anchor, setAnchor] = useState(undefined);
  const [width, setWidth] = useState('initial');
  const handleOpen = event => {
    setAnchor(event.currentTarget);
    setWidth(`${event.currentTarget.clientWidth - 18}px`);
  };
  const handleClose = () => setAnchor(undefined);
  const handleClick = option => () => {
    onChange(option);
    handleClose();
  };

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Section onClick={disabled ? undefined : handleOpen}>
        {type === 'default' && <Input readOnly disabled={disabled} placeholder={placeholder} value={selectedOption.label || ''} />}
        {type === 'underline' && <InputUnderline readOnly disabled={disabled} placeholder={placeholder} value={selectedOption.label || ''} /> }
        <DropIcon alt="" src={dropArrowSource} />
      </Section>
      <DropdownMenu 
        anchorRef={anchor}
        maxHeight="212px"
        offset={{ x: 9, y: 0 }}
        open={Boolean(anchor)}
        width={width}
        onClose={handleClose}
      >
        {options.map(option => (
          <Option key={option.value} onClick={handleClick(option)}>{option.label}</Option>
        ))}
      </DropdownMenu>
    </Root>
  );
};

MultiSelect.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  type: 'default',
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
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'underline']),
};

export default MultiSelect;
