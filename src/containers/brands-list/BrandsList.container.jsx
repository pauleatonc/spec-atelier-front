import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import { Container } from './BrandsList.style';
import BrandCard from '../../components/brand/BrandCard';

import { getClients } from './BrandsList.actions';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';

const BrandsList = () => {
  const { clients, error, loading, params } = useSelector(state => state.brandsList);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickBrand = selectedBrand => {
    history.push(`/collaborators/${selectedBrand.id}`);
  };
  
  const onClickContact = selectedBrand => dispatch(openContactModal({ selectedBrand }));

  useEffect(() => {
    if (!clients.length) dispatch(getClients(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!clients.length && !params.keyword) return null;

  return (
    <Container>
      {clients.map(client => (
        <BrandCard
          key={client.id}
          brand={client}
          onClickBrand={onClickBrand}
          onClickContact={onClickContact}
        />
      ))}
    </Container>
  );
};

export default BrandsList;