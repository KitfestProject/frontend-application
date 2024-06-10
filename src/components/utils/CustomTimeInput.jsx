import PropTypes from "prop-types";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const CustomTimeInput = ({ required, title, info, time, handleChange }) => {
  // Set selected date
  const handleInputChange = (selected) => {
    return handleChange(selected);
  };

  return (
    <div className="">
      <label
        htmlFor="event-title"
        className="text-dark dark:text-slate-100 font-bold text-sm"
      >
        {title} {required && <span className="text-red-500">*</span>}
      </label>
      {info && <small className="block text-gray mb-1">{info}</small>}

      <TimePicker
        clearIcon={null}
        onChange={handleInputChange}
        clockIcon={null}
        value={time}
        className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none"
      />
    </div>
  );
};

CustomTimeInput.propTypes = {
  required: PropTypes.bool,
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  time: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default CustomTimeInput;
