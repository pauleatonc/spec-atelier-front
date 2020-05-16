/**
 * To handle generic action creators. 
 */
const onActionCreator = (type, payload) => ({ payload, type });

/**
 *  delete null and undefined values
 *  transform { attrd: { id } } to { attr: id }
 *  return object 
 */

export const cleanObject = obj => Object
  .entries(obj)
  .reduce((acc, [key, value]) => {
    if (value === null || value === undefined) return acc;
    if (value && typeof value === 'object' && value.id) return { ...acc, [key]: value.id }
    return { ...acc, [key]: value }
  }, {});

export default onActionCreator;