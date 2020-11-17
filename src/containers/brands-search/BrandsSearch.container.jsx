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
  const [keyword, setKeywords] = useState(params.keyword || ''); 

  const onChangeParams = ({ target: { name, value } }) => {
    setKeywords(value);
    dispatch(getBrands({
      ...params,
      [name]: value,
    }));
  }
  
  if (!brands.length && !params.keyword) return null;

  return (
    <Container>
      <SearchBar
        name="keyword"
        justifyContent="flex-start"
        maxWidth="432px"
        placeholder="Buscar"
        value={keyword}
        onChange={onChangeParams}
      />
    </Container>
  );
};

export default BrandsFilters;