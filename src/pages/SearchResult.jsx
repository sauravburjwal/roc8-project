import { useParams } from 'react-router-dom';
import SearchBox from './SearchBox';
import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import { getData } from '../utils/utils';
import { Random } from '../utils/constant';
import Popup from './Popup';
import SuggestionCard from './SuggestionCard';

const SearchResult = () => {
  const { searchText } = useParams();
  const [searchTerm, setSearchTerm] = useState(searchText);
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    setSearchTerm(searchText);
  }, [searchText]);
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    (async () => {
      const data = await getData(searchTerm);
      setData(data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const data = await getData(searchTerm);
      setData(data);
    })();
  }, [searchText, searchTerm]);
  return (
    <>
      <SearchBox />
      <div className="text-white text-5xl font-bold text-center">
        <h1>Results: {searchTerm} </h1>
      </div>
      <div className="w-full h-full mt-8 bg-white overflowx-hidden">
        <div
          className="flex justify-between items-center gap-4 w-full bg-gray-200 p-9 text-xl px-5 overflow-x-auto"
          id="scrollbar"
        >
          {Random.map((ran) => (
            <SuggestionCard
              key={ran}
              value={ran}
              setSearchTerm={setSearchTerm}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-around w-full p-8 gap-12 ">
          <div
            className={`dark-overlay ${isPopupOpen ? 'open' : ''}`}
            onClick={closePopup}
          ></div>
          {data &&
            data?.hits.map((imageData) => {
              return (
                <ImageCard
                  key={imageData.id}
                  imageData={imageData}
                  openPopup={openPopup}
                  setSelectedImage={setSelectedImage}
                  setSearchTerm={setSearchTerm}
                />
              );
            })}
          {isPopupOpen ? (
            <Popup
              isOpen={isPopupOpen}
              onClose={closePopup}
              selectedImage={selectedImage}
              setSearchTerm={setSearchTerm}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
