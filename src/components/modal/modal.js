
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, size, toggle, children }) => {
  useEffect(() => {
    const { body } = document;
    if (isOpen) body.style['overflow-y'] = 'hidden';
    return () => {
      body.style['overflow-y'] = 'scroll';
    };
  }, [isOpen]);
  const onToogle = () => toggle(false);

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
  isOpen: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  toggle: PropTypes.func.isRequired,
  children: PropTypes.element,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    long_description: PropTypes.string.isRequired,
    system: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    reference: PropTypes.string.isRequired,
    brand: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    dwg_url: PropTypes.string.isRequired,
    bim_url: PropTypes.string.isRequired,
    spec_pdf_url: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number,
        url: PropTypes.string,
      })
    ),
  })
};

const product = {
  id: 1,
  name: '',
  short_description: '',
  long_description: '',
  system: {},
  reference: '',
  brand: {},
  dwg_url: '',
  bim_url: '',
  spec_pdf_url: [],
  images: [],
};

Modal.defaultProps = {
  size: 'md',
  product,
  children: null,
}

export default Modal;
