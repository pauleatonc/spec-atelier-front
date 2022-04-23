import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMoreClients } from 'containers/clients-list/ClientsList.actions';
import Button from 'components/buttons/Button';
import { ButtonSection } from './ClientsSeeMore.styles';

const ClientsSeeMoreButton = () => {
  const { clients, loading, params, total } = useSelector(
    (state) => state.clientsList,
  );
  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const onClickSeeMore = () => {
    dispatch(
      getMoreClients({
        ...params,
        page: params.page + 1,
      }),
    );
  };

  useEffect(() => {
    setShowButton(!!total && clients.length < total);
  }, [clients]);

  if (!clients.length) return null;

  return (
    <ButtonSection justify="center">
      <Button
        variant={showButton ? 'primary' : 'gray'}
        onClick={onClickSeeMore}
        disabled={loading || !showButton}
      >
        {showButton ? 'Ver más' : 'No hay más Collaboradores'}
      </Button>
    </ButtonSection>
  );
};

export default ClientsSeeMoreButton;
