import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import { Container } from './BrandsList.style';
import BrandCard from '../../components/brand/BrandCard';

import { getBrands } from './BrandsList.actions';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';

const BrandsList = () => {
  const { brands, error, loading, params } = useSelector(state => state.brandsList);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickBrand = selectedBrand => {
    history.push(`/collaborators/${selectedBrand.id}`);
  };
  
  const onClickContact = selectedBrand => dispatch(openContactModal(selectedBrand));

  useEffect(() => {
    if (!brands.length) dispatch(getBrands(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!brands.length && !params.keyword) return null;

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