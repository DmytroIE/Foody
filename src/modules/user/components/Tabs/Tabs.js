import React, { Component } from 'react';

import styles from './Tabs.module.css';

class Tabs extends Component {
  state = {
    currentTab: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { currentTab } = this.state;
    return nextState.currentTab !== currentTab;
  }

  onTabClick = idx => {
    this.setState({ currentTab: idx });
  };

  render() {
    const { currentTab } = this.state;
    const { children } = this.props;
    return (
      <section className={styles.container}>
        <div className={styles.buttonsContainer}>
          {children.map((element, idx) => (
            <button
              type="button"
              className="sign-tabs__item"
              key={element.type.name}
              onClick={() => this.onTabClick(idx)}
            >
              {element.type.name}
            </button>
          ))}
        </div>
        <div className={styles.pagesContainer}>{children[currentTab]}</div>
      </section>
    );
  }
}

export default Tabs;
