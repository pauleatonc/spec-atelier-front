import cancellationSingleton from './cancellation';

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
 * Factory to create a DELETE request helper with JSON format as content type.
 */
const factoryDeleteJsonRequest = () => {
  const cancellation = cancellationSingleton();
  const getActionType = () => new Promise(resolve => cancellation.on(actionType => resolve(actionType)));

  return (url, payload) => {
    const headers = generateHeaders('application/json');
    const body = JSON.stringify(payload);

    return getActionType()
      .then(actionType =>
        Promise.all([Promise.resolve(actionType), Promise.resolve(cancellation.getSignal(actionType))]),
      )
      .then(([actionType, signal]) =>
        Promise.all([Promise.resolve(actionType), fetch(url, { body, headers, signal, method: 'DELETE' })]),
      )
      .then(([actionType, response]) => {
        cancellation.unregister(actionType);

        return response;
      })
      .then(response => response.json());
  }
};

/**
 * Factory to create a GET request helper with JSON format as content type.
 */
const factoryGetJsonRequest = () => {
  const cancellation = cancellationSingleton();
  const getActionType = () => new Promise(resolve => cancellation.on(actionType => resolve(actionType)));

  return url => {
    const headers = generateHeaders('application/json');

    return getActionType()
      .then(actionType =>
        Promise.all([Promise.resolve(actionType), Promise.resolve(cancellation.getSignal(actionType))]),
      )
      .then(([actionType, signal]) =>
        Promise.all([Promise.resolve(actionType), fetch(url, { headers, signal, method: 'GET' })]),
      )
      .then(([actionType, response]) => {
        cancellation.unregister(actionType);

        return response;
      })
      .then(response => response.json());
  }
};

/**
 * Factory to create a POST request helper with form-data format as content type.
 */
const factoryPostFormRequest = () => {
  const cancellation = cancellationSingleton();
  const getActionType = () => new Promise(resolve => cancellation.on(actionType => resolve(actionType)));

  return (url, payload) => {
    const headers = generateHeaders();
    const formData = new FormData();
    
    // FIXME: https://medium.com/@jugtuttle/formdata-and-strong-params-ruby-on-rails-react-c230d050e26e
    Object.keys(payload).forEach(key => {
      if (!Array.isArray(payload[key])) {
        formData.append(key, payload[key]);

        return; 
      }

      payload[key].forEach(item => formData.append(key, item));
    });

    return getActionType()
      .then(actionType =>
        Promise.all([Promise.resolve(actionType), Promise.resolve(cancellation.getSignal(actionType))]),
      )
      .then(([actionType, signal]) =>
        Promise.all([Promise.resolve(actionType), fetch(url, { headers, signal, body: formData, method: 'POST' })]),
      )
      .then(([actionType, response]) => {
        cancellation.unregister(actionType);

        return response;
      })
      .then(response => response.json());
  }
};

/**
 * Factory to create a POST request helper with JSON format as content type.
 */
const factoryPostJsonRequest = () => {
  const cancellation = cancellationSingleton();
  const getActionType = () => new Promise(resolve => cancellation.on(actionType => resolve(actionType)));

  return (url, payload) => {
    const headers = generateHeaders('application/json');
    const body = JSON.stringify(payload);

    return getActionType()
      .then(actionType =>
        Promise.all([Promise.resolve(actionType), Promise.resolve(cancellation.getSignal(actionType))]),
      )
      .then(([actionType, signal]) =>
        Promise.all([Promise.resolve(actionType), fetch(url, { body, headers, signal, method: 'POST' })]),
      )
      .then(([actionType, response]) => {
        cancellation.unregister(actionType);

        return response;
      })
      .then(response => response.json());
  }
};

/**
 * Factory to create a PUT request helper with JSON format as content type.
 */
const factoryPutJsonRequest = () => {
  const cancellation = cancellationSingleton();
  const getActionType = () => new Promise(resolve => cancellation.on(actionType => resolve(actionType)));

  return (url, payload) => {
    const headers = generateHeaders('application/json');
    const body = JSON.stringify(payload);

    return getActionType()
      .then(actionType =>
        Promise.all([Promise.resolve(actionType), Promise.resolve(cancellation.getSignal(actionType))]),
      )
      .then(([actionType, signal]) =>
        Promise.all([Promise.resolve(actionType), fetch(url, { body, headers, signal, method: 'PUT' })]),
      )
      .then(([actionType, response]) => {
        cancellation.unregister(actionType);

        return response;
      })
      .then(response => response.json());
  }
};

/**
 * To do a DELETE request with JSON as content type.
 */
export const deleteJsonRequest = factoryDeleteJsonRequest();

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
