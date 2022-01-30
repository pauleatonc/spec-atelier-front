import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import NavProfile from '../../../navbar-profile/NavProfile';
import NavNotification from '../../../navbar-notifications/NavNotification';
import { BurgerMenu } from '../../burger-menu/BurgerMenu';
import { ItemsContainer, Item, ItemText, UnderLine, ProfileBurgerMenuContent } from './styles';

const items = [
  { id: 'projects', label: 'Proyectos', to: '/projects' },
  { id: 'products', label: 'Productos', to: '/products' },
  { id: 'collaborators', label: 'Empresas', to: '/collaborators' },
  { id: 'business_plan', label: 'Plan empresarial', to: '/business_plan' },
];

const ItemsNavBar = () => {
  const location = useLocation();
  const history = useHistory();
  const [, currentLocation] = location?.pathname.split('/');
  const goTo = (url) => () => history.push(url);

  return (
    <>
      <ItemsContainer>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <Item active={item.id === currentLocation} onClick={goTo(item.to)}>
              <ItemText>{item.label}</ItemText>
              <UnderLine active={item.id === currentLocation} />
            </Item>
          </React.Fragment>
        ))}
      </ItemsContainer>
      <NavNotification />
      <ProfileBurgerMenuContent>
        <NavProfile />
        <BurgerMenu items={items} />
      </ProfileBurgerMenuContent>
    </>
  );
};

export default ItemsNavBar;
