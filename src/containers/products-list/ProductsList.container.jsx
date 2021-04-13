import React, { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';
import isDeepEqual from 'fast-deep-equal/react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListContainer, Separator } from './ProductsList.styles';
import {
	setFilters,
	setSelectedAll,
	onGetProductsByFilter,
	cleanStoreProductList,
} from './ProductsList.actions';
import { getProduct } from '../spec-modal-product/SpecModalProduct.actions';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import ProductCard from '../../components/cards/ProductCard';
import ProductsListSeeMore from './ProductsListSeeMore';
import ProductsSearchContainer from '../products-search/ProductsSearch.container';
import ProductsFiltersContainer from '../products-filters/ProductsFilters.container';
import { useDidUpdateEffect } from '../../helpers/custom-hooks.helper';
import {
	DEFAULT_FILTER_KEYS,
	FILTER_OPTIONS,
} from '../../config/constants/products';

const ProductList = ({
	extraFilters,
	withSearch = true,
	withFilter = true,
	filterOptionsKey,
}) => {
	const defaultFilters = {
		page: 0,
		limit: 10,
		keyword: '',
		section: [],
		room_type: [],
		project_type: [],
		item: [],
		client: [],
		filters: filterOptionsKey
			? FILTER_OPTIONS[filterOptionsKey]
			: DEFAULT_FILTER_KEYS,
		sort: '',
		with_products: true,
		most_used: false,
	};
	const dispatch = useDispatch();
	const { products, error, loading, filters, filterOptions } = useSelector(
		(state) => state.productsList,
	);
	const filtersRef = useRef(filters);
	if (!isDeepEqual(filtersRef.current, filters)) {
		filtersRef.current = filters;
	}

	const [keyword, setKeywords] = useState(filters.keyword || '');
	const initialFilters = {
		...defaultFilters,
		...extraFilters,
	};

	const onClickProduct = (selectedProduct) => (event) => {
		event.stopPropagation();
		dispatch(getProduct(selectedProduct));
	};

	const debouncedSave = useCallback(
		debounce(
			(name, newValue) =>
				dispatch(
					setFilters({
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

	const onFilterAll = () => {
		dispatch(setFilters(initialFilters));
		setKeywords('');
	};

	useDidUpdateEffect(() => {
		const {
			section = [],
			room_type = [],
			project_type = [],
			item = [],
			brand = [],
			sort = '',
			keyword: storeKeyword = '',
			most_used,
			page,
		} = filters;
		if (
			!storeKeyword &&
			!section.length &&
			!room_type.length &&
			!project_type.length &&
			!item.length &&
			!brand.length &&
			!sort &&
			!most_used &&
			page === 0
		) {
			dispatch(setSelectedAll(initialFilters));
		} else if (page === 0) dispatch(onGetProductsByFilter(filters));
	}, [filtersRef.current]);

	useEffect(() => {
		dispatch(setFilters(initialFilters));
		return () => {
			dispatch(cleanStoreProductList());
		};
	}, []);

	return (
		<Container>
			{withSearch && (
				<ProductsSearchContainer
					keyword={keyword}
					onChangeParams={onChangeParams}
				/>
			)}
			{withFilter && (
				<>
					<ProductsFiltersContainer
						filters={filters}
						initialFilters={initialFilters}
						onFilterAll={onFilterAll}
						filterOptions={filterOptions}
					/>
					<Separator />
				</>
			)}
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
			<ProductsListSeeMore filters={filters} />
		</Container>
	);
};

export default ProductList;
