import { useNavigate } from 'react-router-dom';

const SuggestionCard = ({ value }) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-xl border border-gray-500 rounded-md px-6 py-2 cursor-pointer"
      onClick={(e) => {
        navigate(`/search/${e.target.innerText}`);
      }}
    >
      {value}
    </div>
  );
};

export default SuggestionCard;
