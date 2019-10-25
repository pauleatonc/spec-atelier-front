/* eslint-disable no-undef */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Login, { handleSubmit } from '../../src/views/auth/login';

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

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should show login view', () => {
		expect(loginView.find('h1').text()).toBe('Login');
		expect(loginView.find('input')).toHaveLength(2);
		expect(loginView.find('button')).toHaveLength(1);
	});

	it('should be default value the email input', () => {
		expect(loginView.find("input[type='email']").props().value).toBe('');
	});

	it('should change the email input', () => {
		loginView
			.find("input[type='email']")
			.simulate('change', { target: { value: 'test@specatelier.com' } });

		expect(loginView.find("input[type='email']").props().value).toBe(
			'test@specatelier.com',
		);
	});

	it('should be default value the password input', () => {
		expect(loginView.find("input[type='password']").props().value).toBe('');
	});

	it('should change the password input', () => {
		loginView
			.find("input[type='password']")
			.simulate('change', { target: { value: 'password' } });

		expect(loginView.find("input[type='password']").props().value).toBe(
			'password',
		);
	});

	it('should handlesubmit function', () => {
		const email = 'email';
		const password = 'password';
		const functionMock = jest.fn();

		loginView.find('button').prop('onClick')(
			handleSubmit(email, password, functionMock),
		);

		loginView.find('button').simulate('click');

		expect(functionMock).toBeCalledWith({ user: { email, password } });
	});
});
