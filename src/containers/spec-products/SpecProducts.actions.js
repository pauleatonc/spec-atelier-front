import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getClients as onGetClients } from '../clients-list/ClientsList.actions';
import {
	HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS,
	onShowSpecProductsSections,
} from '../spec-products-sections/SpecProductsSections.actions';
import {
	HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS,
	onShowSpecProductsItems,
} from '../spec-products-items/SpecProductsItems.actions';

export const UPDATE_SPEC_PRODUCTS_FILTERS = 'UPDATE_SPEC_PRODUCTS_FILTERS';
export const UPDATE_SPEC_PRODUCTS_FILTER_ITEM =
	'UPDATE_SPEC_PRODUCTS_FILTER_ITEM';
export const UPDATE_SPEC_PRODUCTS_FILTER_SECTION =
	'UPDATE_SPEC_PRODUCTS_FILTER_SECTION';
export const UPDATE_SPEC_PRODUCTS_FILTER_SORT =
	'UPDATE_SPEC_PRODUCTS_FILTER_SORT';

export const GET_SPEC_PRODUCTS_BY_ITEM = 'GET_SPEC_PRODUCTS_BY_ITEM';
export const onGetSpecProductsByItem = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_ITEM, payload));
		dispatch(onGetClients({ item: payload.itemID }));
	});

export const GET_SPEC_PRODUCTS_BY_SECTION = 'GET_SPEC_PRODUCTS_BY_SECTION';
export const onGetSpecProductsBySection = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_SECTION, payload));
		dispatch(onShowSpecProductsItems({ section: payload.sectionID }));
		dispatch(onGetClients({ section: payload.sectionID }));
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
		dispatch(onGetClients());
	});
