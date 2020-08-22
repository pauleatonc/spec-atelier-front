import React from 'react';

import { Link } from 'react-router-dom';
import RecoverPasswordContainer from '../../containers/auth/recover-password/RecoverPassword.container';
import {
  Container,
  SectionLeft,
  SectionRight,
  Image,
  Logo,
} from './Auth.styles';
/**
 * The Recovery Password view.
 */
const RecoverPassword = () => {
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
        <RecoverPasswordContainer />
      </SectionRight>
    </Container>
  );
};

export default RecoverPassword;
