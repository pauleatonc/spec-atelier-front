
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
  const onSelectImg = img => () => selectImg(img);
  
  // TODO: This will go to contact view.
  const onContact = () => {};

  // Download documents 
  const handleIconClick = documents => () => {
    documents.forEach(async doc => {
      const link = document.createElement("a");
      link.download = doc;
      link.href = doc;
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
        <section className="header">
          <div className="title">
            {`${product.name} / ${product.short_desc}`}
          </div>
        </section>
        {/* Content product */}
        <section className="content">
          {/* Images list */}
          <section className="images-container">
            {product?.images?.length && product.images.map(img => (
              <div
                key={img.url}
                role="button"
                tabIndex={img.order}
                className="image-content"
                onKeyDown={onSelectImg(img)}
                onClick={onSelectImg(img)}
              >
                <img
                  className={`image ${img.order === selectedImg.order ? 'active' : ''}`}
                  src={img}
                  alt={`product-${img.order}`}
                />
              </div>
            ))}
          </section>
          {/* Image primary */}
          <section className="image-selected">
            <img
              className="image"
              src={selectedImg}
              alt={`product-${selectedImg.id}`}
            />
          </section>
          {/* Info Product */}
          <section className="info-container">
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

              <section className="actions">
                <div>
                  <input 
                    type="button" 
                    value="Contactar" 
                    className="button-contact"
                    onClick={onContact}
                  />
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
              </section>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};


ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    short_desc: PropTypes.string,
    long_desc: PropTypes.string,
    system: PropTypes.object,
    reference: PropTypes.string.isRequired,
    brand: PropTypes.object,
    dwg_url: PropTypes.string.isRequired,
    bim_url: PropTypes.string.isRequired,
    spec_pdf_url: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.array,
  })
};

const product = {
  id: 0,
  name: '',
  short_desc: '',
  long_desc: '',
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
