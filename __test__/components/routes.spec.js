/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../../src/components/routes';
import {
	Home,
	Login,
	NewPassword,
	RecoverPassword,
	Registration,
} from '../../src/views';

Enzyme.configure({ adapter: new Adapter() });

let pathRouteMap = {};
describe('Routes Components', () => {
	beforeAll(() => {
		const component = shallow(<Routes />);

		pathRouteMap = component.find(Route).reduce((pathMap, route) => {
			const routeProps = route.props();
			pathMap[routeProps.path] = routeProps.component;
			return pathMap;
		}, {});
	});

	it("should show Home view for '/' router", () => {
		expect(pathRouteMap['/']).toBe(Home);
	});

	it("should show Login Vier for '/login' router", () => {
		expect(pathRouteMap['/login']).toBe(Login);
	});

	it("should show Registration View for '/registration' router", () => {
		expect(pathRouteMap['/registration']).toBe(Registration);
	});

	it("should show Registration View for '/recover_password' router", () => {
		expect(pathRouteMap['/recover_password']).toBe(RecoverPassword);
	});

	it("should show Registration View for '/new_password' router", () => {
		expect(pathRouteMap['/new_password']).toBe(NewPassword);
	});
});
