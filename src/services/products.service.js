import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postFormRequest, postJsonRequest, patchJsonRequest } from '../modules/requests';
import { factoryService, formatParams } from '../modules/services';

/**
 * Gets the list of products' sections available.
 */
export const getProductsSections = factoryService(() => getJsonRequest(`${API_BASE_URL}/sections`));

/**
 * Gets the list of products' items by the given section.
 */
export const getProductsItems = factoryService(sectionID => getJsonRequest(`${API_BASE_URL}/sections/${sectionID}/items`));

/**
 * Gets the list of products' systems by the given item.
 */
export const getProductsSystems = factoryService(itemID => getJsonRequest(`${API_BASE_URL}/items/${itemID}/systems`));

/**
 * Gets a list of products. 
 */
export const getProducts = factoryService(filters => getJsonRequest(`${API_BASE_URL}/products${formatParams(filters)}`));

/**
 * Gets a product by the given item. 
 */
export const getProductById = factoryService(productID => getJsonRequest(`${API_BASE_URL}/products/${productID}`));

/**
 * Create a new product. 
 */
export const createProduct = factoryService(data => {
  const body = {
    product: {
      brand: data.brand,
      item_id: data.item,
      long_desc: data.description,
      name: data.name,
      price: data.price,
      system_id: data.system,
    },
  };

  return postJsonRequest(`${API_BASE_URL}/products`, body);
});

export const editProduct = factoryService(product => {
  console.log('service', product);
  // const body = {
  //   product: {
  //     ...data,
  //     brand: data.brand,
  //     item_id: data.item,
  //     long_desc: data.description,
  //     name: data.name,
  //     price: data.price,
  //     system_id: data.system,
  //   },
  // };

  return patchJsonRequest(`${API_BASE_URL}/products/${product.id}`, { product });
});

/**
 * Upload images to the given product. 
 */
export const uploadProductImages = factoryService(({ productID, images }) => {
  const body = { 'images[]': images };

  return postFormRequest(`${API_BASE_URL}/products/${productID}/associate_images`, body);
});

/**
 * Upload documents to the given product.
 */
export const uploadProductDocuments = factoryService(({ productID, documents }) => {
  const body = { 'documents[]': documents };

  return postFormRequest(`${API_BASE_URL}/products/${productID}/associate_documents`, body);
});
