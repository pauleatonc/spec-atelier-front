import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Root, Content } from './Snackbar.styles';

const TRANSITION_DURATION = 200;

const defaultStyle = {
  transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  exited: { opacity: 0 },
  entered: { opacity: 1 },
};

/**
 * The Snackbar' component.
 */
const Snackbar = props => {
  const { children, show = false, onClose = () => undefined } = props;
  const handleEntered = () => setTimeout(() => onClose(), 5000);
  const handleClick = () => onClose();
  const content = (
    <Transition mountOnEnter unmountOnExit in={show} timeout={TRANSITION_DURATION} onEntered={handleEntered}>
      {state => (
        <Root>
          <Content style={{ ...defaultStyle, ...transitionStyles[state] }} onClick={handleClick}>
            {children}
          </Content>
        </Root>
      )}
    </Transition>
  );

  const snackBarElement = document.getElementById('__alerts');

  if (!snackBarElement) {
    return null;
  }

  return createPortal(content, snackBarElement);
};

Snackbar.defaultProps = {
  show: false,
  onClose: undefined,
};
Snackbar.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Snackbar;
