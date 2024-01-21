import Tags from './Tags';

const ImageCard = ({
  imageData,
  openPopup,
  setSelectedImage,
  setSearchTerm,
}) => {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 cursor-pointer">
      <img
        src={imageData.webformatURL}
        className="w-full rounded-lg"
        onClick={() => {
          setSelectedImage(imageData);
          openPopup();
        }}
      />
      <div className="flex gap-2 mt-3">
        {imageData.tags.split(',').map((tag) => (
          <Tags key={tag} tag={tag} setSearchTerm={setSearchTerm} />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
