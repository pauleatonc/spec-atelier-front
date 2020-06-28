import { cancellationSingleton } from './cancellation';

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
 * Factory to create GET request helper with JSON as content type.
 */
const factoryGetJsonRequest = () => {
  const cancellation = cancellationSingleton();

  return async url => {
    const headers = generateHeaders('application/json');

    return cancellation.getSignal()
      .then(signal => fetch(url, { headers, signal, method: 'GET' }))
      .then(response => response.json());
  };
};

/**
 * Factory to create POST request helper with form-data as content type.
 */
const factoryPostFormRequest = () => {
  const cancellation = cancellationSingleton();

  return (url, payload) => {
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

    return cancellation.getSignal()
      .then(signal => fetch(url, { headers, signal, body: formData, method: 'POST' }))
      .then(response => response.json());
  };
};

/**
 * Factory to create POST request helper with JSON as content type.
 */
const factoryPostJsonRequest = () => {
  const cancellation = cancellationSingleton();

  return (url, payload) => {
    const body = JSON.stringify(payload);
    const headers = generateHeaders('application/json');
    
    return cancellation.getSignal()
      .then(signal => fetch(url, { body, headers, signal, method: 'POST' }))
      .then(response => response.json());
  };
};

/**
 * Factory to create PUT request helper with JSON as content type.
 */
const factoryPutJsonRequest = () => {
  const cancellation = cancellationSingleton();

  return (url, payload) => {
    const body = JSON.stringify(payload);
    const headers = generateHeaders('application/json');

    return cancellation.getSignal()
      .then(signal => fetch(url, { body, headers, signal, method: 'PUT' }))
      .then(response => response.json());
  };
};

/**
 * To do a GET request with JSON as content type.
 */
export const getJsonRequest = factoryGetJsonRequest();

/**
 * To do a POST request with form data as content type.
 */
export const postFormRequest = factoryPostFormRequest();

/**
 * To do a POST request with JSON as content type.
 */
export const postJsonRequest = factoryPostJsonRequest();

/**
 * To do a PUT request with JSON as content type.
 */
export const putJsonRequest = factoryPutJsonRequest();
