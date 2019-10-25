/* eslint-disable no-undef */
import {
	RECOVER_PASSWORD,
	RECOVER_PASSWORD_ERROR,
} from '../../src/config/constants';
import { recoverPasswordReducer } from '../../src/reducers';
import { initialState } from '../../src/reducers/recover_password.reducer';

describe('Recovery Password Reducer', () => {
	it('should return default state', () => {
		const resultState = recoverPasswordReducer(initialState, {
			type: 'RECOVER_PASSWORD_NEW',
		});
		expect(resultState).toEqual(initialState);
	});

	it('should return RECOVER_PASSWORD state with new state', () => {
		const resultState = recoverPasswordReducer(initialState, {
			type: RECOVER_PASSWORD,
			payload: {
				sended: true,
			},
		});

		expect(resultState.sended).toBeTruthy();
	});

	it('should return RECOVER_PASSWORD_ERROR state with new state', () => {
		const resultState = recoverPasswordReducer(initialState, {
			type: RECOVER_PASSWORD_ERROR,
			payload: {
				sended: false,
			},
		});

		expect(resultState.sended).toBeFalsy();
	});
});
