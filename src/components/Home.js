import React, { Component } from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';

export default class Home extends Component {

  handleSuccessfullAuth = data => {
    this.props.handleLogin(data);
    console.log('hola dashboard');
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfullAuth={this.handleSuccessfullAuth}/>
        <Login handleSuccessfullAuth={this.handleSuccessfullAuth}/>
      </div>
    )
  }
}