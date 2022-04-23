import React from 'react';
import {
  PRODUCT_HEADER,
  PRODUCT_HEADER_2X,
  PRODUCT_HEADER_3X,
} from 'assets/Images';
import { Header } from './ProductsHeader.styles';

const ProfileHeader = () => (
  <Header
    alt="Specatelier"
    src={PRODUCT_HEADER}
    srcSet={`${PRODUCT_HEADER_2X} 2x, ${PRODUCT_HEADER_3X} 3x`}
  />
);

export default ProfileHeader;
