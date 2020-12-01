import React from 'react';
import { Button } from '../../components/SpecComponents';
import { ButtonSection } from './BrandProductsListSeeMore.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMoreProducts } from './BrandProductsList.actions';
import { useParams } from 'react-router';

const BrandProductsListSeeMore = () => {
  const { products, loading, params, next_page } = useSelector(state => state.brandProductsList);
  const { id } = useParams();

  const dispatch = useDispatch();
  const onClickSeeMore = () => {
    dispatch(getMoreProducts({ 
      ...params,
      page: params.page + 1,
      brand: id,
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

export default BrandProductsListSeeMore;