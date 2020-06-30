import React from 'react';
import { Container } from './ProductHeader.styles';

import SRC from '../../assets/images/products/product-header-src.jpg';
import SRC2X from '../../assets/images/products/product-header-src@2x.jpg';
import SRC3X from '../../assets/images/products/product-header-src@3x.jpg';

const ProductHeader = () => (
  <Container>
    <img 
      alt="Specatelier" 
      src={SRC} 
      srcSet={`${SRC2X} 2x, ${SRC3X} 3x`}
    />
  </Container>
);

export default ProductHeader;