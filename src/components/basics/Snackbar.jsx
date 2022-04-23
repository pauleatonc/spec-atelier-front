import React, { useEffect, useState } from 'react';
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

/** The Snackbar' component */
const Snackbar = (props) => {
  const { children, show, onClose = () => undefined, timeout } = props;
  const [showSnackBar, setShowSnackBar] = useState(show);
  const handleEntered = () => setTimeout(() => onClose(), 5000);
  const handleClick = () => onClose();

  useEffect(() => {
    if (!show) return;
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      onClose();
    }, timeout);
  }, [show]);

  const content = (
    <Transition
      mountOnEnter
      unmountOnExit
      in={showSnackBar}
      timeout={TRANSITION_DURATION}
      onEntered={handleEntered}
    >
      {(state) => (
        <Root>
          <Content
            style={{ ...defaultStyle, ...transitionStyles[state] }}
            onClick={handleClick}
          >
            {children}
          </Content>
        </Root>
      )}
    </Transition>
  );
  const snackbarElement = document.getElementById('__alerts');

  if (!snackbarElement) {
    return null;
  }

  return createPortal(content, snackbarElement);
};

Snackbar.defaultProps = {
  show: false,
  onClose: undefined,
  children: null,
  timeout: 5000,
};
Snackbar.propTypes = {
  timeout: PropTypes.number,
  children: PropTypes.node,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Snackbar;
