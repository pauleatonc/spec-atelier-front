import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import ProfileHeader from '../containers/profile-header/ProfileHeader';
import ProductList from '../containers/profile-products/ProductsList.container';
import ProductsListSeeMore from '../containers/profile-products/ProductsListSeeMore';
import ProfileProductsFilters from '../containers/profile-products-filters/ProductsFilters.container';
import ProfileProductsSearch from '../containers/profile-products-search/ProductsSearch.container';
import { Separator } from './Products.styles';
import ProfileChangePicture from '../containers/profile-change-picture/ProfileChangePicture';

/**
 * The Profile's view.
 */
const Profile = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <ProfileHeader />
      <ProfileProductsSearch />
      <ProfileProductsFilters />
      <Separator />
      <ProductList />
      <ProductsListSeeMore />
      <ProfileChangePicture />
    </AppLayout>
  );
};

export default Profile;
