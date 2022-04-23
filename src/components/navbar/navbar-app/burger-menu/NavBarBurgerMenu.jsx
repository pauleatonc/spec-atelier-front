import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Separator } from 'components/navbar/navbar-profile/NavProfile.styles';
import { BurgerMenuContent, Item, ItemText } from './BurgerMenu.styles';

export const NavBarBurgerMenu = ({ open, items }) => {
  const location = useLocation();
  const history = useHistory();
  const [, currentLocation] = location?.pathname.split('/');
  const goTo = (url) => () => history.push(url);

  return (
    <BurgerMenuContent open={open}>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <Item active={item.id === currentLocation} onClick={goTo(item.to)}>
            <ItemText>{item.label}</ItemText>
          </Item>
          <Separator />
        </React.Fragment>
      ))}
    </BurgerMenuContent>
  );
};
