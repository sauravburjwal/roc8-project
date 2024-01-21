const SuggestionCard = ({ value, setSearchTerm }) => {
  return (
    <div
      className="text-xl border border-gray-500 rounded-md px-6 py-2 cursor-pointer"
      onClick={(e) => {
        setSearchTerm(e.target.innerText);
      }}
    >
      {value}
    </div>
  );
};

export default SuggestionCard;
