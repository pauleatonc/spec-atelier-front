import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../../containers/auth/login/Login.container';
import {
  Container,
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
    <Container >
      <SectionLeft>
        <Image>
          <Link to="/" data-view="home" >
            <Logo />
          </Link>
        </Image>
      </SectionLeft>
      <SectionRight>
        <LoginContainer />
      </SectionRight>
      <Alert />
    </Container>
  );
};

export default Login;
