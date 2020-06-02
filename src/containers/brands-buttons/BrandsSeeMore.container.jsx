import React, { useState, useEffect }  from 'react';
import { Button } from '../../components/SpecComponents';
import { ButtonSection } from './brandsSeeMore.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMoreBrands } from '../brands-list/BrandsList.actions';

const BrandsSeeMoreButton = () => {
  const { brands, loading, params, total } = useSelector(state => state.brandsList);
  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const onClickSeeMore = () => {
    dispatch(getMoreBrands({ 
      ...params,
      page: params.page + 1,
    }))
  };

  useEffect(() => {
    setShowButton(!!total && brands.length < total); 
  }, [brands]);

  if (!brands.length) return null;

  return (
    <ButtonSection justify="center">
      {showButton && (
        <Button 
          variant="primary" 
          onClick={onClickSeeMore} 
          disabled={loading}
        >
          Ver más
        </Button>
      )}
    </ButtonSection>
  );
};

export default BrandsSeeMoreButton;