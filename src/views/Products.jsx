import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import ProductsSearchContainer from '../containers/products-search/ProductsSearch.container';
import ProductsFiltersContainer from '../containers/products-filters/ProductsFilters.container';
import ProductsListContainer from '../containers/products-list/ProductsList.container';
import ModalProductContainer from '../containers/spec-modal-product/SpecModalProduct.container';
import { Container, Separator } from './Products.styles';
import ProductHeader from '../components/product/ProductsHeader';
import ProductsListSeeMore from '../containers/products-list/ProductsListSeeMore';
import ContactFormContainer from '../containers/modal-contact-form/ModalContactForm.container';
import AlertContainer from '../containers/alert/Alert.container';
/**
 * The Products' view.
 */
const Products = () => {
  return (
    <AppLayout footer={<Footer />} header={<NavBar />}>
      <ProductHeader />
      <Container>
        <ProductsSearchContainer />
        <ProductsFiltersContainer />
        <Separator />
        <ProductsListContainer />
        <ProductsListSeeMore />
      </Container>
      <AlertContainer />
      <ModalProductContainer />
      <ContactFormContainer type="product" />
    </AppLayout>
  );
};

export default Products;
