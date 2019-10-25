/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import RecoverPassword, {
	handleRecoverPassword,
} from '../../src/views/auth/recover_password';

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Recovery Password View', () => {
	let RecoveryPasswordView;

	beforeEach(() => {
		const store = mockStore({
			sended: false,
		});

		const props = {
			recoverPasswordMethod: jest.fn(),
		};

		RecoveryPasswordView = mount(
			<Provider store={store}>
				<RecoverPassword {...props} />
			</Provider>,
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should show recovery password view', () => {
		expect(RecoveryPasswordView.find('h1').text()).toBe(
			'Olvidaste tu contraseña?',
		);
		expect(RecoveryPasswordView.find('input')).toHaveLength(1);
		expect(RecoveryPasswordView.find('button')).toHaveLength(1);
	});

	it('should be default value the email input', () => {
		expect(RecoveryPasswordView.find("input[name='email']").props().value).toBe(
			'',
		);
	});

	it('should change the email input', () => {
		RecoveryPasswordView.find("input[name='email']").simulate('change', {
			target: { value: 'front@specatelier.com' },
		});

		expect(RecoveryPasswordView.find("input[name='email']").props().value).toBe(
			'front@specatelier.com',
		);
	});

	it('should handleResetPassword function with same password value', () => {
		const email = 'front@specatelier.com';
		const functionMock = jest.fn();

		RecoveryPasswordView.find('button').prop('onClick')(
			handleRecoverPassword(email, functionMock),
		);

		RecoveryPasswordView.find('button').simulate('click');

		expect(functionMock).toBeCalledWith(email);
	});
});
