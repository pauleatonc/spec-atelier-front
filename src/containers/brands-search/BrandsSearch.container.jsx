import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands } from '../brands-list/BrandsList.actions';
import { SearchBar } from '../../components/SpecComponents';
import {
  Container,
} from './BrandsSearch.style';

const BrandsFilters = () => {
  const dispatch = useDispatch();
  const { params, brands } = useSelector(state => state.brandsList);
  const [keywords, setKeywords] = useState(params.keywords || ''); 

  const getBrands = values => dispatch(getBrands(values));

  const onChangeParams = ({ target: { name, value } }) => {
    setKeywords(value);
    getBrands({
      ...params,
      [name]: value,
    });
  }
  
  if (!brands.length) return null;

  return (
    <Container>
      <SearchBar
        name="keywords"
        justifyContent="flex-start"
        maxWidth="432px"
        placeholder="Buscar"
        value={keywords}
        onChange={onChangeParams}
      />
    </Container>
  );
};

export default BrandsFilters;