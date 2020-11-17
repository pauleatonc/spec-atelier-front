import onActionCreator from '../../config/store/helpers';
import { getBrand as getBrandService } from '../../services/brands.service';

export const GET_BRAND = 'GET_BRAND';
export const GET_BRAND_ERROR = 'GET_BRAND_ERROR';
export const CLEAN_STORE = 'CLEAN_STORE';

export const cleanStore = () => dispatch => dispatch(onActionCreator(CLEAN_STORE));

export const getBrand = brandId => async dispatch => {
  try {
    const response = await getBrandService(brandId);
    if (response?.status >= 400) return dispatch(onActionCreator(GET_BRAND_ERROR, { loading: false, error }));
    return dispatch(onActionCreator(GET_BRAND, { brand: response.brand, loading: false }));
  } catch (error) {
    return dispatch(onActionCreator(GET_BRAND_ERROR, { loading: false, error }));
  }
};
