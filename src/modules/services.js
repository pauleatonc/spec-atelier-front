import cancellationSingleton from './cancellation';

/**
 * Factory to create a wrapper to call services.
 */
export const factoryService = callback => {
  const cancellation = cancellationSingleton();
  
  return (serviceArgs, actionType = null) => {
    setTimeout(() => cancellation.register(actionType), 0);

    return callback(serviceArgs)
      .catch(error => {
        throw error.toString();
      });
  };
};

/**
 *  Delete null and undefined values from object
 *  Transform { attrd: { id } } to { attr: id }
 *  return a new object
 */
export const cleanObject = obj => Object
  .entries(obj)
  .reduce((acc, [key, value]) => {
    if (value === null || value === undefined) return acc;
    if (value && typeof value === 'object' && value.id) return { ...acc, [key]: value.id }
    return { ...acc, [key]: value }
  }, {});

/**
 *  Delete null, undefined and empty strings values from object
 *  transform { attrd: { id } } to { attr: id }
 *  return a new object
 */
export const cleanParams = obj => Object
  .entries(obj)
  .reduce((acc, [key, value]) => {
    if (value === null || value === undefined || value === '') return acc;
    if (value && typeof value === 'object' && value.id) return { ...acc, [key]: value.id };
    return { ...acc, [key]: value }
  }, {});

/** 
 * Format Object of params to string
 */
export const formatParams = obj => {
  if (!obj || typeof obj !== 'object') return '';
  return `?${Object.entries(cleanParams(obj)).map(([key, value]) => `${key}=${value}`).join('&')}`;
}

