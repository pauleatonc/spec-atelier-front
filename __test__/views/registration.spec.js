/* eslint-disable no-undef */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Registration, { handleSubmit } from '../../src/views/auth/registration';

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Registration View', () => {
	let RegistrationView;

	beforeEach(() => {
		const store = mockStore({
			isLogin: false,
			userData: {},
			error: '',
		});

		RegistrationView = mount(
			<Provider store={store}>
				<Registration />
			</Provider>,
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should show registration view', () => {
		expect(RegistrationView.find('h1').text()).toBe('Crear un nuevo usuario');
		expect(RegistrationView.find('input')).toHaveLength(2);
		expect(RegistrationView.find('button')).toHaveLength(1);
	});

	it('should be default value the email input', () => {
		expect(RegistrationView.find("input[type='email']").props().value).toBe('');
	});

	it('should change the email input', () => {
		RegistrationView.find("input[type='email']").simulate('change', {
			target: { value: 'front@specatelier.com' },
		});

		expect(RegistrationView.find("input[type='email']").props().value).toBe(
			'front@specatelier.com',
		);
	});

	it('should be default value the password input', () => {
		expect(RegistrationView.find("input[type='password']").props().value).toBe(
			'',
		);
	});

	it('should change the password input', () => {
		RegistrationView.find("input[type='password']").simulate('change', {
			target: { value: 'password' },
		});

		expect(RegistrationView.find("input[type='password']").props().value).toBe(
			'password',
		);
	});

	it('should handlesubmit function', () => {
		const email = 'email';
		const password = 'password';
		const functionMock = jest.fn();

		RegistrationView.find('button').prop('onClick')(
			handleSubmit(email, password, functionMock),
		);

		RegistrationView.find('button').simulate('click');

		expect(functionMock).toBeCalledWith({ user: { email, password } });
	});
});
