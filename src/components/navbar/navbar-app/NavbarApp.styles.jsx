import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  NAVBAR_HEIGHT,
  MINE_SHAFT,
  WHITE,
  MEDIA_QUERY_SMALL,
  Z_INDEX_NAVBAR,
  BLACK,
} from '../../../config/constants/styled-vars';

import LOGO from '../../../assets/images/logo-spec.png';
import LOGO_SMALL from '../../../assets/images/logo-icon.png';

export const NavbarContainer = styled.nav`
  top: 0;
  left: 0;
  align-items: center;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : WHITE};
  display: flex;
  height: ${NAVBAR_HEIGHT};
  width: 100%;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px 0 rgba(${BLACK}, 0.26);
  color: ${({ transparent }) => (transparent ? MINE_SHAFT : WHITE)};
  z-index: ${Z_INDEX_NAVBAR};
`;

export const NavbarContent = styled.div`
  align-items: flex-end;
  color: ${MINE_SHAFT};
  display: flex;
  padding: 4px 20px 4px 36px;
  height: 100%;
  flex: 1;
  justify-content: space-between;
`;

export const LogoContent = styled(Link)`
  align-items: center;
  justify-content: flex-end;
  display: flex;
  height: 100%;
`;

export const ImgLogo = styled.div`
  border: 0;
  width: 150px;
  height: 30px;
  background-repeat: no-repeat;
  background-image: url('${LOGO}');
  ${MEDIA_QUERY_SMALL} {
    background-image: url('${LOGO_SMALL}');
  }
`;
