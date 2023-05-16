import Modal from '../modal/Modal';
import React from 'react';

class ImageGalleryItem extends React.Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    return (
      <li className="gallery-item">
        <img onClick={this.onModal} src="" alt="" />
        {this.state.shownModal && <Modal onClose={this.onModal}/>}
      </li>
    );
  }
}

export default ImageGalleryItem;
