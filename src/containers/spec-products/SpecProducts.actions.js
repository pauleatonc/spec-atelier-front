import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getProducts } from '../../services/products.service';
import { getBrands as onGetBrands } from '../brands-list/BrandsList.actions';
import {
	HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS,
	onShowSpecProductsSections,
} from '../spec-products-sections/SpecProductsSections.actions';
import {
	HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS,
	onShowSpecProductsItems,
} from '../spec-products-items/SpecProductsItems.actions';
import {
	getMySpecs,
	getRoomTypes as getRoomTypesService,
} from '../../services/specs.service';
import { cleanObjectsAndArrays } from '../../modules/services';

export const GET_SPEC_PRODUCTS = 'GET_SPEC_PRODUCTS';
export const GET_SPEC_PRODUCTS_ERROR = 'GET_SPEC_PRODUCTS_ERROR';
export const GET_SPEC_PRODUCTS_SUCCESS = 'GET_SPEC_PRODUCTS_SUCCESS';
export const onGetSpecProducts = ({ key = '', value } = {}) => async (
	dispatch,
	getState,
) => {
	dispatch(onActionCreator(GET_SPEC_PRODUCTS));

	try {
		const { app, brandsList, specProducts } = getState();
		const filters = Object.entries({
			...specProducts.filters,
			[key]: value,
		}).reduce((entries, [key, value]) => {
			if (
				key === 'brand' &&
				(value?.length === brandsList.brands?.length || value?.length === 0)
			) {
				return entries;
			}

			if (
				key === 'project_type' &&
				(value?.length === app.project_types?.length || value?.length === 0)
			) {
				return entries;
			}

			if (
				key === 'room_type' &&
				(value?.length === app.room_types?.length || value?.length === 0)
			) {
				return entries;
			}

			if (key === 'specification' && !value?.length) {
				return entries;
			}

			return { ...entries, [key]: value };
		}, {});
		const response = await getProducts(
			cleanObjectsAndArrays(filters),
			GET_SPEC_PRODUCTS,
		);

		return dispatch(
			onActionCreator(GET_SPEC_PRODUCTS_SUCCESS, {
				nextPage: response?.products?.next_page,
				products: response?.products?.list,
				total: response?.products?.total || 0,
			}),
		);
	} catch (error) {
		return dispatch(
			onActionCreator(GET_SPEC_PRODUCTS_ERROR, {
				error: true,
				nativeError: error,
			}),
		);
	}
};

export const GET_SPEC_PRODUCTS_BY_PAGE = 'GET_SPEC_PRODUCTS_BY_PAGE';
export const GET_SPEC_PRODUCTS_BY_PAGE_ERROR =
	'GET_SPEC_PRODUCTS_BY_PAGE_ERROR';
export const GET_SPEC_PRODUCTS_BY_PAGE_SUCCESS =
	'GET_SPEC_PRODUCTS_BY_PAGE_SUCCESS';
export const onGetSpecProductsByPage = () => async (dispatch, getState) => {
	dispatch(onActionCreator(GET_SPEC_PRODUCTS_BY_PAGE));

	try {
		const { specProducts } = getState();
		console.log({
			...specProducts.filters,
		});
		const response = await getProducts({
			...specProducts.filters,
			page: specProducts.nextPage,
		});

		return dispatch(
			onActionCreator(GET_SPEC_PRODUCTS_BY_PAGE_SUCCESS, {
				nextPage: response?.products?.next_page,
				products: specProducts.collection.concat(
					response?.products?.list || [],
				),
				total: response?.products?.total || 0,
			}),
		);
	} catch (error) {
		return dispatch(
			onActionCreator(GET_SPEC_PRODUCTS_BY_PAGE_ERROR, {
				error: true,
				nativeError: error,
			}),
		);
	}
};

export const GET_SPEC_ROOMTYPES = 'GET_SPEC_ROOMTYPES';
export const GET_SPEC_ROOMTYPES_ERROR = 'GET_SPEC_ROOMTYPES_ERROR';

export const getRoomTypes = ({ project_types = [] }) => async (dispatch) => {
	try {
		const { room_types } = await getRoomTypesService({
			params: { with_products: true, project_types },
		});
		dispatch(onActionCreator(GET_SPEC_ROOMTYPES, { room_types }));
	} catch (error) {
		dispatch(onActionCreator(GET_SPEC_ROOMTYPES_ERROR));
	}
};

export const UPDATE_SPEC_PRODUCTS_FILTERS = 'UPDATE_SPEC_PRODUCTS_FILTERS';
export const UPDATE_SPEC_PRODUCTS_FILTERS_ALL =
	'UPDATE_SPEC_PRODUCTS_FILTERS_ALL';
export const UPDATE_SPEC_PRODUCTS_FILTER_ITEM =
	'UPDATE_SPEC_PRODUCTS_FILTER_ITEM';
export const UPDATE_SPEC_PRODUCTS_FILTER_KEYWORD =
	'UPDATE_SPEC_PRODUCTS_FILTER_KEYWORD';
export const UPDATE_SPEC_PRODUCTS_FILTER_SECTION =
	'UPDATE_SPEC_PRODUCTS_FILTER_SECTION';
export const UPDATE_SPEC_PRODUCTS_FILTER_SORT =
	'UPDATE_SPEC_PRODUCTS_FILTER_SORT';

export const GET_SPEC_PRODUCTS_BY_FILTERS = 'GET_SPEC_PRODUCTS_BY_FILTERS';
export const onGetSpecProductsByFilters = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTERS, payload));
		dispatch(onGetSpecProducts());
	});

export const GET_SPEC_PRODUCTS_BY_FILTERS_ALL =
	'GET_SPEC_PRODUCTS_BY_FILTERS_ALL';
export const onGetSpecProductsByFiltersAll = () => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTERS_ALL));
		dispatch(onGetSpecProducts());
	});

export const GET_SPEC_PRODUCTS_BY_ITEM = 'GET_SPEC_PRODUCTS_BY_ITEM';
export const onGetSpecProductsByItem = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_ITEM, payload));
		dispatch(onGetSpecProducts());
		dispatch(onGetBrands({ item: payload.itemID }));
	});

export const GET_SPEC_PRODUCTS_BY_KEYWORD = 'GET_SPEC_PRODUCTS_BY_KEYWORD';
export const onGetSpecProductsByKeyword = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_KEYWORD, payload));
		dispatch(onGetSpecProducts());
	});

export const GET_SPEC_PRODUCTS_BY_SECTION = 'GET_SPEC_PRODUCTS_BY_SECTION';
export const onGetSpecProductsBySection = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_SECTION, payload));
		dispatch(onShowSpecProductsItems({ section: payload.sectionID }));
		dispatch(onGetBrands({ section: payload.sectionID }));
		dispatch(onGetSpecProducts());
	});

export const UPDATE_SPEC_PROJECT_TYPE_FILTERS =
	'UPDATE_SPEC_PROJECT_TYPE_FILTERS';
export const onGetSpecProductsProjectType = ({ project_types }) => async (
	dispatch,
) => {
	// try {
	// const { room_types = [] } = await getRoomTypesService({ params: { project_types }});
	batch(() => {
		dispatch(getRoomTypes({ project_types }));
		dispatch(
			onActionCreator(UPDATE_SPEC_PROJECT_TYPE_FILTERS, {
				room_types,
				project_types,
			}),
		);
		dispatch(onShowSpecProductsItems());
		dispatch(onGetSpecProducts());
	});

	// } catch (error) {
	//   batch(() => {
	//     dispatch(onActionCreator(UPDATE_SPEC_PROJECT_TYPE_FILTERS));
	//     dispatch(onShowSpecProductsItems());
	//     dispatch(onGetSpecProducts());
	//   });
	// }
};

export const GET_SPEC_PRODUCTS_BY_SORT = 'GET_SPEC_PRODUCTS_BY_SORT';
export const onGetSpecProductsBySort = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_SORT, payload));
		dispatch(onGetSpecProducts());
	});

export const HIDE_SPEC_PRODUCTS = 'HIDE_SPEC_PRODUCTS';
export const HIDE_SPEC_PRODUCTS_SUCCESS = 'HIDE_SPEC_PRODUCTS_SUCCESS';
export const onHideSpecProducts = () => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS));
		dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS));
		dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SUCCESS));
	});

export const SHOW_SPEC_PRODUCTS = 'SHOW_SPEC_PRODUCTS';
export const SHOW_SPEC_PRODUCTS_SUCCESS = 'SHOW_SPEC_PRODUCTS_SUCCESS';
export const onShowSpecProducts = () => (dispatch) =>
	batch(() => {
		dispatch(onShowSpecProductsSections());
		dispatch(onActionCreator(SHOW_SPEC_PRODUCTS_SUCCESS));
		dispatch(onGetBrands());
		dispatch(onGetSpecProducts());
	});

export const GET_SPEC_MYSPEC = 'HIDE_SPEC_PRODUCTS';
export const GET_SPEC_MYSPEC_ERROR = 'HIDE_SPEC_PRODUCTS_SUCCESS';
export const getMySpecifications = () => async (dispatch) => {
	try {
		const { specifications } = await getMySpecs({
			params: { with_products: true },
		});
		dispatch(onActionCreator(GET_SPEC_MYSPEC, { specifications }));
	} catch (error) {
		console.log('err', error);
		dispatch(onActionCreator(GET_SPEC_MYSPEC_ERROR, { specifications: [] }));
	}
};
