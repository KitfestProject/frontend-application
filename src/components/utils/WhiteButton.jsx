import PropTypes from "prop-types";

const WhiteButton = ({ title, handleClick, classes }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn bg-primary text-slate-100 dark:bg-slate-100 dark:text-primary hover:bg-darkGray hover:text-slate-100 py-2 px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter ${classes}`}
    >
      {title}
    </button>
  );
};

WhiteButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

export default WhiteButton;
