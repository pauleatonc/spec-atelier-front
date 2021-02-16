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
 * Factory to create requests helpers.
 */
const factoryRequest = (callback) => {
	const cancellation = cancellationSingleton();
	const getActionType = () =>
		new Promise((resolve) =>
			cancellation.on((actionType) => resolve(actionType)),
		).then((actionType) => [actionType, cancellation.getSignal(actionType)]);
	const unregisterActionType = (actionType) =>
		cancellation.unregister(actionType);

	return (url, payload) =>
		callback(url, payload, { getActionType, unregisterActionType });
};

/**
 * Helper to make a cancellable request using the fetch API.
 */
const cancellableFetch = async (url, fetchOptions, cancelOptions) => {
	const [actionType, signal] = await cancelOptions.getActionType();
	const response = await fetch(url, { ...fetchOptions, signal });

	cancelOptions.unregisterActionType(actionType);

	return response;
};

/**
 * To do a DELETE request with JSON as content type.
 */
export const deleteJsonRequest = factoryRequest((url, payload, options) => {
	const headers = generateHeaders('application/json');
	const body = JSON.stringify(payload);

	return cancellableFetch(
		url,
		{ body, headers, method: 'DELETE' },
		options,
	).then((response) => response.json());
});

/**
 * To do a GET request with JSON as content type.
 */
export const getJsonRequest = factoryRequest((url, _, options) => {
	const headers = generateHeaders('application/json');

	return cancellableFetch(
		url,
		{ headers, method: 'GET' },
		options,
	).then((response) => response.json());
});

/**
 * To do a PATCH request with JSON as content type.
 */
export const patchJsonRequest = factoryRequest((url, payload, options) => {
	const headers = generateHeaders('application/json');
	const body = JSON.stringify(payload);

	return cancellableFetch(
		url,
		{ body, headers, method: 'PATCH' },
		options,
	).then((response) => response.json());
});

/**
 * To do a POST request with form data as content type.
 */
export const postFormRequest = factoryRequest((url, payload, options) => {
	const headers = generateHeaders();
	const formData = new FormData();

	// FIXME: https://medium.com/@jugtuttle/formdata-and-strong-params-ruby-on-rails-react-c230d050e26e
	Object.keys(payload).forEach((key) => {
		if (!Array.isArray(payload[key])) {
			formData.append(key, payload[key]);

			return;
		}

		payload[key].forEach((item) => formData.append(key, item));
	});

	return cancellableFetch(
		url,
		{ headers, body: formData, method: 'POST' },
		options,
	).then((response) => response.json());
});

/**
 * To do a POST request with JSON as content type.
 */
export const postJsonRequest = factoryRequest((url, payload, options) => {
	const headers = generateHeaders('application/json');
	const body = JSON.stringify(payload);

	return cancellableFetch(
		url,
		{ body, headers, method: 'POST' },
		options,
	).then((response) => response.json());
});

/**
 * To do a PUT request with JSON as content type.
 */
export const putJsonRequest = factoryRequest((url, payload, options) => {
	const headers = generateHeaders('application/json');
	const body = JSON.stringify(payload);

	return cancellableFetch(
		url,
		{ body, headers, method: 'PUT' },
		options,
	).then((response) => response.json());
});

/**
 * To do a GET request with octet-stream as content type.
 */
export const getBlobRequest = factoryRequest((url, _, options) => {
	const headers = generateHeaders('application/json');
	return cancellableFetch(url, { headers, method: 'GET' }, options).then(
		(response) => response,
	);
});
