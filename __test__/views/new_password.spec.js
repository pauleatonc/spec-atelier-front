/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import NewPassword, {
	handleGetTokenFromUrl,
	handleResetPassword,
} from '../../src/views/auth/new_password';

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('New Password View', () => {
	let NewPasswordView;

	beforeEach(() => {
		const store = mockStore({
			status: false,
		});

		const props = {
			functionFaker: jest.fn(),
			location: {
				search: `?token=123456`,
			},
		};

		NewPasswordView = mount(
			<Provider store={store}>
				<NewPassword {...props} />
			</Provider>,
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should show new password view', () => {
		expect(NewPasswordView.find('h1').text()).toBe('Crear nueva contraseña');
		expect(NewPasswordView.find('input')).toHaveLength(2);
		expect(NewPasswordView.find('span')).toHaveLength(1);
		expect(NewPasswordView.find('button')).toHaveLength(1);
	});

	xit('should be default value the password input', () => {
		expect(NewPasswordView.find("input[name='password']").props().value).toBe(
			'',
		);
	});

	xit('should change the password input', () => {
		NewPasswordView.find("input[name='password']").simulate('change', {
			target: { value: 'new password' },
		});

		expect(NewPasswordView.find("input[name='password']").props().value).toBe(
			'new password',
		);
	});

	xit('should be default value the repeatPassword input', () => {
		expect(
			NewPasswordView.find("input[name='repeatPassword']").props().value,
		).toBe('');
	});

	xit('should change the repeatPassword input', () => {
		NewPasswordView.find("input[name='repeatPassword']").simulate('change', {
			target: { value: 'repeat new password' },
		});

		expect(
			NewPasswordView.find("input[name='repeatPassword']").props().value,
		).toBe('repeat new password');
	});

	xit('should handleResetPassword function', () => {
		const password = 'password';
		const repeatPassword = 'repeatPassword';
		const token = '123456';
		const functionMock = jest.fn();

		NewPasswordView.find('button').prop('onClick')(
			handleResetPassword(password, repeatPassword, token, functionMock),
		);

		NewPasswordView.find('button').simulate('click');

		expect(functionMock).toBeCalledWith({ token, password });
	});
});
