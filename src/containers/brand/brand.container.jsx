import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
} from './brand.styles';

import { getBrand } from './brand.actions';
import BrandInfo from '../../components/brand/BrandInfo';
import BrandGallery from '../../components/brand/BrandGallery';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';

const Brand = () => {
  const { brand, loading } = useSelector(state => state.brand);
  const { params } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrand(params.id));
  }, []);

  const onClickContact = () => dispatch(openContactModal(brand));

  if (loading) return <Loading />;
  if (!brand) return <Container />;

  return (
    <Container>
      <BrandInfo onClickContact={onClickContact} brand={brand} />
      <BrandGallery images={brand.product_images} />
    </Container>
  )
};

export default Brand;