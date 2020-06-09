import React, { useState, useEffect }  from 'react';
import { Button } from '../../components/SpecComponents';
import { ButtonSection } from './BrandProductsListSeeMore.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMoreProducts } from './BrandProductsList.actions';

const BrandProductsListSeeMore = () => {
  const { products, loading, params, total } = useSelector(state => state.brandProductsList);
  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const onClickSeeMore = () => {
    dispatch(getMoreProducts({ 
      ...params,
      page: params.page + 1,
    }))
  };

  useEffect(() => {
    setShowButton(!!total && products.length < total); 
  }, [products]);

  if (!products.length) return null;

  return (
    <ButtonSection justify="center">
      <Button 
        variant={showButton ? 'primary' : 'gray'}
        onClick={onClickSeeMore} 
        disabled={loading || !showButton}
      >
        {showButton ? 'Ver más' : 'No hay más productos'}
      </Button>
    </ButtonSection>
  );
};

export default BrandProductsListSeeMore;