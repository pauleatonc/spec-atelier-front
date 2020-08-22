import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './config/store/store';
import Home from './views/Home';
import Login from './views/auth/Login';
import Registration from './views/auth/Registration';
import RecoverPassword from './views/auth/RecoverPassword';
import NewPassword from './views/auth/NewPassword';
import Products from './views/Products';
import Projects from './views/Projects';
import Project from './views/Project';
import Profile from './views/Profile';
import Us from './views/Us';
import Specification from './views/Specification';
import Collaborators from './views/Collaborators';
import Collaborator from './views/Collaborator';
import './assets/styles/main.scss';

import PublicRoute from './containers/routes/PublicRoute';
import PrivateRoute from './containers/routes/PrivateRoute';

const Main = () => {
  return (
    <Provider store={store}>
      {/* TODO: Add App Loading component */}
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <PublicRoute exact restricted component={Home} path="/" />
            <PublicRoute exact restricted component={Login} path="/login" />
            <PublicRoute exact restricted component={Registration} path="/registration" />
            <PublicRoute exact restricted component={RecoverPassword} path="/recover_password" />
            <PublicRoute exact restricted component={NewPassword} path="/new_password/:token" />
            <PublicRoute exact component={Products} path="/products" />
            <PublicRoute exact component={Us} path="/us" />
            <PublicRoute exact component={Collaborators} path="/collaborators" />
            <PublicRoute exact component={Collaborator} path="/collaborators/:id" />
            <PrivateRoute exact component={Projects} path="/projects" />
            <PrivateRoute exact component={Project} path="/projects/project" />
            <PrivateRoute exact component={Profile} path="/profile" />
            <PrivateRoute exact component={Specification} path="/specs/:id" />
            <Redirect to="/projects" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<Main />, document.querySelector('#specAtelier'));
