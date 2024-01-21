import { FaRegCheckCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';

const DownloadSelector = ({ selected, setSelected, value, size }) => {
  return (
    <>
      <button
        className={`${
          selected === value ? ' bg-gray-300 ' : ''
        }  w-full border flex justify-between px-4 py-2 hover:transform-none transition-none`}
        onClick={(e) => {
          setSelected(e.target.value);
        }}
        value={value}
      >
        <p>{value}</p>{' '}
        <p className="flex items-center gap-3">
          {size}{' '}
          <span>
            {selected === value ? <FaRegCheckCircle /> : <FaRegCircle />}
          </span>
        </p>{' '}
      </button>
    </>
  );
};

export default DownloadSelector;
