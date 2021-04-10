import React from 'react';
import { Container, SearchContaienr } from './ProductsSearch.styles';
import { SearchBar } from '../../components/SpecComponents';

const ProductsSearch = ({ keyword, onChangeParams }) => {
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

export default ProductsSearch;
