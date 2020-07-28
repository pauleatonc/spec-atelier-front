import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Root } from './Collapsible.styles';

const TRANSITION_DURATION = 200;
const defaultStyle = {
  transform: 'scaleY(0)',
  transformOrigin: 'top',
  transition: `height ${TRANSITION_DURATION}ms linear, transform ${TRANSITION_DURATION}ms linear`,
};
const transitionStyles = {
  exited: { transform: 'scaleY(0)' },
  entered: { transform: 'scaleY(1)' },
};

/**
 * The Collapsible' component.
 */
const Collapsible = props => {
  const { children, show } = props;

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={TRANSITION_DURATION}
    >
      {state => (
        <Root style={{ ...defaultStyle, ...transitionStyles[state]}}>
          {children}
        </Root>
      )}
    </Transition>
  );
};

Collapsible.defaultProps = {
  show: false,
};
Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
};

export default Collapsible;
