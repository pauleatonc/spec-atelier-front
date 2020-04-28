import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../components/navbar/Navbar.container';
import Footer from '../components/footer';


/**
 * The Brands' view.
 */
const Brands = () => {
	return (
    <AppLayout footer={<Footer />} header={<NavBar />}>
      <h1>Marcas</h1>
    </AppLayout>
  );
};

export default Brands;
