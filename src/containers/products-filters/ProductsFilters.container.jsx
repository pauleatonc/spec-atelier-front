import React from 'react';
import { Container, SearchContaienr } from './ProductsFilters.styles';
import { SearchBar } from '../../components/SpecComponents';


const ProductsFilters = () => {
  return (
    <Container>
      <SearchContaienr>
        <SearchBar />
      </SearchContaienr>
    </Container>
  );
};

export default ProductsFilters;