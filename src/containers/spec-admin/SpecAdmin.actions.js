import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { onHideSpecProducts } from '../spec-products/SpecProducts.actions';
import { updateProjectConfig } from '../../services/specs.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

export const HIDE_SPEC_ADMIN_SUCCESS = 'HIDE_SPEC_ADMIN_SUCCESS';
export const onHideSpecAdmin = () => (dispatch) =>
	dispatch(onActionCreator(HIDE_SPEC_ADMIN_SUCCESS));

export const SHOW_SPEC_ADMIN_SUCCESS = 'SHOW_SPEC_ADMIN_SUCCESS';
export const onShowSpecAdminn = () => (dispatch) =>
	batch(() => {
		dispatch(onHideSpecProducts());
		dispatch(onActionCreator(SHOW_SPEC_ADMIN_SUCCESS));
	});

export const SET_LOCAL_CONFIG = 'SET_LOCAL_CONFIG';
export const onSetLocalConfig = (localConfig) => (dispatch) => {
	dispatch(onActionCreator(SET_LOCAL_CONFIG, localConfig));
};

export const EDIT_CONFIG = 'UPDATE_CONFIG';
export const UPDATE_PRODUCT_CONFIG_SUCCESS = 'UPDATE_PRODUCT_CONFIG_SUCCESS';
export const onEditConfig = (key, value) => (dispatch) => {
	dispatch(onActionCreator(EDIT_CONFIG, { key, value }));
};
export const onUpdateProductConfig = (specID, project_config) => async (
	dispatch,
	getState,
) => {
	try {
		const { auth } = getState();
		await updateProjectConfig({
			specID,
			userID: auth.user?.id,
			project_config,
		});
		dispatch(onActionCreator(UPDATE_PRODUCT_CONFIG_SUCCESS));
	} catch (error) {
		dispatch(
			onShowAlertSuccess({ message: 'Error al guardar la configuración' }),
		);
	}
};
