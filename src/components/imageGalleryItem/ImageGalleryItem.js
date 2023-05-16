import Modal from '../modal/Modal';
import React from 'react';
import css from './css/imageGalleryItem.module.css';

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
      <li className={css.imageGalleryItem}>
        <img onClick={this.onModal} className={css.imageGalleryItemPicture} src={webformatURL} alt="img" />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item}/>}
      </li>
    );
  }
}

export default ImageGalleryItem;
