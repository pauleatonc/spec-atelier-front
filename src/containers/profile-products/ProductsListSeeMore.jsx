import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Loading } from '../../components/SpecComponents';
import { ButtonSection, LoadingContainer } from './ProductsListSeeMore.styles';
import { getMoreProducts } from './ProductsList.actions';

const ProductsListSeeMore = () => {
  const { products, filters, total } = useSelector(state => state.profileProductsList);
  const [showButton, setShowButton] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onClickSeeMore = () => {
    setLoading(true);
    dispatch(getMoreProducts({
      ...filters,
      page: filters.page + 1,
    }));
  };

  useEffect(() => {
    setShowButton(!!total && products.length < total);
    setLoading(false);
  }, [products]);

  if (!products.length) return null;

  return (
    <>
      <LoadingContainer>
        {loading && <Loading />}
      </LoadingContainer>
      <ButtonSection justify="center">
        <Button
          variant={showButton ? 'primary' : 'gray'}
          onClick={onClickSeeMore}
          disabled={loading || !showButton}
        >
          {showButton ? 'Ver más' : 'No hay más Productos'}
        </Button>
      </ButtonSection>
    </>
  );
};

export default ProductsListSeeMore;