import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import BRAND_HEADER from '../assets/images/collaborators/collaborators_header.jpg';
import BrandsListContainer from '../containers/brands-list/BrandsList.container';
import { ImgHeader } from './Collaborators.styles';
import BrandsSeeMoreButtonContainer from '../containers/brands-buttons/BrandsSeeMore.container';
import BrandsFiltersContainer from '../containers/brands-search/BrandsSearch.container';
import ContactFormModalContainer from '../containers/modal-contact-form/ModalContactForm.container';
import AlertContainer from '../containers/alert/Alert.container';

/**
 * The Colaboration's view.
 */
const Collaborators = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <ImgHeader background={BRAND_HEADER} />
      <BrandsFiltersContainer />
      <BrandsListContainer />
      <BrandsSeeMoreButtonContainer />
      <ContactFormModalContainer type="brand"/>
      <AlertContainer />
    </AppLayout>
  );
};

export default Collaborators;
