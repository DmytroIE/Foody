import React, { Component } from 'react';

import styles from './Spinner.module.css';

class Spinner extends Component {
  state = { isShown: false };

  timer = setTimeout(() => this.setState({ isShown: true }), 1500);

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { isShown } = this.state;
    return (
      isShown && (
        <div className={styles.spinner}>
          <div />
          <div />
          <div />
          <div />
        </div>
      )
    );
  }
}

export default Spinner;
