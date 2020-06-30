import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import ProductsFiltersContianer from '../containers/products-filters/ProductsFilters.container';
import ProductsListContainer from '../containers/products-list/ProductsList.container';
import { Container, Separator } from './Products.styles';
import ProductHeader from '../components/product/ProductHeader';
/**
 * The Products' view.
 */
const Products = () => {
  return (
    <AppLayout footer={<Footer />} header={<NavBar />}>
      <ProductHeader />
      <Container>
        <ProductsFiltersContianer />
        <Separator />
        <ProductsListContainer />
      </Container>
    </AppLayout>
  );
};

export default Products;
