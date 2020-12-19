import React from 'react';
import { Link } from 'react-router-dom';
import RegisterContainer from '../../containers/auth/register/Register.container';

import {
  Content,
  Container,
  SectionLeft,
  SectionRight,
  Image,
  Logo,
} from './Auth.styles';
import Alert from '../../containers/alert/Alert.container';

const Registration = () => {
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
          <RegisterContainer />
        </Content>
      </SectionRight>
      <Alert />
    </Container>
  );
};


export default Registration;
