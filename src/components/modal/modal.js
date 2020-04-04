
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleModalProduct } from '@Actions/product.action';

const Modal = ({ isOpen, size, children }) => {
  const dispatch = useDispatch();
  const onToogle = () => dispatch(toggleModalProduct());

  useEffect(() => {
    const { body } = document;
    if (isOpen) body.style['overflow-y'] = 'hidden';
    return () => {
      body.style['overflow-y'] = 'scroll';
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div tabIndex="-1" className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className={`modal-container ${size}`}>
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
