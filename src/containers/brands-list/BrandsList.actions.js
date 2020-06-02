import onActionCreator from '../../config/store/helpers';
import { getBrands as getBrandsData  } from '../../services/brands.service';

export const GET_BRANDS = 'GET_ALL_BRANDS';
export const GET_MORE_BRANDS = 'GET_MORE_BRANDS';
export const GET_BRANDS_ERROR = 'GET_BRANDS_ERROR';
export const OPEN_BRAND_MODAL = 'OPEN_BRAND_MODAL';
export const CLOSE_BRAND_MODAL = 'CLOSE_BRAND_MODAL';

// async calls
export const getBrands = params => async dispatch => {
  try {
    const  { brands, status } = await getBrandsData(params);
    console.log('dsfsfdsf', brands, status)
    dispatch(onActionCreator(GET_BRANDS, { brands, loading: false, params }));
  } catch (error) {
    dispatch(onActionCreator(GET_BRANDS_ERROR, { loading: false, error: true, params }));
  }
};

export const getMoreBrands = params => async dispatch => {
  try {
    const { brands } = await getBrandsData(params);
    console.log('brands',brands)
    dispatch(onActionCreator(GET_MORE_BRANDS, { brands, loading: false, params }));
  } catch (error) {
    dispatch(onActionCreator(GET_BRANDS_ERROR, { loading: false, error: true, params }));
  }
};

// sync calls
export const openBrandModal = selectedBrand => dispatch => dispatch(onActionCreator(OPEN_BRAND_MODAL, { selectedBrand }));

export const closeBrandModal = () => dispatch => dispatch(onActionCreator(CLOSE_BRAND_MODAL, { }));