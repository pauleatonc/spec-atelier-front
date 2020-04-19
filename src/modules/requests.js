/**
 * To generate the request's headers.
 */
const generateHeaders = (contentType, isPublic) => {
  if (isPublic) {
    return { 'Content-Type': contentType };
  }

  const token = window?.localStorage.getItem('token') || '';
  
  return { Authorization: `Bearer ${token}`, 'Content-Type': contentType };
};

/**
 * To do a get request with JSON as content type.
 */
export const getJsonRequest = url => {
  const headers = generateHeaders('application/json');

  return fetch(url, { headers, method: 'GET' }).then(response => response.json());
};

/**
 * To do a post request with form data as content type.
 */
export const postFormRequest = (url, payload) => {
  const formData = new FormData();
  const headers = generateHeaders('application/x-www-form-urlencoded');

  Object.keys(payload).forEach(key => formData.append(key, payload[key]));

  return fetch(url, { headers, body: formData, method: 'POST' }).then(response => response.json());
};

/**
 * To do a post request with JSON as content type.
 */
export const postJsonRequest = (url, payload) => {
  const body = JSON.stringify(payload);
  const headers = generateHeaders('application/json');

  return fetch(url, { body, headers, method: 'POST' }).then(response => response.json());
};
