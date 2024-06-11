import { Link } from "react-router-dom";
import useThemeStore from "@/store/UseThemeStore";
import DarkLogo from "@/assets/kitft-logo-dark.png";
import LightLogo from "@/assets/kitft-logo-light.png";

const NavigationLogoComponent = () => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  return (
    <Link to="/" className="cursor-pointer">
      <img
        src={isDarkMode ? DarkLogo : LightLogo}
        alt="logo"
        className="w-[150px] h-[50px] object-contain"
      />
    </Link>
  );
};

export default NavigationLogoComponent;
