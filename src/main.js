/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Presenter from './presenter';
import store from './store';
import './assets/styles/main.scss';

const Main = () => (
	<Provider store={store}>
		<Router>
			<Presenter />
		</Router>
	</Provider>
);

ReactDOM.render(<Main />, document.querySelector('#specAtelier'));
