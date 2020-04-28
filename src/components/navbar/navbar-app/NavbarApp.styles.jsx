import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  NAVBAR_HEIGHT,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_PRIMARY,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
} from '../../../config/constants/styled-vars';

import LOGO from '../../../assets/images/logo-spec.png';
import LOGO_SMALL from '../../../assets/images/logo_footer.png';

export const NavbarContainer = styled.nav`
  top: 0;
  left: 0;
  align-items: center;
  background-color: ${({ transparent }) => transparent ? 'transparent' : COLOR_WHITE};
  display: flex;
  font-family: 'Lato', sans-serif;
  height: ${NAVBAR_HEIGHT};
  width: 100%;
  transition: all .2s ease-in-out;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
  color: ${({ transparent }) => transparent ? COLOR_BLACK : COLOR_WHITE};
`;

export const NavbarContent = styled.div`
  align-items: flex-end;
  color: ${COLOR_BLACK};
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

export const ItemsContainer = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
  ${MEDIA_QUERY_MEDIUM} {
    display: none;
  }
`;

export const Item = styled.div`
  color: ${({ active }) => active ? COLOR_PRIMARY : COLOR_BLACK};
  height: 100%;
  margin: 0 4px;
  display: flex;
  min-width: 100px;
  align-items: center;
  jutify-content: flex-end;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export const ItemText = styled.span`
  height: 18px;
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const UnderLine = styled.span`
  width: 100%;
  height: 3px;
  margin: 8px 2px 4px 2px;
  border-radius: 1.5px;
  background-color: ${({ active }) => active && COLOR_PRIMARY};
`;

