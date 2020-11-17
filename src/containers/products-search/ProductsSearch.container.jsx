import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, SearchContaienr } from './ProductsSearch.styles';
import { SearchBar } from '../../components/SpecComponents';
import { onGetProducts } from '../products-list/ProductsList.actions';

const ProductsFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.productsList);
  const [keyword, setKeywords] = useState(filters.keyword || ''); 

  const onChangeParams = ({ target: { name, value } }) => {
    setKeywords(value);
    dispatch(onGetProducts({
      ...filters,
      [name]: value,
    }));
  }

  return (
    <Container>
      <SearchContaienr>
        <SearchBar 
         name="keyword"
         justifyContent="center"
         maxWidth="432px"
         placeholder="Buscar producto"
         value={keyword}
         onChange={onChangeParams}
        />
      </SearchContaienr>
    </Container>
  );
};

export default ProductsFilters;