/* eslint-disable no-undef */
import 'jest-localstorage-mock';
import { setLocalStorage } from '../../src/helpers/localstorage.helper';

describe('LocalStorage Helper', () => {
	it('should save new key to localStorage', () => {
		const key = 'foo';
		const value = 'bar';
		const valueStringify = JSON.stringify(value);

		setLocalStorage({ key, value });
		expect(localStorage.setItem).toHaveBeenLastCalledWith(key, valueStringify);
		expect(localStorage.__STORE__[key]).toBe(valueStringify);
		expect(Object.keys(localStorage.__STORE__).length).toBe(1);
	});
});
