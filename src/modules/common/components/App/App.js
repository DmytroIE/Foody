import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';

import AboutPage from '../../../../pages/AboutPage/AboutPage';
import AccountPage from '../../../../pages/AccountPage/AccountPage';
import ContactPage from '../../../../pages/ContactPage/ContactPage';
import DeliveryPage from '../../../../pages/DeliveryPage/DeliveryPage';
import MenuPage from '../../../../pages/MenuPage/MenuPage';
import MenuItemPage from '../../../../pages/MenuItemPage/MenuItemPage';
import OrderHistoryPage from '../../../../pages/OrderHistoryPage/OrderHistoryPage';
import PlannerPage from '../../../../pages/PlannerPage/PlannerPage';
import CartPage from '../../../../pages/CartPage/CartPage';
import Spinner from '../Spinner/SpinnerContainer';
import Modal from '../Modal/ModalContainer';

import routes from '../../../../configs/routes';

import styles from './App.module.css';

const TEST_USERNAME = 'Petr Ivanov';
const TEST_AVATARSRC =
  'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg';

class App extends Component {
  render() {
    return (
      <>
        <AppHeader userName={TEST_USERNAME} avatarSrc={TEST_AVATARSRC} />
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path={routes.MENU} component={MenuPage} />
            <Route path={routes.MENU_ITEM} component={MenuItemPage} />
            <Route path={routes.ABOUT} component={AboutPage} />
            <Route path={routes.CONTACT} component={ContactPage} />
            <Route path={routes.DELIVERY} component={DeliveryPage} />
            <Route path={routes.ACCOUNT} component={AccountPage} />
            <Route path={routes.ORDER_HYSTORY} component={OrderHistoryPage} />
            <Route path={routes.PLANNER} component={PlannerPage} />
            <Route path={routes.CART} component={CartPage} />
            <Redirect to={routes.MENU} />
          </Switch>
        </div>
        <Spinner />
        <Modal />
      </>
    );
  }
}

export default App;
