import React, { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListContainer, Separator } from './ProductsList.styles';
import { onGetProducts } from './ProductsList.actions';
import { getProduct } from '../spec-modal-product/SpecModalProduct.actions';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import ProductCard from '../../components/cards/ProductCard';
import ProductsListSeeMore from './ProductsListSeeMore';
import ProductsSearchContainer from '../products-search/ProductsSearch.container';
import ProductsFiltersContainer from '../products-filters/ProductsFilters.container';

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, error, loading, filters } = useSelector(
		(state) => state.productsList,
	);

	const [keyword, setKeywords] = useState(filters.keyword || '');

	const onClickProduct = (selectedProduct) => (event) => {
		event.stopPropagation();
		dispatch(getProduct(selectedProduct));
	};

	const debouncedSave = useCallback(
		debounce(
			(name, newValue) =>
				dispatch(
					onGetProducts({
						...filters,
						[name]: newValue,
					}),
				),
			700,
		),
		[],
	);

	const onChangeParams = ({ target: { name, value } }) => {
		setKeywords(value);
		debouncedSave(name, value);
	};

	useEffect(() => {
		dispatch(
			onGetProducts({
				...filters,
			}),
		);
	}, []);

	return (
		<Container>
			<ProductsSearchContainer
				keyword={keyword}
				onChangeParams={onChangeParams}
			/>
			<ProductsFiltersContainer />
			<Separator />
			{error && <ErrorMessage />}
			{loading && (
				<Container>
					<Loading />
				</Container>
			)}
			{!products.length && !loading && <Container>No Hay Productos</Container>}
			<ListContainer>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						category={product.system?.name || ''}
						description={product.short_desc || product.long_desc}
						photo={product.images[0]?.urls?.small}
						reference={product.reference}
						title={product.name}
						onClickCard={onClickProduct(product)}
						onClickSeeMore={onClickProduct(product)}
						pdfs={product?.pdfs}
						dwg={product?.dwg}
						bim={product?.bim}
					/>
				))}
			</ListContainer>
			<ProductsListSeeMore />
		</Container>
	);
};

export default ProductList;
