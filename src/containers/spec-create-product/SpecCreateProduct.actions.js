import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getProductsSystems } from '../../services/products.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

export const GET_PRODUCTS_SYSTEMS = 'GET_PRODUCTS_SYSTEMS';
export const GET_PRODUCTS_SYSTEMS_ERROR = 'GET_PRODUCTS_SYSTEMS_ERROR';
export const GET_PRODUCTS_SYSTEMS_SUCCESS = 'GET_PRODUCTS_SYSTEMS_SUCCESS';
export const onGetProductsSystems = ({ itemID }) => async dispatch => {
  dispatch(onActionCreator(GET_PRODUCTS_SYSTEMS));

  try {
    const response = await getProductsSystems(itemID);

    return dispatch(onActionCreator(GET_PRODUCTS_SYSTEMS_SUCCESS, { systems: response.systems }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PRODUCTS_SYSTEMS_ERROR, { error }));
  }
};

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const onCreateProduct = ({ documents, images }) => async (dispatch, getState) => {
  dispatch(onActionCreator(CREATE_PRODUCT));

  try {
    // const state = getState();
    // const { stepOne, stepTwo } = state.specCreateProduct;
    // const payload = {
    //   name: stepOne.name,
    //   section: stepOne.section?.value,
    //   item: stepOne.item?.value,
    //   system: stepOne.system?.value,
    //   description: stepTwo.description,
    //   brand: stepTwo.brand.value,
    //   price: stepTwo.price,
    // };
    // const response = await createProduct(payload);
    // await uploadProductImages(response.product.id, images);
    // await uploadProductDocuments(response.product.id, documents);

    return setTimeout(() => batch(() => {
      dispatch(onActionCreator(CREATE_PRODUCT_SUCCESS));
      dispatch(onShowAlertSuccess({ message: 'Producto creado exitosamente' }));
    }), 2000);
  } catch (error) {
    return batch(() => {
      dispatch(onActionCreator(GET_PRODUCTS_SYSTEMS_ERROR, { error }));
      dispatch(onShowAlertSuccess({ message: 'Error al crear producto' }));
    });
  }
};

export const HIDE_SPEC_CREATE_PRODUCT = 'HIDE_SPEC_CREATE_PRODUCT';
export const SHOW_SPEC_CREATE_PRODUCT = 'SHOW_SPEC_CREATE_PRODUCT';
export const onHideSpecCreateProduct = () => ({ type: HIDE_SPEC_CREATE_PRODUCT });
export const onShowSpecCreateProduct = () => ({ type: SHOW_SPEC_CREATE_PRODUCT });

export const HIDE_SPEC_CREATE_PRODUCT_STEP_TWO = 'HIDE_SPEC_CREATE_PRODUCT_STEP_TWO';
export const SHOW_SPEC_CREATE_PRODUCT_STEP_TWO = 'SHOW_SPEC_CREATE_PRODUCT_STEP_TWO';
export const onHideSpecCreateProductStepTwo = () => ({ type: HIDE_SPEC_CREATE_PRODUCT_STEP_TWO });
export const onShowSpecCreateProductStepTwo = payload => ({ payload, type: SHOW_SPEC_CREATE_PRODUCT_STEP_TWO });

export const HIDE_SPEC_CREATE_PRODUCT_STEP_THREE = 'HIDE_SPEC_CREATE_PRODUCT_STEP_THREE';
export const SHOW_SPEC_CREATE_PRODUCT_STEP_THREE = 'SHOW_SPEC_CREATE_PRODUCT_STEP_THREE';
export const onHideSpecCreateProductStepThree = payload => ({ payload, type: HIDE_SPEC_CREATE_PRODUCT_STEP_THREE });
export const onShowSpecCreateProductStepThree = payload => ({ payload, type: SHOW_SPEC_CREATE_PRODUCT_STEP_THREE });
