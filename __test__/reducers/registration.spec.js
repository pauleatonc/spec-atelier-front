/* eslint-disable no-undef */
import { REGISTRATION, REGISTRATION_ERROR } from '../../src/config/constants';
import { registrationReducer } from '../../src/reducers';
import { initialState } from '../../src/reducers/registration.reducer';

describe('Login Reducer', () => {
	it('should return default state', () => {
		const resultState = registrationReducer(initialState, {
			type: 'REGISTRATION_NEW',
		});
		expect(resultState).toEqual(initialState);
	});

	it('should return REGISTRATION state with new state', () => {
		const resultState = registrationReducer(initialState, {
			type: REGISTRATION,
			payload: {
				isLogin: true,
				userData: {
					text: 'New user',
				},
			},
		});

		expect(resultState.isLogin).toBeTruthy();
		expect(resultState.userData).toEqual({ text: 'New user' });
	});

	it('should return REGISTRATION_ERROR state with new state', () => {
		const resultState = registrationReducer(initialState, {
			type: REGISTRATION_ERROR,
			payload: {
				isLogin: false,
				error: 'New error',
			},
		});

		expect(resultState.isLogin).toBeFalsy();
		expect(resultState.error).toEqual('New error');
	});
});
