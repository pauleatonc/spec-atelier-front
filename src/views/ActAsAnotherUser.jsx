import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import ActAsAnotherUserContainer from '../containers/act-as-another-user/ActAsAnotherUser.container';
import Footer from '../components/footer';
import { Container } from './Collaborator.styles';

const ActAsAnotherUser = () => {
	return (
		<AppLayout footer={<Footer />} header={<Navbar />}>
			<Container>
      <ActAsAnotherUserContainer
      />
			</Container>
		</AppLayout>
  )
}
export default ActAsAnotherUser;
