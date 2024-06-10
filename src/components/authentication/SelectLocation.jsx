import PropTypes from "prop-types";
import { useState } from "react";
import Select from "react-dropdown-select";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const SelectLocation = ({
  options,
  currentStep,
  setCurrentStep,
  handleChangeStep,
}) => {
  const [valueField, setValueField] = useState(null);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center py-16">
        {/* Title Area */}
        <div className="flex-1">
          <div className="grid place-items-center">
            <div className="">
              <h5 className="mb-5 text-xl">Tell Us</h5>
              <div className="flex gap-5 items-start w-full">
                {/* Progress */}
                <div className="flex flex-col justify-center items-center">
                  {/* Radio Unselected */}
                  <div className="rounded-full p-1 mb-1 border border-green-500">
                    <BiCheck className="text-md font-bold text-green-500" />
                  </div>

                  {/* Divider Line */}
                  <div className="h-[120px] border border-dashed font-bold border-gray dark:border-gray mb-5"></div>

                  {/* Radio Selected */}
                  <div className="rounded-full p-1 border border-dark dark:border-slate-100 mb-5">
                    <div className="w-5 h-5 rounded-full bg-dark dark:bg-slate-100"></div>
                  </div>
                </div>

                {/* Progress text */}
                <div className="">
                  <h5 className="text-[30px] text-gray font-bold dark:text-gray tracking-tighter mb-[25%]">
                    What Are Your <br /> Interests
                  </h5>
                  <h1 className="text-[48px] font-bold dark:text-white tracking-tighter leading-tight">
                    What is Your <br /> Preferred <br /> Location
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Location Area */}
        <div className="flex-1 h-[430px] mr-10 bg-white dark:bg-primaryLight px-5 py-20 rounded">
          <h5 className="text-xl">Looking for an event in</h5>
          <div className="mt-5">
            <Select
              placeholder="Select event location"
              searchable={true}
              options={options}
              labelField="name"
              valueField="id"
              color={"#813c2a"}
              style={{
                background: "#f1f5f9",
                borderRadius: "8px",
                padding: "15px",
                color: "#090808",
                border: "none",
                outline: "none",
              }}
              onChange={(values) => {
                setValueField(values);
                // console.log(values);
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-1 bg-white dark:bg-[#813c2a] w-full p-3 shadow-2xl rounded-b-md">
        <div className="flex justify-between items-center">
          {/* Skip Button */}
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="font-light flex gap-2 items-center bg-white text-darkGray py-2 px-5 rounded-md"
          >
            <HiOutlineArrowNarrowLeft className="text-2xl" />
            Previous
          </button>
          {/* Next Button */}
          <Link
            to="/auth-login"
            onClick={handleChangeStep}
            className="font-light flex gap-2 items-center bg-secondary text-white py-2 px-5 rounded-md shadow-md"
          >
            Finish
            <BiCheckDouble className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

SelectLocation.propTypes = {
  options: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  handleChangeStep: PropTypes.func.isRequired,
};

export default SelectLocation;
