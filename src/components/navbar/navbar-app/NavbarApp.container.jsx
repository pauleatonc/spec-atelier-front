import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LOGO from '../../../assets/images/logo-spec.png';
import LOGO_MOBILE from '../../../assets/images/logo_footer.png';
import { selectItem } from './NavbarApp.actions';
import NavProfile from '../navbar-profile/NavProfile.container';

import {
  NavbarContainer,
  NavbarContent,
  LogoContent,
  ImgLogo,
  ItemsContainer,
  Item,
  ItemText,
  UnderLine,
} from './NavbarApp.styles';

const NavbarApp = () => {
  const location = useLocation();
  const history = useHistory();
  const [, currentLocation] = location?.pathname.split('/');
  const { items } = useSelector(state => state.navbarApp);

  const goTo = url => () => history.push(url);

  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoContent to="/projects" data-view="home">
          <ImgLogo />
        </LogoContent>
        <ItemsContainer>
          {items.map(item => (
            <React.Fragment key={item.id}>
              <Item
                active={item.id === currentLocation}
                onClick={goTo(item.to)}
              >
                <ItemText>{item.label}</ItemText>
                <UnderLine active={item.id === currentLocation} />
              </Item>
            </React.Fragment>
          ))}
        </ItemsContainer>
        <NavProfile />
      </NavbarContent>
    </NavbarContainer >
  );
};

export default NavbarApp;
