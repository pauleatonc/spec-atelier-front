import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import ButtonGoogleLogin from '../../../components/buttons/ButtonGoogle';

import {
	Container,
	HeaderText,
	RegisterLink,
	RegisterText,
	LoginTitle,
	ButtonGoogleContainer,
	TextInfo,
} from '../Auth.styles';
import { TextInput, Button } from '../../../components/SpecComponents';
import { loginAction, accepthNotificationsAC, rejectNotifications } from '../auth.actions';
import {
	deleteLocalStorage,
} from '../../../helpers/localstorage.helper';
import { useParams } from 'react-router';

const Login = () => {
	const { state } = useLocation();
	const [user, setUser] = useState({ password: '', email: state?.email || '' });
	const dispatch = useDispatch();
	const { action , id } = useParams();
	console.log(id);
	const handleSubmit = () => {
		deleteLocalStorage('responseStatus');
		dispatch(loginAction({ user }));
		if(id === undefined){
			console.log("indefinida");
		}else{
			const data = {
				projectId: id,
				notifiId: id
			};
			if(action === 'accept_invitation'){
				dispatch(accepthNotificationsAC(data));
			}
			if(action === 'reject_invitation'){
				dispatch(rejectNotifications(data));
			}
		}
	} 
	const onChangeUser = ({ target: { name, value } }) =>
		setUser({ ...user, [name]: value });

	return (
		<Container>
			<HeaderText>
				<RegisterText>¿Aún no eres usuario?</RegisterText>
				<RegisterLink
					to={{
						pathname: '/registration',
						state: { email: user.email },
					}}
					data-view="registration"
				>
					Regístrate ahora
				</RegisterLink>
			</HeaderText>

			<LoginTitle>Inicia sesión</LoginTitle>

			<ButtonGoogleContainer>
				<ButtonGoogleLogin label="Iniciar con Google" />
			</ButtonGoogleContainer>

			<TextInfo size={14}>O si prefieres inicia con tu cuenta Spec</TextInfo>
			<form autoComplete="on">
				<TextInput
					type="email"
					name="email"
					value={user.email}
					onChange={onChangeUser}
					placeholder="Correo electrónico"
					required
				/>
				<TextInput
					type="password"
					name="password"
					value={user.password}
					onChange={onChangeUser}
					placeholder="Contraseña"
					required
				/>
				<TextInfo size={12}>
					<RegisterText>¿Se te olvidó la contraseña?</RegisterText>
					<RegisterLink
						to={{
							pathname: '/recover_password',
							state: { email: user.email },
						}}
						data-view="recover_password"
					>
						Recuperar Contraseña
					</RegisterLink>
				</TextInfo>
				<Button
					variant="secondary"
					onClick={handleSubmit}
					width="164px"
					disabled={!user.password || !user.email}
				>
					Iniciar sesión
				</Button>
			</form>
		</Container>
	);
};

export default Login;
