import PropTypes from "prop-types";

const SecondaryButton = ({ title, handleClick, classes }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn bg-secondary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-primary dark:hover:bg-gray hover:border-secondary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter ${classes}`}
    >
      {title}
    </button>
  );
};

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

export default SecondaryButton;
