import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import { Container } from './Collaborator.styles';
import ClientInfoContainer from '../containers/client/client.container';
import ClientProductsContainer from '../containers/client-products-list/ClientProductsList.container';
import ClientProductsSeeMoreContainer from '../containers/client-products-list/ClientProductsListSeeMore.container';
import ContactFormModalContainer from '../containers/modal-contact-form/ModalContactForm.container';
import ProductModalContainer from '../containers/spec-modal-product/SpecModalProduct.container';

const Collaborator = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <Container>
        <ClientInfoContainer />
        <ClientProductsContainer />
        <ClientProductsSeeMoreContainer />
        <ContactFormModalContainer type="client"/>
        <ProductModalContainer />
      </Container>
    </AppLayout>
  )
};

export default Collaborator;
