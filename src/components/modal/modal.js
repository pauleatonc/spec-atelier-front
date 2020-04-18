
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleModalProduct } from '@Actions/product.actions';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');
const element = document.createElement('div');
const { body } = document;

const Modal = ({ isOpen, size, children }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();
  const onToogle = () => dispatch(toggleModalProduct());
  const refModal = useRef(null);

  const outsideClick = ref => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        onToogle();
      }
    }
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

  // We append the created div to the div#modal
  useEffect(() => {
    modalRoot.appendChild(element);
    return () => modalRoot.removeChild(element);
  });

  return createPortal(
    <div tabIndex="-1" className="modal" role="dialog">
      <div className="modal-dialog">
        <div ref={refModal} className={`modal-container ${size}`}>
          <div
            className="button-close"
            role="button"
            tabIndex="0"
            onKeyDown={onToogle}
            onClick={onToogle}
          >
            <i className="fas fa-times" />
          </div>
          {children}
        </div >
      </div>
    </div>,
    element
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
