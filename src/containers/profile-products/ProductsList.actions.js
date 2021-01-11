import onActionCreator from '../../config/store/helpers';
import { getProductById, getProducts } from '../../services/products.service';
import { getItems as getItemsService } from '../../services/items.service';
import { cleanObjectsAndArrays } from '../../modules/services';
import { getSections as getServiceSections } from '../../services/sections.service';
import { getBrands as getServiceBrands } from '../../services/brands.service';

export const GET_PROFILE_PRODUCTS = 'GET_PROFILE_PRODUCTS';
export const GET_PROFILE_PRODUCTS_ERROR = 'GET_PROFILE_PRODUCTS_ERROR';
export const GET_PROFILE_PRODUCTS_SUCCESS = 'GET_PROFILE_PRODUCTS_SUCCESS';
export const GET_PROFILE_PRODUCT = 'GET_PROFILE_PRODUCT';
export const GET_PROFILE_PRODUCT_ERROR = 'GET_PROFILE_PRODUCT_ERROR';
export const GET_PROFILE_PRODUCTS_BY_FILTER = 'GET_PROFILE_PRODUCTS_BY_FILTER';
export const GET_PROFILE_PRODUCTS_FILTERS_ALL = 'UPDATE_PRODUCTS_FILTERS_ALL';
export const GET_PROFILE_MORE_PRODUCTS = 'GET_PROFILE_MORE_PRODUCTS';
export const GET_PROFILE_SECTIONS = 'GET_PROFILE_SECTIONS';
export const GET_PROFILE_SECTIONS_ERROR = 'GET_PROFILE_SECTIONS_ERROR';
export const GET_PROFILE_SECTIONS_SUCCESS = 'GET_PROFILE_SECTIONS_SUCCESS';
export const GET_PROFILE_ITEMS_SUCCESS = 'GET_PROFILE_ITEMS_SUCCESS';
export const GET_PROFILE_ITEMS_ERROR = 'GET_PROFILE_ITEMS_ERROR';

export const CLEAN_PRODUCT_LIST_STORE = 'CLEAN_PRODUCT_LIST_STORE';
export const ON_SELECT_ALL = 'ON_SELECT_ALL';

export const cleanStoreProductList = () => dispatch => dispatch(onActionCreator(CLEAN_PRODUCT_LIST_STORE));

export const getProduct = brandId => async dispatch => {
  try {
    const response = await getProductById(brandId);
    if (response?.status >= 400) return dispatch(onActionCreator(GET_PROFILE_PRODUCT_ERROR, { loading: false, error: true }));
    return dispatch(onActionCreator(GET_PROFILE_PRODUCT, { brand: response.brand, loading: false }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_PRODUCT_ERROR, { loading: false, error }));
  }
};

export const onGetProducts = filters => async dispatch => {
  dispatch(onActionCreator(GET_PROFILE_PRODUCTS));
  try {
    const { products } = await getProducts(cleanObjectsAndArrays(filters), GET_PROFILE_PRODUCTS);
    return dispatch(
      onActionCreator(
        GET_PROFILE_PRODUCTS_SUCCESS,
        {
          nextPage: products?.next_page,
          products: products?.list || products || [],
          total: products?.total || 0,
          filters,
        },
      ),
    );
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_PRODUCTS_ERROR, { error: true, nativeError: error }));
  }
};

export const getProductsByFilter = filters => async dispatch => {
  try {
    const { products } = await getProducts(cleanObjectsAndArrays(filters), GET_PROFILE_PRODUCTS_BY_FILTER);
    return dispatch(
      onActionCreator(
        GET_PROFILE_PRODUCTS_BY_FILTER,
        {
          nextPage: products?.next_page,
          products: products?.list || products || [],
          total: products?.total || 0,
          filters,
        },
      ),
    );
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_PRODUCTS_ERROR, { error: true, nativeError: error }));
  }
};

export const getMoreProducts = filters => async dispatch => {
  try {
    const { products } = await getProducts(cleanObjectsAndArrays(filters), GET_PROFILE_PRODUCTS);
    return dispatch(
      onActionCreator(
        GET_PROFILE_MORE_PRODUCTS,
        {
          nextPage: products?.next_page,
          products: products?.list || products || [],
          total: products?.total || 0,
          filters,
        },
      ),
    );
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_PRODUCTS_ERROR, { error: true, nativeError: error }));
  }
};

export const onGetProductsByFiltersAll = () => async dispatch => {
  try {
    const filters = { limit: 10, page: 0 };
    const { products } = await getProducts(filters, GET_PROFILE_PRODUCTS);
    return dispatch(onActionCreator(GET_PROFILE_PRODUCTS_FILTERS_ALL, {
      nextPage: products?.next_page,
      products: products?.list || products || [],
      total: products?.total || 0,
      filters,
    }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_PRODUCTS_ERROR, { error: true, nativeError: error }));
  }
}

export const getSections = ({ brand, section, item } = {}) => async dispatch => {
  try {
    const { sections } = await getServiceSections(cleanObjectsAndArrays({ brand, section, item, with_products: true  }));
    return dispatch(onActionCreator(GET_PROFILE_SECTIONS_SUCCESS, { sections }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_SECTIONS_ERROR, { error: true, nativeError: error }));
  }
};

export const setSelectedAll = value => dispatch => dispatch(onActionCreator(GET_PROFILE_PRODUCTS_FILTERS_ALL, { isSelectedAll: value }))

export const getItems = ({ brand, section, item } = {})  => async dispatch => {
  try {
    const { items } = await getItemsService(cleanObjectsAndArrays(({ brand, section, item, with_products: true }) ));
    return dispatch(onActionCreator(GET_PROFILE_ITEMS_SUCCESS, { items }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_ITEMS_ERROR, { error: true, nativeError: error }));
  }
};

export const getBrands = filters => async dispatch => {
  try {
    const { items } = await getServiceBrands(cleanObjectsAndArrays(filters));
    return dispatch(onActionCreator(GET_PROFILE_ITEMS_SUCCESS, { items, with_products: true }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE_ITEMS_ERROR, { error: true, nativeError: error }));
  }
};




