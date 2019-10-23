/* eslint-disable no-undef */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Login from '../../src/views/auth/login';

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Login View', () => {
	let loginView;

	beforeEach(() => {
		const store = mockStore({
			isLogin: false,
			userData: {},
			error: '',
		});

		loginView = mount(
			<Provider store={store}>
				<Login />
			</Provider>,
		);
	});

	it('should show login view', () => {
		expect(loginView.find('h1').text()).toBe('Login');
		expect(loginView.find('input')).toHaveLength(2);
		expect(loginView.find('button')).toHaveLength(1);
	});
});
