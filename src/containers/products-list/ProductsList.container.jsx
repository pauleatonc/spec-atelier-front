import React, { useEffect } from 'react';
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
	const { products, error, loading, filters } = useSelector(
		(state) => state.productsList,
	);
	const dispatch = useDispatch();
	const onClickProduct = (selectedProduct) => (event) => {
		event.stopPropagation();
		dispatch(getProduct(selectedProduct));
	};

	useEffect(() => {
		if (!products.length)
			dispatch(
				onGetProducts({
					...filters,
					page: 0,
					limit: 10,
				}),
			);
	}, []);

	if (loading) return <Loading />;
	if (error) return <ErrorMessage />;
	if (!products.length) return <Container>No Hay Productos</Container>;

	return (
		<Container>
			<ProductsSearchContainer />
			<ProductsFiltersContainer />
			<Separator />
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
