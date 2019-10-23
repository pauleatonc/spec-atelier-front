/* eslint-disable no-undef */
import getEndPoint from '../../src/config/config';

describe('Get Entry Pont config', () => {
	it('should get url with path in url', () => {
		const path = 'new_path';
		expect(getEndPoint(path)).toBe('http://localhost:8882/api/new_path');
	});

	it('should get url without path in url', () => {
		expect(getEndPoint()).toBe('http://localhost:8882/api/');
	});
});
