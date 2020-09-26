import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getBrands } from '../../services/brands.service';
import {
  createProduct,
  getProductsSystems,
  uploadProductImages,
  uploadProductDocuments,
} from '../../services/products.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS } from '../spec-products-sections/SpecProductsSections.actions';
import { onHideSpecProductsItemsSuccess } from '../spec-products-items/SpecProductsItems.actions';

export const GET_SPEC_PRODUCTS_SYSTEMS = 'GET_SPEC_PRODUCTS_SYSTEMS';
export const GET_SPEC_PRODUCTS_SYSTEMS_ERROR = 'GET_SPEC_PRODUCTS_SYSTEMS_ERROR';
export const GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS = 'GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS';
export const onGetSpecProductsSystems = ({ itemID }) => async dispatch => {
  dispatch(onActionCreator(GET_SPEC_PRODUCTS_SYSTEMS));

  try {
    const response = await getProductsSystems(itemID);

    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS, { systems: response.systems }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_SYSTEMS_ERROR, { error }));
  }
};

export const GET_SPEC_PRODUCTS_BRANDS = 'GET_SPEC_PRODUCTS_BRANDS';
export const GET_SPEC_PRODUCTS_BRANDS_ERROR = 'GET_SPEC_PRODUCTS_BRANDS_ERROR';
export const GET_SPEC_PRODUCTS_BRANDS_SUCCESS = 'GET_SPEC_PRODUCTS_BRANDS_SUCCESS';
export const onGetSpecProductsBrands = () => async dispatch => {
  dispatch(onActionCreator(GET_SPEC_PRODUCTS_BRANDS));

  try {
    const response = await getBrands();

    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_BRANDS_SUCCESS, { brands: response.brands.list.filter(brand => brand.name !== null) }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_BRANDS_ERROR, { error }));
  }
};

export const CREATE_SPEC_PRODUCT = 'CREATE_SPEC_PRODUCT';
export const CREATE_SPEC_PRODUCT_ERROR = 'CREATE_SPEC_PRODUCT_ERROR';
export const CREATE_SPEC_PRODUCT_SUCCESS = 'CREATE_SPEC_PRODUCT_SUCCESS';
export const onCreateSpecProduct = ({ documents, images }) => async (dispatch, getState) => {
  dispatch(onActionCreator(CREATE_SPEC_PRODUCT));

  try {
    const state = getState();
    const { stepOne, stepTwo } = state.specCreateProduct;
    const payload = {
      name: stepOne.name,
      section: stepOne.section?.value,
      item: stepOne.item?.value,
      system: stepOne.system?.value,
      description: stepTwo.description,
      brand: stepTwo.brand.value,
      price: stepTwo.price,
    };
    const response = await createProduct(payload);
    
    const postData = [];
    if (images?.length) postData.concat(uploadProductImages({ productID: response.product.id, images }));
    if (documents?.length) postData.concat(uploadProductDocuments({ productID: response.product.id, documents }));  
    
    if (postData.length) await Promise.All(postData);

    return batch(() => {
      dispatch(onActionCreator(CREATE_SPEC_PRODUCT_SUCCESS));
      dispatch(onShowAlertSuccess({ message: 'Producto creado exitosamente' }));
      dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS));
      dispatch(onHideSpecProductsItemsSuccess());
    });
  } catch (error) {
    return batch(() => {
      dispatch(onActionCreator(CREATE_SPEC_PRODUCT_ERROR, { error }));
      dispatch(onShowAlertSuccess({ message: 'Error al crear producto' }));
    });
  }
};

export const HIDE_SPEC_CREATE_PRODUCT = 'HIDE_SPEC_CREATE_PRODUCT';
export const HIDE_SPEC_CREATE_PRODUCT_SUCCESS = 'HIDE_SPEC_CREATE_PRODUCT_SUCCESS';
export const onHideSpecCreateProduct = () => dispatch =>
batch(() => {
  dispatch(onActionCreator(HIDE_SPEC_CREATE_PRODUCT_SUCCESS));
  dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS));
  dispatch(onHideSpecProductsItemsSuccess());
});

export const SHOW_SPEC_CREATE_PRODUCT_SUCCESS = 'SHOW_SPEC_CREATE_PRODUCT_SUCCESS';
export const onShowSpecCreateProductSuccess = () => ({ type: SHOW_SPEC_CREATE_PRODUCT_SUCCESS });

export const HIDE_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS = 'HIDE_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS';
export const SHOW_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS = 'SHOW_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS';
export const onHideSpecCreateProductStepTwoSuccess = payload => ({ payload, type: HIDE_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS });
export const onShowSpecCreateProductStepTwoSuccess = payload => ({ payload, type: SHOW_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS });

export const HIDE_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS = 'HIDE_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS';
export const SHOW_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS = 'SHOW_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS';
export const onHideSpecCreateProductStepThreeSuccess = payload => ({ payload, type: HIDE_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS });
export const onShowSpecCreateProductStepThreeSuccess = payload => ({ payload, type: SHOW_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS });
