import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import BRAND_HEADER from '../assets/images/colaborations/colaborations_header.jpg';
import BrandsListContainer from '../containers/brands-list/BrandsList.container';
import { Container, Content, ImgHeader } from './Collaborators.styles';
import BrandsSeeMoreButtonContainer from '../containers/brands-buttons/BrandsSeeMore.container';
import BrandsFiltersContainer from '../containers/brands-search/BrandsSearch.container';
import BrandModalContainer from '../containers/brand-modal/BrandModal.container';

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
      <BrandModalContainer />
    </AppLayout>
  );
};

export default Collaborators;
