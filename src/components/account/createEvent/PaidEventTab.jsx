import PropTypes from "prop-types";

const PaidEventTab = ({ selectedChargeType, handleChange }) => {
  return (
    <div className="">
      <label className="block cursor-pointer">
        <div className="flex gap-5">
          <div
            className={`flex-1 ${
              selectedChargeType === "paid"
                ? "bg-[#f1ded9] border border-primary dark:bg-gray"
                : "bg-white border border-slate-300 dark:bg-gray"
            }  p-4 rounded-md`}
          >
            <div className="flex gap-3">
              <div
                className={`w-5 h-5 ${
                  selectedChargeType === "paid"
                    ? "bg-primary"
                    : "bg-gray dark:bg-dark"
                }  rounded-full flex justify-center items-center`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p
                className={`text-sm font-bold ${
                  selectedChargeType === "paid" ? "text-primary" : "text-dark"
                } `}
              >
                Paid
              </p>
            </div>
            <input
              type="radio"
              value="paid"
              checked={selectedChargeType === "paid"}
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

PaidEventTab.prototype = {
  selectedChargeType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaidEventTab;
