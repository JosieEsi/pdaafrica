const PartnersCard = ({ imgURL, name }) => {
  return (
    <div className="flex-row w-full">
      <img src={imgURL} alt={name} className="w-full h-auto" />
    </div>
  );
};

export default PartnersCard;
