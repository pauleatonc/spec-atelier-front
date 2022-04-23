import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import ClientInfo from 'components/client/ClientInfo';
import ClientGallery from 'components/client/ClientGallery';
import Loading from 'components/basics/loading';
import { openContactModal } from 'containers/modal-contact-form/ModalContactForm.actions';
import { Container } from './client.styles';
import { getClient } from './client.actions';

const Client = () => {
  const { client, loading } = useSelector((state) => state.client);
  const { params } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClient(params.id));
  }, []);

  const onClickContact = () =>
    dispatch(openContactModal({ selectedClient: client }));

  if (loading) return <Loading />;
  if (!client) return <Container />;

  return (
    <Container>
      <ClientInfo onClickContact={onClickContact} client={client} />
      <ClientGallery images={client.product_images} />
    </Container>
  );
};

export default Client;
