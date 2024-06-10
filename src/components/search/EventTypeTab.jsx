import PropTypes from "prop-types";

const EventTypeTab = ({ type, selectedType, handleChange }) => {
  return (
    <div className="w-full">
      <label className="block cursor-pointer">
        <div
          className={`flex-1 ${
            selectedType === type
              ? "bg-[#f1ded9] border border-primary dark:bg-gray"
              : "bg-white border border-slate-300 dark:bg-gray"
          }  p-4 rounded-md`}
        >
          <div className="flex gap-3">
            <div
              className={`w-5 h-5 ${
                selectedType === type ? "bg-primary" : "bg-gray dark:bg-dark"
              }  rounded-full flex justify-center items-center`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p
              className={`text-sm font-bold ${
                selectedType === type ? "text-primary" : "text-dark"
              } `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </p>
          </div>
        </div>
        <input
          type="radio"
          value={type}
          checked={selectedType === type}
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

EventTypeTab.propTypes = {
  type: PropTypes.string.isRequired,
  selectedType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EventTypeTab;
