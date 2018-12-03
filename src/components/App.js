import React, { Component } from 'react';
import AppHeader from './AppHeader';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Tabs from './Tabs';
import MenuGrid from './MenuGrid';
import Modal from './Modal';
import menuData from '../data/menu.json';

import logo from '../img/logo.svg';

const INITIAL_STATE = {
  isModalOpen: false,
};

class App extends Component {
  state = INITIAL_STATE;

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <React.Fragment>
        <AppHeader
          userName="Petr Ivanov"
          logoSrc={logo}
          avatarSrc="https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg"
        />
        <Tabs>
          <SignInForm />
          <SignUpForm />
        </Tabs>
        <MenuGrid items={menuData} />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={this.closeModal} />}
      </React.Fragment>
    );
  }
}

export default App;
