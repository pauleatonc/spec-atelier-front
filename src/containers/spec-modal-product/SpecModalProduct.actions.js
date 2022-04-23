import reactImageSize from 'react-image-size';
import onActionCreator from 'config/store/helpers';
import { getProductById } from 'services/products.service';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';
export const CLOSE_MODAL_PRODUCT = 'CLOSE_MODAL_PRODUCT';
export const SHOW_MODAL_PRODUCT = 'SHOW_MODAL_PRODUCT';
export const GET_IMAGE_SIZE_DATA = 'GET_IMAGE_SIZE_DATA';
export const GET_IMAGE_SIZE_DATA_ERROR = 'GET_IMAGE_SIZE_DATA_ERROR';
export const GET_IMAGE_SIZE_DATA_SUCCESS = 'GET_IMAGE_SIZE_DATA_SUCCESS';

export const getProduct = ({ id }) => async (dispatch, getState) => {
  const {
    specDocument: { blocks },
  } = getState();
  const selectedProducts = blocks?.filter((block) => block.type === 'Product');
  const hasProduct = selectedProducts.find(
    (selectedProduct) => selectedProduct?.element.original_product_id === id,
  );
  dispatch(
    onActionCreator(SHOW_MODAL_PRODUCT, {
      hasProduct,
    }),
  );
  try {
    const response = await getProductById(id);
    return dispatch(onActionCreator(GET_PRODUCT, response));
  } catch (error) {
    return dispatch(
      onActionCreator(GET_PRODUCT_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const closeModal = () => (dispatch) =>
  dispatch(onActionCreator(CLOSE_MODAL_PRODUCT, {}));

export const getImageSizeData = (imageUrl) => (dispatch) => {
  dispatch(onActionCreator(GET_IMAGE_SIZE_DATA));
  reactImageSize(imageUrl)
    .then(({ width, height }) => {
      dispatch(
        onActionCreator(GET_IMAGE_SIZE_DATA_SUCCESS, {
          width,
          height,
        }),
      );
    })
    .catch((errorMessage) =>
      dispatch(
        onActionCreator(GET_IMAGE_SIZE_DATA_ERROR, {
          errorMessage,
        }),
      ),
    );
};
