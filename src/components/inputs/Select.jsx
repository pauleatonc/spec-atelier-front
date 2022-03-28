import React from 'react';
import PropTypes from 'prop-types';
import useDropdown from '../basics/Dropdown.hooks';
import Dropdown from '../basics/Dropdown';
import { Root, Label, Section, Input, InputUnderline, DropIcon, Option } from './Select.styles';
import { ICON_ARROW_DOWN } from '../../assets/Images';

/** The Select' component */
const Select = props => {
  const { disabled, label, options, placeholder, value: selectedOption, onChange, type, name } = props;
  const {
    anchor,
    width,
    onClick: handleClick,
    onClose: handleClose,
    onOpen: handleOpen,
  } = useDropdown({ clickCallback: option => onChange(option, name) });

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Section onClick={disabled ? undefined : handleOpen}>
        {type === 'default' &&
        <Input readOnly disabled={disabled} placeholder={placeholder} value={selectedOption.label || ''} />}
        {type === 'underline' &&
        <InputUnderline readOnly disabled={disabled} placeholder={placeholder} value={selectedOption.label || ''} /> }
        <DropIcon alt='arrow down' src={ICON_ARROW_DOWN} />
      </Section>
      <Dropdown 
        anchorRef={anchor}
        maxHeight='212px'
        offset={{ x: 9, y: 0 }}
        open={Boolean(anchor)}
        width={width}
        onClose={handleClose}
      >
        {options.map(option => (
          <Option key={option.value} onClick={handleClick(option)}>
            {option.label}
          </Option>
        ))}
      </Dropdown>
    </Root>
  );
};

Select.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  type: 'default',
  name: '',
};
Select.propTypes = {
  name: PropTypes.string,
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

export default Select;
