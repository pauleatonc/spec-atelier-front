import React, { cloneElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Root from './ModalLayout.styles';

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
 * The ModalLayout's component.
 */
const ModalLayout = props => {
  const { children, overlay, show, transition, onClose, onExiting } = props;
  const rootRef = useRef(undefined);
  const handleClick = event => onClose(event);
  const handleKey = event => {
    if (event.key !== 'Escape' && event.keyCode !== 27) {
      return;
    }

    onClose(event);
  };
  const handleEscape = event => event.stopPropagation();
  const content = (
    <Transition mountOnEnter unmountOnExit in={show} timeout={TRANSITION_DURATION} onExiting={onExiting}>
      {state => (
        <Root
          overlay={overlay}
          ref={rootRef}
          style={transition ? { ...defaultStyle, ...transitionStyles[state] } : undefined}
          tabIndex={-1}
          onClick={handleClick}
          onKeyDown={handleKey}
        >
          {cloneElement(children, { onClick: handleEscape })}
        </Root>
      )}
    </Transition>
  );
  const modalElement = document.getElementById('__modals');

  useEffect(() => {
    if (!show) {
      return;
    }

    rootRef.current.focus();
  }, [show]);

  if (!modalElement) {
    return null;
  }

  return createPortal(content, modalElement);
};

ModalLayout.defaultProps = {
  overlay: true,
  transition: true,
  onClose: () => undefined,
  onExiting: () => undefined,
};
ModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.bool,
  transition: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onExiting: PropTypes.func,
};

export default ModalLayout;
