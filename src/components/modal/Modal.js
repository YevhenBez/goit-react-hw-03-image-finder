import React from 'react';
import { createPortal } from 'react-dom';

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
    return createPortal(
      <div onClick={this.onOverlayClose} className="overlay">
        <div className="modal">
          <img src="" alt="img" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
