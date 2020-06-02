import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import { Container } from './BrandsList.style';
import BrandCard from '../../components/brand/BrandCard';

import { getBrands, openBrandModal } from './BrandsList.actions';

const BrandsList = () => {
  const { brands, error, loading, params } = useSelector(state => state.brandsList);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickBrand = selectedBrand => {
    console.log('selectedBrand', selectedBrand)
    dispatch(openBrandModal(selectedBrand));
  };

  const onClickContact = () => {

  };


  useEffect(() => {
    if (!brands.length) dispatch(getBrands(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!brands.length) return null;

  return (
    <Container>
      {brands.map(brand => (
        <BrandCard
          key={brand.id}
          brand={brand}
          onClickBrand={onClickBrand}
          onClickContact={onClickContact}
        />
      ))}
    </Container>
  );
};

export default BrandsList;