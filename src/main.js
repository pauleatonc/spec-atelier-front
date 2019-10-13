/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from 'Views/home';
import store from './store';

const Main = () => (
	<Provider store={store}>
		<Home />
	</Provider>
);

ReactDOM.render(<Main />, document.querySelector('#specAtelier'));
