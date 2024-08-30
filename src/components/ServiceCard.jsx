const ServiceCard = ({ imgURL, label, subtext, button, onClick }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex-grow-0 max-sm:flex-grow bg-slate-50">
      <div className="w-11 h-11 flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} width={80} height={80} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
      <button
        onClick={onClick}
        className="justify-center items-center rounded-xl px-7 py-4 mt-3 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-sm:text-sm max-sm:px-4 max-sm:py-2 "
      >
        {button}
      </button>
    </div>
  );
};

export default ServiceCard;
