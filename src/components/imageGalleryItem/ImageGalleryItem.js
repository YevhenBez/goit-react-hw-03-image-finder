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
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li className="gallery-item">
        <img onClick={this.onModal} src={webformatURL} alt="img" />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item}/>}
      </li>
    );
  }
}

export default ImageGalleryItem;
