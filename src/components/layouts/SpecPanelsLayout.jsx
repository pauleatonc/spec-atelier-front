import React, { Children, cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './SpecPanelsLayout.context';
import { Root, Filters, Panels, Title } from './SpecPanelsLayout.styles';

/**
 * The SpecPanelsLayout's component.
 */
const SpecPanelsLayout = props => {
  const { children, filtersPanels } = props;
  const [show, setShow] = useState(false);
  const handleShow = updatedValue => setShow(updatedValue);
  const contextPayload = { show, onShow: handleShow };

  return (
    <Context.Provider value={contextPayload}>
      <Root show={show}>
        <Title>Productos</Title>
        <Panels>
          <Filters>
            {Children.map(filtersPanels, (child, index) => cloneElement(child, { key: `filter-panel-${index}` }))}
          </Filters>
          {children}
        </Panels>
      </Root>
    </Context.Provider>
  );
};

SpecPanelsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecPanelsLayout;
