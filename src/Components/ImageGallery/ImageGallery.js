import ImageGelleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGellery = ({ listImages }) => {
  return (
    <ul className="ImageGallery">
      {listImages.map((listImage) => (
        <ImageGelleryItem key={listImage.id} listImage={listImage} />
      ))}
    </ul>
  );
};

export default ImageGellery;
