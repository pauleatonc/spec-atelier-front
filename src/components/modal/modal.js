
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleModalProduct } from '@Actions/product.actions';

const Modal = ({ isOpen, size, children }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();
  const onToogle = () => dispatch(toggleModalProduct());
  const refModal = useRef(null);
  const { body } = document;

  const outsideClick = ref => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        onToogle();
      }
    }
    // Click Outside Modal
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
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
  return (
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
    </div>
  );
};

Modal.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.element,
};

Modal.defaultProps = {
  size: 'md',
  children: null,
}

export default Modal;
