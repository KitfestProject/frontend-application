import PropTypes from "prop-types";

const PrimaryButton = ({ title, handleClick, classes, icon = null }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn bg-primary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-darkGray hover:border-primary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter ${classes}`}
    >
      {title} <span className="">{icon}</span>
    </button>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  classes: PropTypes.string,
};

export default PrimaryButton;
