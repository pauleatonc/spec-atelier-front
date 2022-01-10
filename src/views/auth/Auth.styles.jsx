import styled from 'styled-components';
import IMAGE_LOGIN from '../../assets/images/auth/login.png';

import LOGO from '../../assets/images/logo.png';
import FULL_LOGO from '../../assets/images/full_logo.png';

import {
  WHITE,
  MEDIA_QUERY_SMALL,
  MINE_SHAFT,
} from '../../config/constants/styled-vars';

export const Container = styled.section`
  background-color: ${WHITE};
  color: ${MINE_SHAFT};
  font-family: 'Lato', sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const SectionLeft = styled.section`
  height: 100%;
  width: 40%;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const SectionRight = styled.section`
  height: 100%;
  width: 60%;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
    justify-content: flex-start;
  }
  overflow-y: auto;
`;

export const Image = styled.div`
  background: url('${IMAGE_LOGIN}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const Logo = styled.div`
  position: absolute;
  top: 50px;
  left: 60px;
  width: 150px;
  height: 30px;
  background-image: url('${LOGO}');
  background-repeat: no-repeat;
  object-fit: contain;
`;

export const Content = styled.div`
  padding: 60px 120px;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  ${MEDIA_QUERY_SMALL} {
    padding: 60px 60px;
  }
`;
