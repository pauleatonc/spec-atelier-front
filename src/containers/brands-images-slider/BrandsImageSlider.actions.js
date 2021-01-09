import onActionCreator from '../../config/store/helpers';
import { getBrands as getBrandsData  } from '../../services/brands.service';

export const GET_BRANDS_HOME = 'GET_ALL_BRANDS_HOME';
export const GET_BRANDS_ERROR_HOME = 'GET_BRANDS_ERROR_HOME';

// async calls
export const getBrands = () => async dispatch => {
  try {
    const { brands } = await getBrandsData();

    return dispatch(
      onActionCreator(
        GET_BRANDS_HOME,
        {
          brands: brands?.list ? brands?.list : brands,
          loading: false,
          total: brands?.total || 0,
        },
      ),
    );
  } catch (error) {
    dispatch(onActionCreator(GET_BRANDS_ERROR_HOME, { loading: false, error: true }));
  }
};

