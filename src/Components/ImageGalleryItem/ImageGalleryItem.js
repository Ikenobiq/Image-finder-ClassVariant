const ImageGalleryItem = ({ listImage }) => {
  return (
    <li>
      <img
        src={listImage.webformatURL}
        alt={listImage.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
export default ImageGalleryItem;
