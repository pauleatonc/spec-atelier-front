import React from 'react';
import { Header } from './ProductsHeader.styles';

import SRC from '../../assets/images/products/product-header-src.jpg';
import SRC2X from '../../assets/images/products/product-header-src@2x.jpg';
import SRC3X from '../../assets/images/products/product-header-src@3x.jpg';

const ProductsHeader = () => (
  <Header
    alt="Specatelier"
    src={SRC}
    srcSet={`${SRC2X} 2x, ${SRC3X} 3x`}
  />
);

export default ProductsHeader;