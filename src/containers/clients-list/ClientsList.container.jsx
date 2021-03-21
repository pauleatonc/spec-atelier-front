import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import { Container } from './ClientsList.style';
import ClientCard from '../../components/client/ClientCard';

import { getClients } from './ClientsList.actions';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';

const ClientsList = () => {
  const { clients, error, loading, params } = useSelector(state => state.clientsList);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickClient = selectedClient => {
    history.push(`/collaborators/${selectedClient.id}`);
  };

  const onClickContact = selectedClient => dispatch(openContactModal({ selectedClient }));

  useEffect(() => {
    if (!clients.length) dispatch(getClients(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!clients.length && !params.keyword) return null;

  return (
    <Container>
      {clients.map(client => (
        <ClientCard
          key={client.id}
          client={client}
          onClickClient={onClickClient}
          onClickContact={onClickContact}
        />
      ))}
    </Container>
  );
};

export default ClientsList;
