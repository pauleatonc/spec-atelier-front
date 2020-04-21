import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Root, Container, Content, ButtonClose } from './modal.styles';
import { hideModal } from './modal.actions';

const modalRoot = document.getElementById('modal');
const { body } = document;

const Modal = ({ size, children, isOpen }) => {
  const refModal = useRef(null);
  const dispacth = useDispatch();
  const hide = () => dispacth(hideModal());
  const outsideClick = ref => {
    const handleClickOutside = event => ref.current && !ref.current.contains(event.target) && hide();
    // Click Outside Modal
    useEffect(() => {
      modalRoot.addEventListener("click", handleClickOutside);
      return () => modalRoot.removeEventListener("click", handleClickOutside);
    });

    // Disable Scroll Body when is Open
    useEffect(() => {
      if (isOpen) body.style['overflow-y'] = 'hidden';
      return () => {
        body.style['overflow-y'] = 'scroll';
      };
    }, [isOpen]);
  }

  outsideClick(refModal);

  if (!isOpen) return null;

  return createPortal(
    <Root tabIndex="-1" role="dialog">
      <Container>
        <Content ref={refModal} size={size}>
          <ButtonClose
            role="button"
            tabIndex="0"
            onKeyDown={hide}
            onClick={hide}
          >
            <i className="fas fa-times" />
          </ButtonClose>
          {children}
        </Content>
      </Container>
    </Root>,
    modalRoot
  );
};

Modal.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.element.isRequired,
};

Modal.defaultProps = {
  size: 'md',
};

export default Modal;
