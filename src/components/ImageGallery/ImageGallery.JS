import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import css from './css/imageGallery.module.css';

function ImageGallery({ items }) {
  return (
    <>
      <ul className={css.imageGallery}>
        {/* <!-- Набір <li> із зображеннями --> */}
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}</ul>
    </>
  );
}

export default ImageGallery;

