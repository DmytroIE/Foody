import React, { Component, createRef } from 'react';

import styles from './Modal.module.css';

class Modal extends Component {
  modalRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
    // this.modalRef.current.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
    // this.modalRef.current.removeEventListener('click', this.handleClick);
  }

  handleEscPress = ({ code }) => {
    const { onClose } = this.props;
    if (code === 'Escape') {
      onClose();
    }
  };

  handleClick = ({ target }) => {
    const { onClose } = this.props;
    if (this.modalRef.current !== target) {
      return;
    }
    onClose();
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <div
        className={styles.backdrop}
        ref={this.modalRef}
        onClick={this.handleClick}
      >
        <div className={styles.window}>
          <div>{children}</div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
