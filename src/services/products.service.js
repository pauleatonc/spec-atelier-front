import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postFormRequest, postJsonRequest } from '../modules/requests';

/**
 * Gets the list of products' sections available.
 */
export const getProductsSections = () => getJsonRequest(`${API_BASE_URL}/api/sections`);

/**
 * Gets the list of products' items by the given section.
 */
export const getProductsItems = sectionID => getJsonRequest(`${API_BASE_URL}/api/sections/${sectionID}/items`);

/**
 * Gets the list of products' systems by the given item.
 */
export const getProductsSystems = itemID => getJsonRequest(`${API_BASE_URL}/api/items/${itemID}/systems`);

/**
 * Gets a list of products by the given item. 
 */
export const getProductsByItem = (itemID, page = null) => {
  if (!page) {
    return getJsonRequest(`${API_BASE_URL}/api/items/${itemID}/products?limit=20`);
  }

  return getJsonRequest(`${API_BASE_URL}/api/items/${itemID}/products?limit=20&page=${page}`);
};

/**
 * Gets a product by the given item. 
 */
export const getProductById = productID => getJsonRequest(`${API_BASE_URL}/api/products/${productID}`);

/**
 * Create a new product. 
 */
export const createProduct = data => {
  const body = {
    // name:
    // brand_id:
    // long_desc:
    // project_type:
    // room_type:
    // short_desc:
    // subitem_id:
    // work_type:
    ...data,
  };

  return postJsonRequest(`${API_BASE_URL}/api/products`, body);
};

/**
 * Upload images to the given product. 
 */
export const uploadProductImages = (productID, images) => {
  const body = { 'images': images };

  return postFormRequest(`${API_BASE_URL}/api/products/${productID}/associate_images`, body);
};

/**
 * Upload documents to the given product.
 */
export const uploadProductDocuments = (productID, files) => {
  const body = { 'documents': files };

  return postFormRequest(`${API_BASE_URL}/api/products/${productID}/associate_documents`, body);
};
