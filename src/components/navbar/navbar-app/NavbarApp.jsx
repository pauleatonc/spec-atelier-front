import React from 'react';
import ItemsNavBar from './Components/ItemsNavBar';
import {
  NavbarContainer,
  NavbarContent,
  LogoContent,
  ImgLogo,
} from './NavbarApp.styles';

const NavbarApp = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoContent to="/" data-view="home">
          <ImgLogo />
        </LogoContent>
        <ItemsNavBar />
      </NavbarContent>
    </NavbarContainer>
  );
};

export default NavbarApp;
