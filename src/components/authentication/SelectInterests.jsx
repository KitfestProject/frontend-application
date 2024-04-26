import React from "react";
import UserInterests from "../UserInterests";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const SelectInterests = ({ userInterests, handleChangeStep }) => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center pt-16">
        {/* Title Area */}
        <div className="flex-1">
          <div className="grid place-items-center">
            <div className="">
              <h5 className="mb-5 text-xl">Tell Us</h5>
              <div className="flex gap-5 items-start w-full">
                {/* Progress */}
                <div className="flex flex-col justify-center items-center mt-5">
                  {/* Radio Selected */}
                  <div className="rounded-full p-1 border border-dark dark:border-slate-100 mb-1">
                    <div className="w-5 h-5 rounded-full bg-dark dark:bg-slate-100"></div>
                  </div>

                  {/* Divider Line */}
                  <div className="h-[160px] border border-dashed font-bold border-gray dark:border-gray mb-4"></div>

                  {/* Radio Unselected */}
                  <div className="rounded-full p-1 mb-5">
                    <div className="w-5 h-5 rounded-full bg-gray dark:bg-gray"></div>
                  </div>
                </div>

                {/* Progress text */}
                <div className="">
                  <h1 className="text-[48px] font-bold dark:text-white mb-[25%] tracking-tighter">
                    What Are Your <br /> Interests
                  </h1>
                  <h5 className="text-[30px] text-gray font-bold dark:text-gray tracking-tighter">
                    What is Your Preferred <br /> Location
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="flex-1 mr-10 max-h-[500px] h-full overflow-y-scroll">
          {userInterests.map((category, index) => (
            <UserInterests
              key={index}
              categoryName={category.name}
              interests={category.interests}
              icon={category.icon}
              isLast={index === userInterests.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex-1 bg-white dark:bg-[#813c2a] w-full p-3 shadow-2xl rounded-b-md">
        <div className="flex justify-between items-center">
          {/* Skip Button */}
          <Link
            to="/auth-login"
            className="font-light flex gap-2 items-center bg-white text-darkGray py-2 px-5 rounded-md hover:bg-gray hover:text-slate-100 transition ease-in-out delay-150"
          >
            Skip
          </Link>
          {/* Next Button */}
          <button
            onClick={handleChangeStep}
            className="font-light flex gap-2 items-center bg-secondary text-white py-2 px-5 rounded-md shadow-md"
          >
            Next
            <HiOutlineArrowNarrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectInterests;
