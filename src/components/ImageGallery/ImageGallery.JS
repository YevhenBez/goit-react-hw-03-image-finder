import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

function ImageGallery({ items }) {
  return (
    <>
      <ul className="gallery">
        {/* <!-- Набір <li> із зображеннями --> */}
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}</ul>
    </>
  );
}

export default ImageGallery;
