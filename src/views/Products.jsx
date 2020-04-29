import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';

/**
 * The Products' view.
 */
const Products = () => {
	return (
    <AppLayout footer={<Footer />} header={<NavBar />}>
      <h1>Productos</h1>
    </AppLayout>
  );
};

export default Products;
