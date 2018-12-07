import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import Tabs from '../Tabs/Tabs';
import MenuPage from '../MenuPage/MenuPage';
import Modal from '../Modal/Modal';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

import styles from './App.module.css';

import logo from '../../img/logo.svg';

const TEST_USERNAME = 'Petr Ivanov';
const TEST_AVATARSRC =
  'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg';

class App extends Component {
  state = {
    isModalOpen: false,
  };

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
          userName={TEST_USERNAME}
          logoSrc={logo}
          avatarSrc={TEST_AVATARSRC}
        />
        <div className={styles.wrapper}>
          <Tabs>
            <SignInForm />
            <SignUpForm />
          </Tabs>
          <MenuPage />
          <button type="button" onClick={this.openModal}>
            Open Modal
          </button>
          {isModalOpen && <Modal onClose={this.closeModal} />}

          <OrderHistoryPage />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
