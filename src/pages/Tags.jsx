import { useNavigate } from 'react-router-dom';

const Tags = ({ tag, onClose }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-gray-100 rounded-sm px-2 py-1 cursor-pointer"
      onClick={(e) => {
        if (onClose) onClose();
        navigate(`/search/${e.target.innerText}`);
      }}
    >
      {tag}
    </div>
  );
};

export default Tags;
