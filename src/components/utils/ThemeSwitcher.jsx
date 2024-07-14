import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { BiDesktop, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { ThemeChanger } from "@/context/ThemeChangerContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeChanger);
  const [showDropdown, setShowDropdown] = useState(false);
  const themeDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setShowDropdown(false);
  };

  const getThemeIcon = (currentTheme) => {
    switch (currentTheme) {
      case "dark":
        return (
          <BiSolidMoon className="text-2xl dark:text-white text-primary" />
        );
      case "light":
        return <BiSolidSun className="text-2xl dark:text-white text-primary" />;
      case "system":
        return <BiDesktop className="text-2xl dark:text-white text-primary" />;
      default:
        return <BiSolidSun className="text-2xl dark:text-white text-primary" />;
    }
  };

  const ThemeButton = ({ themeName, IconComponent }) => (
    <motion.div
      whileHover={{ boxShadow: "0px 0px 10px 0px #f08165", scale: 1.1 }}
      style={
        theme === themeName ? { boxShadow: "0px 0px 10px 0px #f08165" } : {}
      }
      className="flex justify-center space-x-2 items-center w-10 h-10 leading-9 text-[28px] rounded-full dark:hover:text-slate-100"
      onClick={() => handleThemeChange(themeName)}
    >
      <IconComponent className="text-3xl dark:text-gray text-primary" />
    </motion.div>
  );

  return (
    <div ref={themeDropdownRef}>
      <div className="relative">
        <motion.div
          onClick={toggleDropdown}
          className="flex justify-center space-x-2 items-center w-10 h-10 leading-9 text-[28px] rounded-full"
          style={{ boxShadow: "0px 0px 10px 0px #f08165" }}
        >
          {getThemeIcon(theme)}
        </motion.div>

        {/* Toggle Theme Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showDropdown ? 1 : 0, y: showDropdown ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`md:w-[180px] max-w-[300px] bg-white dark:bg-darkGray dark:border dark:border-gray/30 rounded-full shadow-md absolute top-[65px] -left-[35px] md:left-0 p-2 ${
            showDropdown ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-center items-center gap-3">
            <ThemeButton themeName="light" IconComponent={BiSolidSun} />
            <ThemeButton themeName="dark" IconComponent={BiSolidMoon} />
            <ThemeButton themeName="system" IconComponent={BiDesktop} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
