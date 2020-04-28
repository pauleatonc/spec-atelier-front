import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../components/navbar/Navbar.container';
import Footer from '../components/footer';

/**
 * The Colaboration's view.
 */
const Profile = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <h1>Colaborations</h1>
    </AppLayout>
  );
};

export default Profile;
