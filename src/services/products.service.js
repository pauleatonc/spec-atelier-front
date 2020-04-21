import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest } from '../modules/requests';

/**
 * Gets the list of products' sections available.
 */
export const getProductsSections = () => getJsonRequest(`${API_BASE_URL}/api/sections`);

/**
 * Gets the list of products' items by the given section.
 */
export const getProductsItems = sectionID => getJsonRequest(`${API_BASE_URL}/api/sections/${sectionID}/items`);

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
