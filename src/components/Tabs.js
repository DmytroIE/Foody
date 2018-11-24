import React, { Component } from 'react';

class Tabs extends Component {
  state = {
    currentTab: 0,
  };

  onTabClick = ({ target }) => {
    const numberOfClickedTab = target.dataset.index;
    this.setState({ currentTab: numberOfClickedTab });
  };

  render() {
    const { currentTab } = this.state;
    const { children } = this.props;
    return (
      <section className="sign-tabs">
        <div className="sign-tabs__container">
          {children.map((element, idx) => (
            <button
              type="button"
              className="sign-tabs__item"
              key={element.type.name}
              data-index={idx}
              onClick={this.onTabClick}
            >
              {element.type.name}
            </button>
          ))}
        </div>
        <div className="sign-tabs__field">{children[currentTab]}</div>
      </section>
    );
  }
}

export default Tabs;
