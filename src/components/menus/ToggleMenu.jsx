import React from 'react';
import PropTypes from 'prop-types';
import useDropdown from 'components/basics/Dropdown.hooks';
import Dropdown from 'components/basics/Dropdown';
import { Section, Block } from './ToggleMenu.styles';

/** The ToggleMenu's component */
const ToggleMenu = (props) => {
  const { anchor, children, width } = props;
  const {
    anchor: anchorRef,
    onClose: handleClose,
    onOpen: handleOpen,
  } = useDropdown();

  return (
    <>
      <Section onClick={handleOpen}>{anchor}</Section>
      <Dropdown
        anchorRef={anchorRef}
        maxHeight="initial"
        open={Boolean(anchorRef)}
        width={width}
        onClose={handleClose}
      >
        <Block>{children(handleClose)}</Block>
      </Dropdown>
    </>
  );
};

ToggleMenu.defaultProps = {
  width: 'auto',
};
ToggleMenu.propTypes = {
  anchor: PropTypes.node.isRequired,
  children: PropTypes.func.isRequired,
  width: PropTypes.string,
};

export default ToggleMenu;
