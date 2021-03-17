import React from 'react';
import { Button } from '../../components/SpecComponents';
import { ButtonSection } from './ClientProductsListSeeMore.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMoreProducts } from './ClientProductsList.actions';
import { useParams } from 'react-router';

const ClientProductsListSeeMore = () => {
  const { products, loading, params, next_page } = useSelector(state => state.clientProductsList);
  const { id } = useParams();

  const dispatch = useDispatch();
  const onClickSeeMore = () => {
    dispatch(getMoreProducts({
      ...params,
      page: params.page + 1,
      client: id,
    }))
  };

  if (!products.length) return null;

  return (
    <ButtonSection justify="center">
      <Button
        variant={next_page ? 'primary' : 'gray'}
        onClick={onClickSeeMore}
        disabled={loading || !next_page}
      >
        {next_page ? 'Ver más' : 'No hay más productos'}
      </Button>
    </ButtonSection>
  );
};

export default ClientProductsListSeeMore;
