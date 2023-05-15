import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modalRoot');

class Modal extends React.Component {
  render() {
    return createPortal(
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
