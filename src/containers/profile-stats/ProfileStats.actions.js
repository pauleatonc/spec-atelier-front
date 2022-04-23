import onActionCreator from 'config/store/helpers';
import { cleanObjectsAndArrays } from 'modules/services';
import { getStats } from 'services/profile.service';
import { formatTableData, STATS } from './utils';

export const GET_PROFILE_STATS_PRODUCTS = 'GET_PROFILE_STATS_PRODUCTS';
export const GET_PROFILE_STATS_PRODUCTS_SUCCESS =
  'GET_PROFILE_STATS_PRODUCTS_SUCCESS';
export const GET_PROFILE_STATS_PRODUCTS_ERROR =
  'GET_PROFILE_STATS_PRODUCTS_ERROR';
export const GET_PROFILE_STATS_PROJECTS = 'GET_PROFILE_STATS_PROJECTS';
export const GET_PROFILE_STATS_PROJECTS_SUCCESS =
  'GET_PROFILE_STATS_PROJECTS_SUCCESS';
export const GET_PROFILE_STATS_PROJECTS_ERROR =
  'GET_PROFILE_STATS_PROJECTS_ERROR';
export const GET_PRODUCTS_BY_PROJECT = 'GET_PRODUCTS_BY_PROJECT';
export const GET_PRODUCTS_BY_PROJECT_SUCCESS =
  'GET_PRODUCTS_BY_PROJECT_SUCCESS';
export const GET_PRODUCTS_BY_PROJECT_ERROR = 'GET_PRODUCTS_BY_PROJECT_ERROR';
export const GET_PROJECTS_BY_PRODUCT = 'GET_PROJECTS_BY_PRODUCT';
export const GET_PROJECTS_BY_PRODUCT_SUCCESS =
  'GET_PROJECTS_BY_PRODUCT_SUCCESS';
export const GET_PROJECTS_BY_PRODUCT_ERROR = 'GET_PROJECTS_BY_PRODUCT_ERROR';
export const CLEAR_STATS = 'CLEAR_STATS';

export const onGetStats = (filters, isSubRows) => (dispatch, getState) => {
  const {
    user: { id },
  } = getState().auth;
  const params = {
    id,
    filters: cleanObjectsAndArrays(filters),
  };
  const isProductStat = filters?.stat === STATS.PRODUCTS;

  if (isSubRows) {
    dispatch(
      onActionCreator(
        isProductStat ? GET_PRODUCTS_BY_PROJECT : GET_PROJECTS_BY_PRODUCT,
      ),
    );
    getStats(params).then(
      ({ products, projects }) =>
        dispatch(
          onActionCreator(
            isProductStat
              ? GET_PRODUCTS_BY_PROJECT_SUCCESS
              : GET_PROJECTS_BY_PRODUCT_SUCCESS,
            {
              ...(isProductStat ? products : projects),
              list: isProductStat
                ? formatTableData(products.list)
                : formatTableData(projects.list),
              filters,
            },
          ),
        ),
      (error) =>
        dispatch(
          onActionCreator(
            isProductStat
              ? GET_PRODUCTS_BY_PROJECT_ERROR
              : GET_PROJECTS_BY_PRODUCT_ERROR,
            {
              error: true,
              nativeError: error,
            },
          ),
        ),
    );
  } else {
    dispatch(
      onActionCreator(
        isProductStat ? GET_PROFILE_STATS_PRODUCTS : GET_PROFILE_STATS_PROJECTS,
      ),
    );
    getStats(params).then(
      ({ products, projects }) =>
        dispatch(
          onActionCreator(
            isProductStat
              ? GET_PROFILE_STATS_PRODUCTS_SUCCESS
              : GET_PROFILE_STATS_PROJECTS_SUCCESS,
            {
              ...(isProductStat ? products : projects),
              list: isProductStat
                ? formatTableData(products.list)
                : formatTableData(projects.list),
              filters,
            },
          ),
        ),
      (error) =>
        dispatch(
          onActionCreator(
            isProductStat
              ? GET_PROFILE_STATS_PRODUCTS_ERROR
              : GET_PROFILE_STATS_PROJECTS_ERROR,
            {
              error: true,
              nativeError: error,
            },
          ),
        ),
    );
  }
};

export const onClearStats = () => onActionCreator(CLEAR_STATS);
