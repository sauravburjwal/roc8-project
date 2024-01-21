import { IoClose } from 'react-icons/io5';
import './Popup.css';
import Tags from './Tags';
import { useState } from 'react';
import DownloadSelector from './DownloadSelector';
import InfoCard from './InfoCard';

const Popup = ({
  selectedImage: imageData,
  isOpen,
  onClose,
  setSearchTerm,
}) => {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');
  const handleImageLoad = () => {
    setLoading(false);
  };
  if (imageData === null) return;
  return (
    <div className={`popup ${isOpen ? 'open' : ''} overflow-y-auto `}>
      <div className="flex justify-between items-center w-full bg-gray-200 h-[50px] sm:h-[76px] text-xl px-5 overflow-auto">
        <h2>Preview ID: {imageData.id}</h2>
        <div className="border-2 rounded-lg border-black cursor-pointer">
          <IoClose onClick={onClose} />
        </div>
      </div>
      <div className="flex m-5 gap-8 flex-col xl:flex-row ">
        <div className="flex-1  rounded-lg overflow-hidden max-w-[1000px] max-h-[1000px] flex items-center justify-center">
          {loading && <div>Loading...</div>}
          <img
            src={imageData.largeImageURL}
            alt=""
            onLoad={handleImageLoad}
            className={`${
              loading ? 'hidden' : 'block'
            } max-w-[1000px] max-h-[500px]`}
          />
        </div>
        <div className="flex min-w-[275px] ml-9 xl:flex-col justify-around items-start md:flex-row flex-col gap-7">
          <div>
            <p className="font-medium text-xl">Download</p>
            <div className="mt-3 w-[275px]">
              <DownloadSelector
                selected={selected}
                setSelected={setSelected}
                value="Small"
                size="640x960"
              />
              <DownloadSelector
                selected={selected}
                setSelected={setSelected}
                value="Medium"
                size="1920x2660"
              />
              <DownloadSelector
                selected={selected}
                setSelected={setSelected}
                value="Big"
                size="2400x3600"
              />
              <DownloadSelector
                selected={selected}
                setSelected={setSelected}
                value="Original"
                size="3850x5640"
              />
              <a href={imageData.webformatURL} download>
                <button
                  className="w-full mt-3 border py-2 rounded-lg bg-green-500 text-white text-bold"
                  // onClick={handleClick}
                >
                  Download for free!
                </button>
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium text-xl mt-8">Information</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <InfoCard title="User" text={imageData.user} />
              <InfoCard title="User Id" text={imageData.user_id} />
              <InfoCard title="Type" text={imageData.type} />
              <InfoCard title="Views" text={imageData.views} />
              <InfoCard title="Downloads" text={imageData.downloads} />
              <InfoCard title="Likes" text={imageData.likes} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 m-3 items-center flex-wrap ml-8">
        <h2 className="text-18 font-bold leading-51">Tags:</h2>
        {imageData.tags.split(',').map((tag) => (
          <Tags
            key={tag}
            tag={tag}
            setSearchTerm={setSearchTerm}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
};

export default Popup;
