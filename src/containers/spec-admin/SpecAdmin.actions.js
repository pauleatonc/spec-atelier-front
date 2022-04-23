import { batch } from 'react-redux';
import { updateProjectConfig } from 'services/specs.service';
import onActionCreator from 'config/store/helpers';
import { onHideSpecProducts } from 'containers/spec-products/SpecProducts.actions';
import { onShowAlertSuccess } from 'containers/alert/Alert.actions';

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
export const onEditConfig = (newConfig) => (dispatch) => {
  dispatch(onActionCreator(EDIT_CONFIG, { newConfig }));
};
export const onUpdateProductConfig = (specID, project_config) => async (
  dispatch,
  getState,
) => {
  try {
    const { auth } = getState();
    const response = await updateProjectConfig({
      specID,
      userID: auth.user?.id,
      project_config,
    });
    if (response.status) {
      dispatch(
        onShowAlertSuccess({ message: 'Error al guardar la configuración' }),
      );
    } else {
      dispatch(onActionCreator(UPDATE_PRODUCT_CONFIG_SUCCESS));
    }
  } catch (error) {
    dispatch(
      onShowAlertSuccess({ message: 'Error al guardar la configuración' }),
    );
  }
};
