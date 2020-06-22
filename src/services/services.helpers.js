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
 * Format the given entries to a string of query params.
 */
export const formatToQueryString = entries => {
  if (!entries || typeof entries !== 'object') {
    return '';
  }

  return Object.entries(entries)
    .reduce(
      (query, [key, value]) => {
        if (!value && value !== 0) {
          return query;
        }

        return query.concat(`${key}=${value}`);
      },
      [],
    )
    .join('&')
    .replace (/^/,'?');
}
