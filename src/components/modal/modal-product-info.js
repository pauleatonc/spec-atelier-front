
import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '@Components/modal/modal';
import ProductInfo from '@Components/product-info/product-info';

const ModalProductInfo = () => {
  const { product, showModalProduct } = useSelector(state => state.products);
  return (
    <Modal isOpen={showModalProduct} size="md">
      <ProductInfo product={product} />
    </Modal>
  );
};

export default ModalProductInfo;
