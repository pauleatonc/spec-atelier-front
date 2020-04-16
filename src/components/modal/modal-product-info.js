
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loading, Modal } from '../components';

const ModalProductInfo = () => {
  const { product, showModalProduct } = useSelector(state => state.products);

  const [selectedImg, selectImg] = useState((product?.images?.length && product.images[0]) || '');
  const onSelectImg = img => () => selectImg(img);

  const noImgText = 'sin imágen';

  // TODO: This will go to contact view.
  const onContact = () => { };

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
  if (!showModalProduct) return null;
  if (!product || !product.id) return <Loading />

  return (
    <Modal isOpen={showModalProduct}>
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
              {product?.images?.length && product.images.map((img = {}) => (
                <div
                  key={img.url}
                  role="button"
                  tabIndex={img.order}
                  className="image-content"
                  onKeyDown={onSelectImg(img.url)}
                  onClick={onSelectImg(img.url)}
                >
                  <img
                    className={`image ${img.order === selectedImg.order ? 'active' : ''}`}
                    src={img.url}
                    alt={`producto ${img.order || noImgText}`}
                  />
                </div>
              ))}
            </section>
            {/* Image primary */}
            <section className="image-selected">
              <img
                className="image"
                src={selectedImg}
                alt={`producto ${selectedImg.id || noImgText}`}
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
    </Modal>
  );
};

export default ModalProductInfo;
