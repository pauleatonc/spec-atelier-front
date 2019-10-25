/* eslint-disable no-undef */
import { NEW_PASSWORD, NEW_PASSWORD_ERROR } from '../../src/config/constants';
import { newPasswordReducer } from '../../src/reducers';
import { initialState } from '../../src/reducers/new_password.reducer';

describe('New Password Reducer', () => {
	it('should return default state', () => {
		const resultState = newPasswordReducer(initialState, {
			type: 'NEW_PASSWORD_YEAH',
		});
		expect(resultState).toEqual(initialState);
	});

	it('should return NEW_PASSWORD state with new state', () => {
		const resultState = newPasswordReducer(initialState, {
			type: NEW_PASSWORD,
			payload: {
				status: true,
			},
		});

		expect(resultState.status).toBeTruthy();
	});

	it('should return NEW_PASSWORD_ERROR state with new state', () => {
		const resultState = newPasswordReducer(initialState, {
			type: NEW_PASSWORD_ERROR,
			payload: {
				status: false,
			},
		});

		expect(resultState.status).toBeFalsy();
	});
});
