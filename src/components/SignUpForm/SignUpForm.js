import React, { Component } from 'react';

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  name = 'Sign Up';

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, phone, password } = this.state;
    console.log(`name = ${name}, 
    email = ${email}, 
    phone = ${phone},
    password = ${password},
    `);
    this.setState({ email: '', password: '' });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, phone, password, confirmPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange}
          placeholder="E-mail"
        />
        <input
          name="phone"
          type="tel"
          value={phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={this.handleChange}
          placeholder="Password again"
        />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default SignUpForm;
