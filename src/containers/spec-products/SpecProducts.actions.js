import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import {
	HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS,
	onShowSpecProductsSections,
} from '../spec-products-sections/SpecProductsSections.actions';
import {
	HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS,
	onShowSpecProductsItems,
} from '../spec-products-items/SpecProductsItems.actions';
import { MAX_SCREEN_SMALL_NAV_JS } from '../../config/constants/styled-vars';

export const UPDATE_SPEC_PRODUCTS_FILTERS = 'UPDATE_SPEC_PRODUCTS_FILTERS';
export const UPDATE_SPEC_PRODUCTS_FILTER_ITEM =
	'UPDATE_SPEC_PRODUCTS_FILTER_ITEM';
export const UPDATE_SPEC_PRODUCTS_FILTER_SUBITEM =
	'UPDATE_SPEC_PRODUCTS_FILTER_SUBITEM';
export const UPDATE_SPEC_PRODUCTS_FILTER_SECTION =
	'UPDATE_SPEC_PRODUCTS_FILTER_SECTION';
export const UPDATE_SPEC_PRODUCTS_FILTER_SORT =
	'UPDATE_SPEC_PRODUCTS_FILTER_SORT';
export const GET_SPEC_PRODUCTS_BY_SECTION = 'GET_SPEC_PRODUCTS_BY_SECTION';
export const HIDE_SPEC_PRODUCTS = 'HIDE_SPEC_PRODUCTS';
export const HIDE_SPEC_PRODUCTS_SUCCESS = 'HIDE_SPEC_PRODUCTS_SUCCESS';
export const SHOW_SPEC_PRODUCTS = 'SHOW_SPEC_PRODUCTS';
export const SHOW_SPEC_PRODUCTS_SUCCESS = 'SHOW_SPEC_PRODUCTS_SUCCESS';
export const SHOW_ATTACH_MODAL = 'SHOW_ATTACH_MODAL';
export const HIDE_ATTACH_MODAL = 'HIDE_ATTACH_MODAL';

export const onGetSpecProductsByItem = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_ITEM, payload));
	});

export const onGetSpecProductsBySection = (payload) => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_SECTION, payload));
		if (!window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches)
			dispatch(onShowSpecProductsItems({ section: payload.section }));
	});

export const onHideSpecProducts = () => (dispatch) =>
	batch(() => {
		dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS));
		dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS));
		dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SUCCESS));
	});

export const onShowSpecProducts = () => (dispatch) =>
	batch(() => {
		dispatch(onShowSpecProductsSections());
		dispatch(onActionCreator(SHOW_SPEC_PRODUCTS_SUCCESS));
	});

export const onShowAttachModal = (payload) => (dispatch) => {
	dispatch(onActionCreator(SHOW_ATTACH_MODAL, payload));
};
export const onHideAttachModal = () => (dispatch) => {
	dispatch(onActionCreator(HIDE_ATTACH_MODAL));
};

export const onUpdateFilterSubitem = (payload) => (dispatch) =>
	dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_SUBITEM, payload));

export const onUpdateFilterSection = (payload) => (dispatch) =>
	dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_FILTER_SECTION, payload));
