import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import ProfileHeader from '../containers/profile-header/ProfileHeader';
import ProductList from '../containers/profile-products/ProductsList.container';
import ProductsListSeeMore from '../containers/profile-products/ProductsListSeeMore';
import ProfileProductsFilters from '../containers/profile-products-filters/ProductsFilters.container';
import ProfileProductsSearch from '../containers/profile-products-search/ProductsSearch.container';
import { PaddingContainer, Separator } from './Products.styles';
import ProfileChangePicture from '../containers/profile-change-picture/ProfileChangePicture';

import AlertContainer from '../containers/alert/Alert.container';
import SpecCreateProductOneContainer from '../containers/spec-create-product/SpecCreateProductStepOne.container';
import SpecCreateProductTwoContainer from '../containers/spec-create-product/SpecCreateProductStepTwo.container';
import SpecCreateProductThreeContainer from '../containers/spec-create-product/SpecCreateProductStepThree.container';
import SpecEditProductContainer from '../containers/spec-edit-product/SpecEditProduct.container';
import SpecImagesModalContainer from '../containers/spec-images-modal/SpecImagesModal.container';
import ContactFormContainer from '../containers/modal-contact-form/ModalContactForm.container';
import SpecModalProduct from '../containers/spec-modal-product/SpecModalProduct.container';

/**
 * The Profile's view.
 */
const Profile = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <ProfileHeader />
      <ProfileProductsSearch />
      <ProfileProductsFilters />
      <PaddingContainer>
        <Separator />
        <ProductList />
      </PaddingContainer>
      <ProductsListSeeMore />
      <ProfileChangePicture />
      <SpecCreateProductOneContainer />
      <SpecCreateProductTwoContainer />
      <SpecCreateProductThreeContainer />
      <SpecEditProductContainer />
      <SpecImagesModalContainer />
      <AlertContainer />
      <SpecModalProduct />
      <ContactFormContainer type="product" />
    </AppLayout>
  );
};

export default Profile;
