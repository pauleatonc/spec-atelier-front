import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import ClientCard from '../../components/client/ClientCard';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';

import { getClients } from './ClientsList.actions';
import { Container, EmptyContainer } from './ClientsList.style';

const ClientsList = () => {
  const { clients, error, loading, params } = useSelector(
    (state) => state.clientsList,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickClient = (selectedClient) => {
    history.push(`/collaborators/${selectedClient.id}`);
  };

  const onClickContact = (selectedClient) =>
    dispatch(openContactModal({ selectedClient }));

  useEffect(() => {
    if (!clients.length) dispatch(getClients(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return !clients.length && !params.keyword ? (
    <EmptyContainer>
      <h1>
        No se encontraron resultados para tu búsqueda, por favor, intenta de
        nuevo.
      </h1>
    </EmptyContainer>
  ) : (
    <Container>
      {clients.map((client) => (
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
