import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../../containers/auth/login/Login.container';
import {
  Container,
  Content,
	SectionLeft,
	SectionRight,
	Image,
	Logo,
} from './Auth.styles';
import Alert from '../../containers/alert/Alert.container';

/**
 * The Home's view.
 */
const Login = () => {
	return (
		<Container>
			<SectionLeft>
				<Image>
					<Link to="/" data-view="home">
						<Logo />
					</Link>
				</Image>
			</SectionLeft>
			<SectionRight>
				<Content>
					<LoginContainer />
				</Content>
			</SectionRight>
			<Alert />
		</Container>
	);
};

export default Login;
