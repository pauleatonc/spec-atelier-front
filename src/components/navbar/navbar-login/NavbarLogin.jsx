import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import NavProfile from '../navbar-profile/NavProfile';

import {
  NavbarContainer,
  NavbarContent,
  LogoContent,
  ImgLogo,
  ItemsContainer,
  Item,
  ItemText,
  LinksContainer,
  LinkRegister,
  LinkLogin,
} from './NavbarLogin.styles';

const items = [
  { id: 'us', label: 'Nosotros', to: '/us' },
  { id: 'products', label: 'Productos', to: '/products' },
  { id: 'brands', label: 'Marcas', to: '/brands' },
];

const NavBarLogin = ({ fixed }) => {
  const location = useLocation();
  const [isTransparent, setTransparent] = useState(true);
  const { isLogin } = useSelector(state => state.auth);
  const currentLocation = location?.pathname.split('/')[1];

  const onScroll = useCallback(() => {
    if (!fixed) return;
    setTransparent(!(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50));
  });

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparentize = isTransparent && fixed;
  return (
    <NavbarContainer transparent={transparentize} fixed={fixed}>
      <NavbarContent>
        <LogoContent>
          <Link to="/" data-view="home">
            <ImgLogo
              transparent={transparentize}
              alt="Logotipo de SpecAtelier"
            />
          </Link>
        </LogoContent>
        <ItemsContainer>
          {items.map(item => (
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
          {!isLogin
            ? (
              <LinksContainer>
                <Link
                  to="/registration"
                  data-view="registration"
                  style={{ textDecoration: 'none' }}
                >
                  <LinkRegister>
                    Regístrate
                  </LinkRegister>
                </Link>
                <Link
                  to="/login"
                  data-view="login"
                  style={{ textDecoration: 'none' }}
                >
                  <LinkLogin
                    transparentize={transparentize}
                  >
                    <i className="fas fa-user-circle" />
                    &nbsp;&nbsp;Iniciar sesión
                  </LinkLogin>
                </Link>
              </LinksContainer>
            ) : (
              <NavProfile />
            )}
        </ItemsContainer>
      </NavbarContent>
    </NavbarContainer >
  );
};

export default NavBarLogin;
