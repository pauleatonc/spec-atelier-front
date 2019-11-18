const getPortalView = () => {
	const { pathname } = window.location;

	switch (pathname) {
		case '/login':
			return 'login';
		case '/registration':
			return 'login';
		case '/recover_password':
			return 'login';
		case '/new_password':
			return 'login';
		default:
			return 'app';
	}
};

export default getPortalView;
