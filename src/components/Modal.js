import React, { Component, createRef } from 'react';

class Modal extends Component {
  modalRef = createRef();

  modalWindowRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
    this.modalRef.current.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
    this.modalRef.current.removeEventListener('click', this.handleClick);
  }

  handleEscPress = ({ key }) => {
    const { onClose } = this.props;
    if (key === 'Escape') {
      onClose();
    }
  };

  handleClick = ({ target }) => {
    const { onClose } = this.props;
    if (!this.modalWindowRef.current.contains(target)) {
      onClose();
    }
  };

  // handleWindowClick = ({ target }) => {
  //   const isClickedInsideMenu = this.containerRef.current.contains(target);
  //   const isDropdownOpen = this.state;
  //   if (isDropdownOpen && !isClickedInsideMenu) {
  //     this.closeDropdown();
  //   }
  // };

  render() {
    const { onClose } = this.props;
    return (
      <div className="Backdrop" ref={this.modalRef}>
        <div className="ModalWindow" ref={this.modalWindowRef}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            animi dolore quae laborum rerum neque adipisci impedit voluptatum
            accusantium! Consequatur.
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
