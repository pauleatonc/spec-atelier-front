import { HIDE_SPEC_SECTIONS_LIST_SUCCESS, SHOW_SPEC_SECTIONS_LIST_SUCCESS } from '../spec-sections-list/SpecSectionsList.actions';
import {
  GET_SECTION_ITEMS_SUCCESS,
  HIDE_SPEC_ITEMS_LIST_SUCCESS,
  SHOW_SPEC_ITEMS_LIST_SUCCESS,
} from './SpecItemsList.actions';
import { GET_PRODUCTS_BY_ITEM_ERROR } from '../spec-products-list/SpecProductsList.actions';

const specItemsListState = {
  collection: [],
  selectedItemID: null,
  show: false,
};

/**
 * The items' list reducer. 
 */
const specItemsListReducer = (state = specItemsListState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_BY_ITEM_ERROR: {
      return { ...state, selectedItemID: payload.itemID };
    }
    case GET_SECTION_ITEMS_SUCCESS: {
      return { ...state, collection: payload.items, show: true };
    }
    case HIDE_SPEC_ITEMS_LIST_SUCCESS:
    case HIDE_SPEC_SECTIONS_LIST_SUCCESS:
    case SHOW_SPEC_SECTIONS_LIST_SUCCESS: {
      return { ...state, show: false };
    }
    case SHOW_SPEC_ITEMS_LIST_SUCCESS: {
      return { ...state, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specItemsListReducer;
