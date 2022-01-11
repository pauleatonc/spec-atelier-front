import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import NavProfile from '../../../navbar-profile/NavProfile';
import NavNotification from '../../../navbar-notifications/NavNotification';

import { ItemsContainer, Item, ItemText, UnderLine } from './styles';

const items = [
	{ id: 'projects', label: 'Proyectos', to: '/projects' },
	{ id: 'products', label: 'Productos', to: '/products' },
	{ id: 'collaborators', label: 'Empresas', to: '/collaborators' },
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
			<NavProfile />
		</>
	);
};

export default ItemsNavBar;
