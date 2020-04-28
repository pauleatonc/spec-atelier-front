import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../containers/auth/login/Login.container';
import {
  Container,
  SectionLeft,
  SectionRight,
  Image,
  Logo,
} from './Registration.styles';
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
    </Container>
  );
};

export default Login;
