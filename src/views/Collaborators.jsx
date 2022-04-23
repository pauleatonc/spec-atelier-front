import React from 'react';
import AppLayout from 'components/layouts/AppLayout';
import Navbar from 'containers/navbar/Navbar.container';
import Footer from 'components/footer';
import ClientsListContainer from 'containers/clients-list/ClientsList.container';
import ClientsSeeMoreButtonContainer from 'containers/clients-buttons/ClientsSeeMore.container';
import ClientsFiltersContainer from 'containers/clients-search/ClientsSearch.container';
import ContactFormModalContainer from 'containers/modal-contact-form/ModalContactForm.container';
import AlertContainer from 'containers/alert/Alert.container';
import CLIENT_HEADER from 'assets/images/collaborators/collaborators_header.jpg';
import { ImgHeader } from './Collaborators.styles';

/** The Colaboration's view */
const Collaborators = () => {
  return (
    <AppLayout footer={<Footer />} header={<Navbar />}>
      <ImgHeader background={CLIENT_HEADER} />
      <ClientsFiltersContainer />
      <ClientsListContainer />
      <ClientsSeeMoreButtonContainer />
      <ContactFormModalContainer type="client" />
      <AlertContainer />
    </AppLayout>
  );
};

export default Collaborators;
