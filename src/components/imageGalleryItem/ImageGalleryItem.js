import Modal from '../modal/Modal';
import React from 'react';

class ImageGalleryItem extends React.Component {
  state = {
    shownModal: false,
  };
  render() {
    return (
      <li class="gallery-item">
            <img src="" alt="" />
            {this.state.shownModal && <Modal  />}
      </li>
    );
  }
}
