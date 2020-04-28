import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectItem } from './NavbarLogin.actions';
import NavProfile from '../navbar-profile/NavProfile.container';

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

const NavBarLogin = ({ fixed }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isTransparent, setTransparent] = useState(true);
  const { items = [], selectedItem = {} } = useSelector(state => state.navbarLogin);
  const  { isLogin } = useSelector(state => state.auth);
  const currentLocation = location?.pathname.split('/')[1];

  const onClickItem = item => () => dispatch(selectItem(item));
  const onScroll = () => {
    if (!fixed) return;
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };
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
                onClick={onClickItem(item)}
                onKeyPress={onClickItem(item)}
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
