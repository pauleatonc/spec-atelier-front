export const setLocalStorage = ({ key, value }) =>
	localStorage.setItem(key, value);

export const getLocalStorage = (key) => localStorage.getItem(key);

export const deleteLocalStorage = (key) => localStorage.removeItem(key);
