const InfoCard = ({ title, text }) => {
  return (
    <div className="bg-green">
      <p className="text-base  leading-5 ">{title}</p>
      <p className="text-lg font-semibold leading-6 tracking-normal text-left">
        {text}
      </p>
    </div>
  );
};

export default InfoCard;
