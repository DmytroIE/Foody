import React, { Component, createRef } from 'react';

import Avatar from './Avatar';
import Dropdown from './Dropdown';

class UserMenu extends Component {
  state = {
    isDropdownOpen: false,
  };

  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = ({ target }) => {
    const isClickedInsideMenu = this.containerRef.current.contains(target);
    const isDropdownOpen = this.state;
    if (isDropdownOpen && !isClickedInsideMenu) {
      this.closeDropdown();
    }
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  render() {
    const { avatarSrc, userName = 'anonymus' } = this.props;
    const { isDropdownOpen } = this.state;
    return (
      <div
        className="user-menu"
        ref={this.containerRef}
        onClick={this.openDropdown}
      >
        <Avatar src={avatarSrc} width="50" />
        <p className="name">{userName}</p>
        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}

export default UserMenu;
