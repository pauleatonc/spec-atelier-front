/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'Views/home';

const Main = () => {
	return <Home />;
};

ReactDOM.render(<Main />, document.querySelector('#specAtelier'));
