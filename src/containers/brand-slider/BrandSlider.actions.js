import onActionCreator from '../../config/store/helpers';
import { getBrands as getServiceBrands } from '../../services/brands.service';

export const GET_SLIDER_BRANDS = 'GET_ALL_BRANDS';
export const GET_SLIDER_BRANDS_LOADING = 'GET_ALL_BRANDS';
export const GET_SLIDER_BRANDS_ERROR = 'GET_BRANDS_ERROR';

export const getBrands = () => async dispatch => {
  dispatch(onActionCreator(GET_SLIDER_BRANDS));
  try {
    const { projects } = await getServiceBrands();
    dispatch(onActionCreator(GET_SLIDER_BRANDS, { projects, loading: false }));
  } catch (error) {
    dispatch(onActionCreator(GET_SLIDER_BRANDS_ERROR, { loading: false, error: true }));
  }
};

