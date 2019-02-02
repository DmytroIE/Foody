import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getMenuItemCategory } from '../../menuItemSelectors';

import routes from '../../../../configs/routes';

import GoBackButtonView from './GoBackButtonView';

class GoBackButtonContainer extends Component {
  handleGoBack = () => {
    const { location, history, category } = this.props;
    if (location.state) {
      history.push(location.state.from);
    } else {
      history.push({ pathname: routes.MENU, search: `category=${category}` });
    }
  };

  render() {
    return <GoBackButtonView onGoBack={this.handleGoBack} />;
  }
}

const mapState = (state, props) => ({
  category: getMenuItemCategory(state, props.match.params.id),
});

// const mapDispatch = { fetchItemById: fetchMenuItem };

export default compose(
  withRouter,
  connect(mapState),
)(GoBackButtonContainer);
