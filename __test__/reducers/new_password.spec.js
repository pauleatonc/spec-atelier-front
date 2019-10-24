/* eslint-disable no-undef */
import { NEW_PASSWORD, NEW_PASSWORD_ERROR } from '../../src/config/constants';
import { newPasswordReducer } from '../../src/reducers';

describe('New Password Reducer', () => {
	let state;

	beforeEach(() => {
		state = {
			status: false,
		};
	});

	it('should return default state', () => {
		const resultState = newPasswordReducer(state, {
			type: 'NEW_PASSWORD_YEAH',
		});
		expect(resultState).toEqual(state);
	});

	it('should return NEW_PASSWORD state with new state', () => {
		const resultState = newPasswordReducer(state, {
			type: NEW_PASSWORD,
			payload: {
				status: true,
			},
		});

		expect(resultState.status).toBeTruthy();
	});

	it('should return NEW_PASSWORD_ERROR state with new state', () => {
		const resultState = newPasswordReducer(state, {
			type: NEW_PASSWORD_ERROR,
			payload: {
				status: false,
			},
		});

		expect(resultState.status).toBeFalsy();
	});
});
