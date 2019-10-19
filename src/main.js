/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from 'Components/routes';
import store from './store';

const Main = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
);

ReactDOM.render(<Main />, document.querySelector('#specAtelier'));
