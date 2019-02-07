import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getLoadingStatus } from '../../commonSelectors';

import SpinnerView from './SpinnerView';

export class SpinnerContainer extends Component {
  state = {
    isShown: false,
    isShowDelayStarted: false,
    isShowDelayCanceled: false,
    isHideDelayStarted: false,
  };

  showDelayTimer = null;

  componentDidUpdate() {
    const {
      isShowDelayStarted,
      isShowDelayCanceled,
      isHideDelayStarted,
    } = this.state;

    if (isShowDelayStarted) {
      this.showDelayTimer = setTimeout(() => {
        this.setState({ isShown: true, isShowDelayStarted: false });
      }, 1000);
      return;
    }
    if (isShowDelayCanceled) {
      clearTimeout(this.showDelayTimer);
      this.showDelayTimer = null;
      this.setState({ isShowDelayCanceled: false });
      return;
    }
    if (isHideDelayStarted) {
      this.showDelayTimer = null;
      setTimeout(() => {
        this.setState({ isShown: false, isHideDelayStarted: false });
      }, 2000);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { loadingStatus } = nextProps;
    // Если сигнал loadingStatus=false пришел раньше, чем появился спиннер, он и не должен появиться
    if (!loadingStatus && !prevState.isShown && prevState.isShowDelayStarted) {
      return {
        isShown: false,
        isShowDelayStarted: false,
        isShowDelayCanceled: true,
        isHideDelayStarted: false,
      };
    }
    // Если сигнал loadingStatus=true,то запускаем задержку на появление спиннера
    if (loadingStatus && !prevState.isShown) {
      return {
        isShown: false,
        isShowDelayStarted: true,
        isShowDelayCanceled: false,
        isHideDelayStarted: false,
      };
    }
    // Раз спиннер уже появился, то он должен побыть на экране хотя бы HideDelay время
    if (!loadingStatus && prevState.isShown) {
      return {
        isShown: true,
        isShowDelayStarted: false,
        isShowDelayCanceled: false,
        isHideDelayStarted: true,
      };
    }
    return null;
  }

  render() {
    const { isShown } = this.state;
    return isShown && <SpinnerView />;
  }
}

const mapState = state => ({
  loadingStatus: getLoadingStatus(state),
});

export default connect(mapState)(SpinnerContainer);
