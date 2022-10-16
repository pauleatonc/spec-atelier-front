import React from 'react';
import PropTypes from 'prop-types';
import useDropdown from '../basics/Dropdown.hooks';
import Dropdown from '../basics/Dropdown';
import {
  Root,
  Section,
  DropdownIcon,
  Option,
  Text,
} from './DropdownMenu.styles';
import { DROPDOWN_ARROW } from '../../assets/Images';

/** The DropdownMenu's component */
const DropdownMenu = (props) => {
  const {
    options,
    placeholder,
    value: selectedOption,
    width,
    onChange,
  } = props;
  const {
    anchor,
    width: anchorWidth,
    onClick: handleClick,
    onClose: handleClose,
    onOpen: handleOpen,
  } = useDropdown({ clickCallback: (option) => onChange(option) });

  return (
    <Root>
      <Section onClick={handleOpen}>
        <Text>{selectedOption.label || placeholder}</Text>
        <DropdownIcon alt="dropdown arrow" src={DROPDOWN_ARROW} />
      </Section>
      <Dropdown
        anchorRef={anchor}
        maxHeight="212px"
        open={Boolean(anchor)}
        width={width || anchorWidth}
        onClose={handleClose}
      >
        {options.map((option) => (
          <Option key={option.value} onClick={handleClick(option)}>
            {option.label}
          </Option>
        ))}
      </Dropdown>
    </Root>
  );
};

DropdownMenu.defaultProps = {
  placeholder: '',
  width: '',
};
DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  width: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default DropdownMenu;
