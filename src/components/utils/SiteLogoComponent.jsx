import { Link } from "react-router-dom";

const SiteLogoComponent = ({ theme }) => {
  return (
    <div>
      <Link to="/" className="cursor-pointer">
        <img
          src={
            theme
              ? "/images/kitft-logo-dark.png"
              : "/images/kitft-logo-light.png"
          }
          alt="logo"
          className="w-[150px] h-[50px] object-contain"
        />
      </Link>
    </div>
  );
};

export default SiteLogoComponent;
