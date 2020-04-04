
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Loading = () => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    Cargando...
  </div>
);

const ProductInfo = ({ product }) => {
  if (!product || !product.id) return <Loading />
  const [selectedImg, selectImg] = useState((product?.images?.length && product.images[0]) || '');
  const onContact = e => {
    // e.stopPropagation();
    // TODO: Add code 
  };

  const handleIconClick = documents => () => {
    documents.forEach(async doc => {
      const link = document.createElement("a");
      link.download = doc;
      link.href = doc;
      // TODO: test
      link.target = '_blank';
      link.id = 'doc';
      document.body.appendChild(link);
      link.click();
      return setTimeout(() => document.body.removeChild(link), 2000);
    });
  }
  return (
    <div className="product-container">
      <div className="product-content">
        {/* Header Product */}
        <div className="header">
          <div className="title">
            {`${product.name} / ${product.short_desc}`}
          </div>
        </div>
        {/* Content product */}
        <div className="content" >
          {/* Images list */}
          <div className="images-container">
            {product?.images?.length && product.images.map((img, i) => (
              <div
                key={img}
                role="button"
                tabIndex={img}
                className="image-content"
                onKeyDown={() => selectImg(img)}
                onClick={() => selectImg(img)}
              >
                <img
                  className={`image ${img === selectedImg ? 'active' : ''}`}
                  src={img}
                  alt={`product-${img}`}
                />
              </div>
            ))}
          </div>
          {/* Image primay */}
          <div className="image-selected">
            <img
              className="image"
              src={selectedImg}
              alt={`product-${selectedImg}`}
            />
          </div>
          {/* Info Product */}
          <div className="info-container">
            <div className="info-content">
              <div className="name">
                {product.reference}
              </div>
              <div className="long-description">
                {product.long_desc}
              </div>
              <div className="brand">
                {`${product?.system?.name || ''}: ${product?.brand?.name || ''}`}
              </div>

              <div className="actions">
                <div>
                  <input type="button" value="Contactar" className="button-contact" />
                </div>
                <div className="icons">
                  <span
                    className={`icon dwg ${product.dwg_url ? 'active' : ''}`}
                    onClick={handleIconClick([product.dwg_url])}
                  />
                  <span
                    className={`icon bim${product.dwg_url ? 'active' : ''}`}
                    onClick={handleIconClick([product.bim_url])}
                  />
                  <span
                    className={`icon tech ${Array.isArray(product.spec_pdf_url) && product.spec_pdf_url.length ? 'active' : ''}`}
                    onClick={handleIconClick(product.spec_pdf_url)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


ProductInfo.propTypes = {
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
  id: 0,
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
}

ProductInfo.defaultProps = {
  product
}
export default ProductInfo;
