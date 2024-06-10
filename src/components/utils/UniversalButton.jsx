import PropTypes from "prop-types";

const UniversalButton = ({ title, handleClick, classes }) => {
  return (
    <button
      onClick={handleClick}
      className={`"btn text-[18px] font-normal tracking-tighter bg-secondary hover:text-slate-100 text-slate-100 hover:bg-darkGray hover:border-secondary py-2 px-8 rounded cursor-pointer transition ease-in-out delay-150 ${classes}"`}
    >
      {title}
    </button>
  );
};

UniversalButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  classes: PropTypes.string,
};

export default UniversalButton;
