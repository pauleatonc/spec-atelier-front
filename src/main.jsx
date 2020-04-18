import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './config/store/store';
import Home from './views/Home';
import Login from './views/Login';
import Registration from './views/Registration';
import RecoverPassword from './views/RecoverPassword';
import NewPassword from './views/NewPassword';
import Products from './views/Products';
import Brands from './views/Brands';
import Projects from './views/Projects';
import Profile from './views/Profile';
import Us from './views/Us';
import Specification from './views/Specification';
import './assets/styles/main.scss';

const Main = () => (
	<Provider store={store}>
		<Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Registration} path="/registration" />
        <Route exact component={RecoverPassword} path="/recover_password" />
        <Route exact component={NewPassword} path="/new_password" />
        <Route exact component={Products} path="/products" />
        <Route exact component={Brands} path="/brands" />
        <Route exact component={Projects} path="/projects" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Us} path="/us" />
        <Route exact component={Specification} path="/projects/:id/specification" />
      </Switch>
		</Router>
	</Provider>
);

ReactDOM.render(<Main />, document.querySelector('#specAtelier'));
