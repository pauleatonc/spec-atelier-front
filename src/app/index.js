import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

export default class App extends Component {

  state = {
    loggedInStatus: 'not_logeed',
    user: {}
  }

  handleLogin = data => {
    this.setState({
      loggedInStatus: 'logged_in',
      user: data.user
    })
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} render={ props => (
              <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
            )}>
            </Route>
            <Route exact path={'/dashboard'} component={Dashboard}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
