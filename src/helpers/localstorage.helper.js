const setLocalStorage = ({ key, value }) => localStorage.setItem(key, value);

const getLocalStorage = key => localStorage.getItem(key);

const deleteLocalStorage = key => localStorage.removeItem(key);

export default {
	setLocalStorage,
	getLocalStorage,
	deleteLocalStorage,
};
