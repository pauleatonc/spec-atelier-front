import { HIDE_SECTIONS_LIST_SUCCESS, SHOW_SECTIONS_LIST_SUCCESS } from '../spec-sections-list/SpecSectionsList.actions';
import { SHOW_ITEMS_LIST_SUCCESS } from '../spec-items-list/SpecItemsList.actions';
import {
  GET_PRODUCTS_BY_ITEM,
  GET_PRODUCTS_BY_ITEM_ERROR,
  GET_PRODUCTS_BY_ITEM_SUCCESS,
  HIDE_PRODUCTS_LIST_SUCCESS,
  SHOW_PRODUCTS_LIST_SUCCESS,
} from './SpecProductsList.actions';

const specProductsListState = {
  collection: [],
  filters: [
    { label: 'Todos', tag: 'all' },
    { label: 'Recientes', tag: 'latest' },
    { label: 'Más usados', tag: 'most_used' },
    { label: 'Marcas', tag: 'brands' },
    { label: 'Tipo de proyecto', tag: 'project_type' },
    { label: 'Mis especificaciones', tag: 'my_specifications' },
    { label: 'Otros usuarios', tag: 'other_users' },
    { label: 'Recintos', tag: 'enclosures' },
  ],
  loading: false,
  nextPage: null,
  show: false,
  total: 0,
};

/**
 * The products' list' reducer.
 */
const specProductsListReducer = (state = specProductsListState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_BY_ITEM: {
      return { ...state, loading: true, show: true };
    }
    case GET_PRODUCTS_BY_ITEM_SUCCESS: {
      return {
        ...state,
        collection: payload.products,
        loading: false,
        nextPage: payload.nextPage,
        show: true,
        total: payload.total,
      };
    }
    case HIDE_PRODUCTS_LIST_SUCCESS:
    case HIDE_SECTIONS_LIST_SUCCESS:
    case GET_PRODUCTS_BY_ITEM_ERROR:
    case SHOW_ITEMS_LIST_SUCCESS:
    case SHOW_SECTIONS_LIST_SUCCESS: {
      return { ...state, loading: false, show: false };
    }
    case SHOW_PRODUCTS_LIST_SUCCESS: {
      return { ...state, loading: false, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specProductsListReducer;
