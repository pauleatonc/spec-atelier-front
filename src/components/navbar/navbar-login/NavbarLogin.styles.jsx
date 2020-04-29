import styled from 'styled-components';
import {
  NAVBAR_HEIGHT,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_PRIMARY,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
  Z_INDEX_NAVBAR,
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
`;

export const LinkLogin = styled(LinkItem)`
  margin-left: 16px;
  border-radius: 20px;
  border: 1px solid ${({ transparentize }) => transparentize ? COLOR_WHITE : COLOR_BLACK};
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  background-color: ${({ transparentize }) => transparentize ? 'transparent' : COLOR_WHITE};
  color: ${({ transparentize }) => transparentize ? COLOR_WHITE : COLOR_BLACK};
`;

//   &.scrolling {
//     background-color: $secondary-color;
//     z-index: 999;
//   }

//   &__inner {
//     align-items: center;
//     color: $black-color;
//     display: flex;
//     height: $total-parent;
//     justify-content: space-between;
//     padding-left: 45px;
//     padding-right: 45px;
//     width: 100%;

//     &__logo-content {
//       align-items: center;
//       display: flex;
//       height: $total-parent;

//       &__image {
//         width: 150px;

//         @media only screen and (max-width: 768px) {
//           display: none;
//         }

//         &__mobile {
//           display: none;

//           @media only screen and (max-width: 768px) {
//             display: block;
//           }
//         }
//       }
//     }

//     &__section {
//       align-items: center;
//       display: flex;
//       height: $total-parent;
//       justify-content: flex-end;
//       width: $width-60;

//       @media only screen and (max-width: 768px) {
//         display: none;
//       }

//       &__item {
//         cursor: pointer;
//         height: $total-parent;

//         &:last-child {
//           min-width: 150px;
//         }

//         &__link {
//           align-items: center;
//           color: $white-color;
//           display: flex;
//           font-size: 16px;
//           font-weight: $navbar-font-weight;
//           line-height: $nabvar-line-height-items;
//           justify-content: center;
//           margin-top: 9px;
//           padding-top: 5px;
//           padding-bottom: 5px;
//           padding-left: 20px;
//           padding-right: 20px;
//           margin-bottom: 9px;
//           position: relative;
//           text-decoration: none;

//           &.current {
//             color: $white-color;
//             background-color: $secondary-color;
//             margin-top: 0;
//             padding-top: 23px;
//             padding-bottom: 23px;
//             margin-bottom: 0;
//           }

//           &.button--registration {
//             border-radius: 20px;
//             background-color: $principal-color;
//           }

//           &.button--login {
//             border-radius: 20px;
//             border: 1px solid $white-color;

//             >i {
//               margin-right: 8px;
//             }
//           }
//         }
//       }

//       &--mobile {
//         display: none;

//         @media only screen and (max-width: 768px) {
//           display: block;
//         }

//         &__button {
//           &__icon {
//             color: white;
//             font-size: 24px;
//           }
//         }
//       }
//     }
//   }
// }