import {
  setLocalStorage,
  getLocalStorage,
} from '../helpers/localstorage.helper';
import { redirectToProjectsWhenIsLogin } from '../helpers/redirect.helper';

import cancellationSingleton from './cancellation';

/**
 * Factory to create a wrapper to call services.
 */
export const factoryService = (callback, isStatus) => {
  const cancellation = cancellationSingleton();

  return (serviceArgs, actionType = null) => {
    setTimeout(() => cancellation.register(actionType), 0);

    return callback(serviceArgs)
      .then(({ response, status }) => {
        if (status === 401) {
          const responseStatus = getLocalStorage('responseStatus');
          if (!responseStatus) {
            setLocalStorage({ key: 'responseStatus', value: '401' });
            redirectToProjectsWhenIsLogin();
          }
        }
        return isStatus
          ? { ...response, codeStatus: status, resp: response }
          : response;
      })
      .catch((error, status) => {
        if (isStatus) {
          throw status;
        }
        if (!isStatus) {
          throw error.toString();
        }
      });
  };
};

/**
 *  Delete null and undefined values from object
 *  Transform { attrd: { id } } to { attr: id }
 *  return a new object
 */
export const cleanObject = (obj) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (value === null || value === undefined) return acc;
    if (value && typeof value === 'object' && value.id)
      return { ...acc, [key]: value.id };
    return { ...acc, [key]: value };
  }, {});

/**
 *  Delete null, undefined and empty strings values from object
 *  transform { attrd: { id } } to { attr: id }
 *  return a new object
 */
export const cleanParams = (obj) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (
      value === null ||
      value === undefined ||
      value === '' ||
      value.length === 0
    )
      return acc;
    if (value && typeof value === 'object' && value.id)
      return { ...acc, [key]: value.id };
    return { ...acc, [key]: value };
  }, {});

/**
 *  Delete null, undefined and empty strings values from object
 *  transform { attrd: { id } } to { attr: id }
 *  transform
 *    from { attr: [1,2,3] } Array of objects with id,
 *    to { attr: [{ id: 1 }, { id: 2 }] } to { attr: '[]=1&ttr=[]=2&ttr=[]=3' } as string
 *  return a new object
 */

export const cleanObjectsAndArrays = (obj = {}) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (!value && typeof value !== 'boolean') return acc;
    if (value && typeof value === 'object' && value.id)
      return { ...acc, [key]: value.id };
    if (Array.isArray(value))
      return value.length
        ? {
            ...acc,
            [`${key}[]`]: value
              .map((data) => (data?.id ? data.id : data))
              .join(`&${key}[]=`),
          }
        : acc;
    return { ...acc, [key]: value };
  }, {});

/**
 * Format Object of params to string
 */
export const formatParams = (obj) => {
  if (!obj || typeof obj !== 'object') return '';
  return `?${Object.entries(cleanParams(obj))
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
};
