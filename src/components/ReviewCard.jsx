import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, position, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text font-poppins">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="object-contain m-0 "
        />
        <p className="text-xl font-poppins text-slate-gray">({rating})</p>
      </div>
      <p className="mt-2 text-2xl font-poppins text-slate-gray">{position}</p>
      <h3 className=" font-poppins text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
