/* eslint-disable no-undef */
import handleGetQueryParam from '../../src/helpers/get-query-params.helper';

describe('Get Query Params Helper', () => {
	let param;
	let token;
	let uri;

	beforeAll(() => {
		param = 'token';
		token = '123456789';
		uri = `?token=${token}`;
	});

	it('should get query param', () => {
		expect(handleGetQueryParam({ uri, param })).toBe(token);
	});
});
