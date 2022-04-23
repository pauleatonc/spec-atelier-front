import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MAX_SCREEN_STANDAR_MEDIUM } from 'config/constants/styled-vars';
import LOGO from 'assets/images/logo.png';
import LOGO_MOBILE from 'assets/images/full_logo.png';
import LOGO_SMALL_WHITE from 'assets/images/logo_footer.png';
import LOGO_SMALL_COLOR from 'assets/images/logo-icon.png';
import NavProfile from '../navbar-profile/NavProfile';
import { NavBarLoginRegister } from './NavBarLoginRegister';
import { BurgerMenu } from '../navbar-app/burger-menu/BurgerMenu';
import { NavBarMenuLoginRegisterDropdown } from './NavBarMenuLoginRegisterDropdown';
import {
  NavbarContainer,
  NavbarContent,
  LogoContent,
  ImgLogo,
  ItemsContainer,
  Item,
  ItemText,
  LoginRegisterBurgerMenuContent,
} from './NavbarLogin.styles';

const items = [
  { id: 'products', label: 'Productos', to: '/products' },
  { id: 'collaborators', label: 'Empresas', to: '/collaborators' },
  { id: 'business_plan', label: 'Plan empresarial', to: '/business_plan' },
];

const NavBarLogin = ({ fixed }) => {
  const location = useLocation();
  const [isTransparent, setTransparent] = useState(true);
  const { isLogin } = useSelector((state) => state.auth);
  const currentLocation = location?.pathname.split('/')[1];
  const transparentize = isTransparent && fixed;

  const onScroll = useCallback(() => {
    if (!fixed) return;
    setTransparent(
      !(
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
      ),
    );
  });

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const imgLogo = () => {
    let src;
    if (window.matchMedia(MAX_SCREEN_STANDAR_MEDIUM).matches)
      src = transparentize ? LOGO_SMALL_WHITE : LOGO_SMALL_COLOR;
    else src = transparentize ? LOGO : LOGO_MOBILE;

    return (
      <ImgLogo
        src={src}
        transparent={transparentize}
        alt="Logotipo de SpecAtelier"
      />
    );
  };

  return (
    <NavbarContainer transparent={transparentize} fixed={fixed}>
      <NavbarContent>
        <LogoContent>
          <Link to="/" data-view="home">
            {imgLogo()}
          </Link>
        </LogoContent>
        <ItemsContainer>
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              data-view={item.id}
              style={{ textDecoration: 'none' }}
            >
              <Item
                active={item.id === currentLocation}
                transparent={transparentize}
              >
                <ItemText>{item.label}</ItemText>
              </Item>
            </Link>
          ))}
          {isLogin ? (
            <NavProfile />
          ) : (
            <NavBarLoginRegister transparent={transparentize} />
          )}
        </ItemsContainer>
      </NavbarContent>
      <LoginRegisterBurgerMenuContent>
        <NavBarMenuLoginRegisterDropdown />
        <BurgerMenu items={items} />
      </LoginRegisterBurgerMenuContent>
    </NavbarContainer>
  );
};

export default NavBarLogin;
