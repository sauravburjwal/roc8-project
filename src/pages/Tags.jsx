const Tags = ({ tag, setSearchTerm, onClose }) => {
  return (
    <div
      className="bg-gray-100 rounded-sm px-2 py-1 cursor-pointer"
      onClick={(e) => {
        if (onClose) onClose();
        setSearchTerm(e.target.innerText);
      }}
    >
      {tag}
    </div>
  );
};

export default Tags;
