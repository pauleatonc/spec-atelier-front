/* eslint-disable no-undef */
import {
	RECOVER_PASSWORD,
	RECOVER_PASSWORD_ERROR,
} from '../../src/config/constants';
import { recoverPasswordReducer } from '../../src/reducers';

describe('Recovery Password Reducer', () => {
	let state;

	beforeEach(() => {
		state = {
			sended: false,
		};
	});

	it('should return default state', () => {
		const resultState = recoverPasswordReducer(state, {
			type: 'RECOVER_PASSWORD_NEW',
		});
		expect(resultState).toEqual(state);
	});

	it('should return RECOVER_PASSWORD state with new state', () => {
		const resultState = recoverPasswordReducer(state, {
			type: RECOVER_PASSWORD,
			payload: {
				sended: true,
			},
		});

		expect(resultState.sended).toBeTruthy();
	});

	it('should return RECOVER_PASSWORD_ERROR state with new state', () => {
		const resultState = recoverPasswordReducer(state, {
			type: RECOVER_PASSWORD_ERROR,
			payload: {
				sended: false,
			},
		});

		expect(resultState.sended).toBeFalsy();
	});
});
