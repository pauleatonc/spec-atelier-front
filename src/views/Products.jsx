import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import ProductsSearchContianer from '../containers/products-search/ProductsSearch.container';
import ProductsFiltersContianer from '../containers/products-filters/ProductsFilters.container';
import ProductsListContainer from '../containers/products-list/ProductsList.container';
import ModalProductContainer from '../containers/spec-modal-product/SpecModalProduct.container';
import { Container, Separator } from './Products.styles';
import ProductHeader from '../components/product/ProductsHeader';
/**
 * The Products' view.
 */
const Products = () => {
  return (
    <AppLayout footer={<Footer />} header={<NavBar />}>
      <ProductHeader />
      <Container>
        <ProductsSearchContianer />
        <ProductsFiltersContianer />
        <Separator />
        <ProductsListContainer />
      </Container>
      <ModalProductContainer />
    </AppLayout>
  );
};

export default Products;
