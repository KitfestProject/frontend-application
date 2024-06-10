import PropTypes from "prop-types";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { BiXCircle } from "react-icons/bi";

const CustomDateInput = ({ required, title, info, date, handleChange }) => {
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
      <DatePicker
        minDate={new Date()}
        clearIcon={<BiXCircle className="text-primary dark:text-slate-100" />}
        calendarIcon={null}
        onChange={handleInputChange}
        value={date}
        className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-dark p-2 rounded-md outline-none"
      />
    </div>
  );
};

CustomDateInput.propTypes = {
  required: PropTypes.bool,
  title: PropTypes.string,
  info: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CustomDateInput;
