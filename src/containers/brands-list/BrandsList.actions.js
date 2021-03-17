import onActionCreator from '../../config/store/helpers';
import { getBrands as getBrandsData }from '../../services/brands.service';

export const GET_BRANDS= 'GET_BRANDS';
export const GET_MORE_BRANDS = 'GET_MORE_BRANDS';
export const GET_BRANDS_ERROR = 'GET_BRANDS_ERROR';


export const getMoreBrands = (params) => async (dispatch) => {
	try {
		const { brands } = await getBrandsData(params);
		dispatch(
			onActionCreator(GET_MORE_BRANDS, { brands, loading: false, params }),
		);
	} catch (error) {
		dispatch(
			onActionCreator(GET_BRANDS_ERROR, {
				loading: false,
				error: true,
				params,
			}),
		);
	}
};

export const getBrands = (params) => async (dispatch) => {
	try {
		const { brands } = await getBrandsData(params);
		return dispatch(
			onActionCreator(GET_BRANDS, {
				brands: brands?.list ? brands?.list : brands,
				loading: false,
				params,
				total: brands?.total || 0,
			}),
		);
	} catch (error) {
		dispatch(
			onActionCreator(GET_BRANDS_ERROR, {
				loading: false,
				error: true,
				params,
			}),
		);
	}
};
