import styled from 'styled-components';
import {
  NAVBAR_HEIGHT,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_PRIMARY,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
  Z_INDEX_NAVBAR,
  COLOR_GREY,
} from '../../../config/constants/styled-vars';

import LOGO from '../../../assets/images/logo.png';
import LOGO_MOBILE from '../../../assets/images/full_logo.png';

export const NavbarContainer = styled.nav`
  top: 0;
  left: 0;
  align-items: center;
  background-color: ${({ transparent }) => transparent ? 'transparent' : COLOR_WHITE};
  display: flex;
  font-family: 'Lato', sans-serif;
  height: ${NAVBAR_HEIGHT};
  position: ${({ fixed }) => fixed && 'fixed'};
  width: 100%;
  transition: all .2s ease-in-out;
  color: ${({ transparent }) => transparent ? COLOR_BLACK : COLOR_WHITE};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
  z-index: ${Z_INDEX_NAVBAR};
`;

export const NavbarContent = styled.div`
  align-items: center;
  color: ${COLOR_BLACK};
  display: flex;
  padding-left: 45px;
  padding-right: 20px;
  height: 100%;
  flex: 1;
`;

export const LogoContent = styled.section`
  align-items: center;
  display: flex;
`;

export const ImgLogo = styled.div`
  border: 0;
  width: 150px;
  height: 30px;
  background-repeat: no-repeat;
  background-image: ${({ transparent }) => `url('${transparent ? LOGO : LOGO_MOBILE}')`};
`;

export const ItemsContainer = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
  ${MEDIA_QUERY_MEDIUM} {
    display: none;
  }
`;

export const Item = styled.div`
  color: ${({ transparent, active }) => {
    if (active) return COLOR_PRIMARY;
    if (transparent) return COLOR_WHITE;
    return COLOR_BLACK;
  }};
  height: 40px;
  margin: 4px 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
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

export const LinksContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

export const LinkItem = styled.div`
  align-items: center;
  color: ${COLOR_WHITE};
  display: flex;
  font-size: 16px;
  justify-content: center;
  margin: 8px 0px;
  padding: 4px 8px;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  outline: none;
  padding: 8px 16px;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export const LinkRegister = styled(LinkItem)`
  border-radius: 20px;
  background-color: ${COLOR_PRIMARY};
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${COLOR_WHITE};
  width: 120px;
`;

export const LinkLogin = styled(LinkItem)`
  margin-left: 16px;
  border-radius: 20px;
  border: 1px solid ${({ transparentize }) => transparentize ? COLOR_WHITE : COLOR_GREY};
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  background-color: ${({ transparentize }) => transparentize ? 'transparent' : COLOR_WHITE};
  color: ${({ transparentize }) => transparentize ? COLOR_WHITE : COLOR_GREY};
`;
