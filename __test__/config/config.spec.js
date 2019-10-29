/* eslint-disable no-undef */
import getEndPoint from '../../src/config/config';

describe('Get Entry Point config', () => {
	it('should get url without params', () => {
		expect(getEndPoint({ path: '', service: '' })).toBe(
			'http://localhost:8882/api/',
		);
	});

	it('should get url with only path param - api value', () => {
		expect(getEndPoint({ path: 'api' })).toBe('http://localhost:8882/api/');
	});

	it('should get url with only path param - googleOauth value', () => {
		expect(getEndPoint({ path: 'googleOauth' })).toBe(
			'http://localhost:8882/auth/',
		);
	});

	it('should get url with only path service - other_service value', () => {
		expect(getEndPoint({ service: 'other_service' })).toBe(
			'http://localhost:8882/api/other_service',
		);
	});

	it('should get url with new service and api in path param', () => {
		expect(getEndPoint({ path: 'api', service: 'new_service' })).toBe(
			'http://localhost:8882/api/new_service',
		);
	});

	it('should get url with new service and googleOauth in path', () => {
		expect(getEndPoint({ path: 'googleOauth', service: 'new_service' })).toBe(
			'http://localhost:8882/auth/new_service',
		);
	});
});
