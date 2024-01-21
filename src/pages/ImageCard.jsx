import Tags from './Tags';

const ImageCard = ({ imageData, openPopup, setSelectedImage }) => {
  return (
    <div
      className="w-full sm:w-1/3 lg:w-1/4 cursor-pointer"
      onClick={() => {
        setSelectedImage(imageData);
        openPopup();
      }}
    >
      <img src={imageData.webformatURL} className="w-full rounded-lg" />
      <div className="flex gap-2 mt-3">
        {imageData.tags.split(',').map((tag) => (
          <Tags key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
