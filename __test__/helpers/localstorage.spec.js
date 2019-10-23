/* eslint-disable no-undef */
import 'jest-localstorage-mock';
import {
	setLocalStorage,
	getLocalStorage,
	deleteLocalStorage,
} from '../../src/helpers/localstorage.helper';

describe('LocalStorage Helper', () => {
	let key;
	let value;
	let valueStringify;

	beforeAll(() => {
		key = 'foo';
		value = 'bar';
		valueStringify = JSON.stringify(value);
	});

	afterAll(() => {
		localStorage.clear();
		localStorage.__STORE__ = {};
	});

	it('should save new key to localStorage', () => {
		setLocalStorage({ key, value });
		expect(localStorage.setItem).toHaveBeenLastCalledWith(key, valueStringify);
		expect(localStorage.__STORE__[key]).toBe(valueStringify);
		expect(Object.keys(localStorage.__STORE__).length).toBe(1);
	});

	it('should get value from localsotrage', () => {
		setLocalStorage({ key, value });
		expect(getLocalStorage(key)).toBe(value);
		expect(Object.keys(localStorage.__STORE__).length).toBe(1);
	});

	it('should delete key', () => {
		setLocalStorage({ key, value });
		expect(deleteLocalStorage(key)).toBe(undefined);
		expect(Object.keys(localStorage.__STORE__).length).toBe(0);
	});
});
