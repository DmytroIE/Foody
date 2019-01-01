import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import MenuPage from '../../pages/MenuPage';
import MenuItemPage from '../../pages/MenuItemPage';
import AddMenuItemPage from '../../pages/AddMenuItemPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Header from '../Header/Header';

import routes from '../../configs/routes';

import styles from './App.module.css';

const App = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path={routes.MAIN} component={MainPage} />
        <Route exact path={routes.MENU.root} component={MenuPage} />
        <Route path={routes.MENU.add} component={AddMenuItemPage} />
        <Route path={routes.MENU.item} component={MenuItemPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </>
);

export default App;
