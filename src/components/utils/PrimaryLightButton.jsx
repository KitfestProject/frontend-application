import PropTypes from "prop-types";

const PrimaryLightButton = ({ title, handleClick, classes, icon = null }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn bg-[#FCF4F3] text-primary dark:text-white dark:bg-darkGray py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter ${classes} shadow-md`}
    >
      {title} <span className="">{icon}</span>
    </button>
  );
};

PrimaryLightButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  classes: PropTypes.string,
};

export default PrimaryLightButton;
