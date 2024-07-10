import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const ReviewCardComponent = () => {
  return (
    <div className="w-full md:w-1/3 flex-shrink-0">
      <div className="bg-gray-100 dark:bg-darkGray p-5 rounded-lg shadow-md border border-gray/30">
        <div className="mb-5">
          <p className="text-dark font-semibold mb-3">
            Captivating Experience!
          </p>

          {/* Star Rating */}
          <div className="flex items-center">
            <BiSolidStar className="text-primary dark:text-yellow-500 text-2xl" />
            <BiSolidStar className="text-primary dark:text-yellow-500 text-2xl" />
            <BiSolidStar className="text-primary dark:text-yellow-500 text-2xl" />
            <BiSolidStarHalf className="text-primary dark:text-yellow-500 text-2xl" />
            <BiStar className="text-primary dark:text-yellow-500 text-2xl" />
          </div>
        </div>

        <p className="text-dark tracking-tighter">
          "The Kenya National Theatre never disappoints! The acoustics are
          fantastic, and every seat gives a great view of the stage. The recent
          play I attended was mesmerizing, and the venue’s history adds a
          special touch to the experience. Highly recommended for any theatre
          enthusiast!"{" "}
          <b className="text-dark font-semibold dark:text-primary">— Jane M.</b>
        </p>
      </div>
    </div>
  );
};

export default ReviewCardComponent;
