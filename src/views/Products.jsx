import React from 'react';
import ContactFormContainer from 'containers/modal-contact-form/ModalContactForm.container';
import AlertContainer from 'containers/alert/Alert.container';
import NavBar from 'containers/navbar/Navbar.container';
import ProductsListContainer from 'containers/products-list/ProductsList.container';
import ModalProductContainer from 'containers/spec-modal-product/SpecModalProduct.container';
import ProductHeader from 'components/product/ProductsHeader';
import AppLayout from 'components/layouts/AppLayout';
import Footer from 'components/footer';

/** The Products' view */
const Products = () => {
  return (
    <AppLayout footer={<Footer />} header={<NavBar />}>
      <ProductHeader />
      <ProductsListContainer viewKey="products" />
      <AlertContainer />
      <ModalProductContainer />
      <ContactFormContainer type="product" />
    </AppLayout>
  );
};

export default Products;
