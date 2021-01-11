import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import ProfileHeader from '../containers/profile-header/ProfileHeader';
import ProductList from '../containers/profile-products/ProductsList.container';
import ProductsListSeeMore from '../containers/profile-products/ProductsListSeeMore';
import ProfileProductsFilters from '../containers/profile-products-filters/ProductsFilters.container';
import ProfileProductsSearch from '../containers/profile-products-search/ProductsSearch.container';

/**
 * The Profile's view.
 */
const Profile = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <ProfileHeader />
      <ProfileProductsSearch />
      <ProfileProductsFilters />
      <ProductList />
      <ProductsListSeeMore />
    </AppLayout>
  );
};

export default Profile;
