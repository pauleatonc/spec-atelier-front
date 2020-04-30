/**
 * To generate the request's headers.
 */
const generateHeaders = (contentType, isPublic) => {
  let headers = {};

  if (contentType) {
    headers = { 'Content-Type': contentType };
  }

  if (isPublic) {
    return headers;
  }

  const token = window?.localStorage.getItem('token') || '';
  
  return { ...headers, Authorization: `Bearer ${token}` };
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
  // FIXME: https://medium.com/@jugtuttle/formdata-and-strong-params-ruby-on-rails-react-c230d050e26e
  const headers = generateHeaders();

  Object.keys(payload).forEach(key => {
    if (!Array.isArray(payload[key])) {
      formData.append(key, payload[key]);

      return; 
    }

    payload[key].forEach(item => formData.append(key, item));
  });

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


/**
 * To do a put request with JSON as content type.
 */
export const putJsonRequest = (url, payload) => {
  const body = JSON.stringify(payload);
  const headers = generateHeaders('application/json');

  return fetch(url, { body, headers, method: 'PUT' }).then(response => response.json());
};
