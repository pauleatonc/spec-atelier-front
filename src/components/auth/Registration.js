import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {

  state = {
    email: '',
    password: '',
    registrationErrors: null
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post(process.env.API_URL + '/registrations',
     { user: { email: email, password: password} },
     { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created'){
        this.props.handleSuccessfullAuth(response.data)
      }
    }).catch(error => {
      this.setState({ registrationErrors: error })
    })
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.registrationErrors}
          <input type="email" name='email' value={this.state.email} onChange={this.handleChange} required/>
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange} required/>
          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}