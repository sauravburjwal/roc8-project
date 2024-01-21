import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

const SearchBox = ({ showTrending }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <div className="text-sm sm:text-base flex justify-between items-center gap-3 text-white w-3/4 sm:w-2/4 min-h-16 rounded-lg m-8 px-3 sm:px-4  bg-blur mt-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/${searchText}`);
          }}
          className="flex gap-2 flex-1"
        >
          <div className="flex gap-2 flex-1">
            <div>
              <CiSearch className="w-full h-full" />
            </div>
            <input
              type="text"
              className="bg-transparent font-semibold text-1xl leading-6 text-white focus:outline-none w-full placeholder-white border-l-2 px-2"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="font-bold px-3 py-1 border-2 rounded-lg"
          >
            Go!
          </button>
        </form>
      </div>
      {showTrending ? (
        <div className="bg-blur py-2 px-4 rounded-lg text-white">
          <p>
            <span className="font-bold">Trending:</span> flowers, love, forest,
            river
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBox;
