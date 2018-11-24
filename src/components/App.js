import React, { Component } from 'react';
import AppHeader from './AppHeader';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Tabs from './Tabs';
import MenuGrid from './MenuGrid';
import menuData from '../data/menu.json';

const INITIAL_STATE = {
  isLogged: false,
};

class App extends Component {
  state = INITIAL_STATE;

  render() {
    return (
      <React.Fragment>
        <AppHeader userName="Petr Ivanov" />
        <Tabs>
          <SignInForm />
          <SignUpForm />
        </Tabs>
        <MenuGrid items={menuData} />
      </React.Fragment>
    );
  }
}

export default App;
