import React from 'react';
import NavBar from 'containers/navbar/Navbar.container';
import AppLayout from 'components/layouts/AppLayout';
import Footer from 'components/footer';

/** The Us' view */
const Us = () => {
  return (
    <AppLayout footer={<Footer />} header={<NavBar />}>
      <h1>Nosotros</h1>
    </AppLayout>
  );
};

export default Us;
