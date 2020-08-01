import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import { Container } from './Collaborator.styles';
import BrandInfoContainer from '../containers/brand/brand.container';
import BrandProductsContainer from '../containers/brand-products-list/BrandProductsList.container';
import BrandProductsSeeMoreContainer from '../containers/brand-products-list/BrandProductsListSeeMore.container';
import ContactFormModalContainer from '../containers/modal-contact-form/ModalContactForm.container';
import ProductModalContainer from '../containers/spec-modal-product/SpecModalProduct.container';

const Collaborator = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <Container>
        <BrandInfoContainer />
        <BrandProductsContainer />
        <BrandProductsSeeMoreContainer />
        <ContactFormModalContainer type="brand"/>
        <ProductModalContainer />
      </Container>
    </AppLayout>
  )
};

export default Collaborator;