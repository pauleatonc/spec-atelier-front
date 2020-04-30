import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './config/store/store';
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
import Colaborations from './views/Colaborations';
import './assets/styles/main.scss';

import PublicRoute from './containers/routes/PublicRoute';
import PrivateRoute from './containers/routes/PrivateRoute';

const Main = () => (
  <Provider store={store}>
    {/* TODO: Add App Loading component */}
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <PublicRoute exact component={Home} path="/" />
          <PublicRoute exact restricted component={Login} path="/login" />
          <PublicRoute exact restricted component={Registration} path="/registration" />
          <PublicRoute exact restricted component={RecoverPassword} path="/recover_password" />
          <PublicRoute exact restricted component={NewPassword} path="/new_password" />
          <PublicRoute exact component={Products} path="/products" />
          <PublicRoute exact component={Brands} path="/brands" />
          <PublicRoute exact component={Us} path="/us" />
          <PublicRoute exact component={Colaborations} path="/colaborations" />
          <PrivateRoute exact component={Projects} path="/projects" />
          <PrivateRoute exact component={Profile} path="/profile" />
          <PrivateRoute exact component={Specification} path="/projects/:id/specification" />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Main />, document.querySelector('#specAtelier'));
