const removeClassToAllItems = (items, classToRemove) => {
	items.forEach(item => {
		item.classList.remove(classToRemove);
	});
};

const mapPathnameToUrl = {
	'/products': 'products',
	'/clients': 'clients',
	'/projects': 'projects',
};

const removeClassAndAddCurrentToThisView = () => {
	const { pathname } = window.location;

	setTimeout(() => {
		const links = document.querySelectorAll(
			'.navbar .navbar__inner__section__item__link',
		);

		removeClassToAllItems(links, 'current');
		links.forEach(link => {
			if (link.dataset.view === mapPathnameToUrl[pathname]) {
				link.classList.add('current');
			}
		});
	}, 5);
};

export default removeClassAndAddCurrentToThisView;
