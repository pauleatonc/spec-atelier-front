import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';

/**
 * The Profile's view.
 */
const Profile = () => {
	return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <h1>Perfil</h1>
    </AppLayout>
  );
};

export default Profile;
