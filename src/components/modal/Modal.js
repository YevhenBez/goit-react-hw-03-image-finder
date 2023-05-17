import React from 'react';
import { createPortal } from 'react-dom';
import css from './css/modal.module.css';

const modalRoot = document.querySelector('#modalRoot');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props.image;
    return createPortal(
      <div onClick={this.onOverlayClose} className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
