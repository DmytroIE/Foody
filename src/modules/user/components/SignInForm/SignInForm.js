import React, { Component } from 'react';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
  };

  name = 'Sign In';

  handleSubmit = evt => {
    evt.preventDefault();
    // const { email, password } = this.state;
    // console.log(`email = ${email}, password = ${password}`);
    this.setState({ email: '', password: '' });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange}
          placeholder="E-mail"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default SignInForm;
