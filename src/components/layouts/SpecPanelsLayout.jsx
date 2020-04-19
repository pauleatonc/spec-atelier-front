import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './SpecPanelsLayout.context';
import Root from './SpecPanelsLayout.styles';

/**
 * The SpecPanelsLayout's component.
 */
const SpecPanelsLayout = props => {
  const { children } = props;
  const [show, setShow] = useState(false);
  const handleShow = updatedValue => setShow(updatedValue);
  const contextPayload = { show, onShow: handleShow };

  return (
    <Context.Provider value={contextPayload}>
      <Root show={show}>
        {children}
      </Root>
    </Context.Provider>
  );
};

SpecPanelsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecPanelsLayout;
