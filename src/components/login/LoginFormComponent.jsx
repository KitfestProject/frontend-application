import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { UserRegisterFormContext } from "@/context/UserRegisterFormContext";
import { BiLogoFacebookCircle, BiLogoGoogle } from "react-icons/bi";
import { Loader } from "@/components";
import axiosClient from "@/axiosClient";
import useAuthStore from "@/store/UseAuthStore";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import DarkLogo from "@/assets/kitft-logo-dark.png";
import LightLogo from "@/assets/kitft-logo-light.png";
import useThemeStore from "@/store/UseThemeStore";

const LoginFormComponent = ({ handleChangeStep }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const { loginData, setLoginData, clearLoginData, validateLoginInput } =
    useContext(UserRegisterFormContext);
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginInputChange = (ev) => {
    const { name, value, type, checked } = ev.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginUser = async (ev) => {
    ev.preventDefault();
    setLoading(true);

    if (!validateLoginInput()) {
      setLoading(false);
      return toast.error(
        "The form requires your attention. Please fill all the fields."
      );
    }

    try {
      await axiosClient.post("/users/sign_in", loginData).then((response) => {
        setLoading(false);
        const { data, message } = response.data;
        login(data, data.token);
        // console.log(data);
        clearLoginData();

        toast.success(message);

        setTimeout(() => {
          navigate("/user-dashboard");
        }, 3000);
      });
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%] md:w-[550px] p-4 bg-white shadow-md rounded-md py-10 dark:bg-darkGray dark:border dark:border-gray/30">
      {/* Logo */}
      <div className="flex justify-center items-center mb-3">
        <Link to="/" className="cursor-pointer">
          <img
            src={isDarkMode ? DarkLogo : LightLogo}
            alt="logo"
            className="w-[180px] h-[50px] object-contain"
          />
        </Link>
      </div>

      {/* Title Area */}
      <div className="mb-5 text-center md:px-20">
        <h1 className="text-[28px] font-bold tracking-tighter dark:text-white">
          Welcome Back!
        </h1>
        <p className="text-base text-gray dark:text-gray tracking-tighter">
          Login to access our services and features.
        </p>
      </div>

      <div className="mb-5 md:px-20">
        <div className="mt-4 space-y-4">
          {/* Username or email input */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block font-semibold dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginInputChange}
              className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-100 text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 font-light rounded"
              placeholder="Example: email@gmail.com"
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block font-semibold dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginInputChange}
              className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-100 text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 font-light rounded"
              placeholder="Enter your password"
            />
          </div>

          {/* Agree to terms & Conditions */}
          <div className="flex items-center space-x-2 checkbox-container">
            <label htmlFor="keepMeLogged" className="dark:text-white">
              <input
                type="checkbox"
                id="keepMeLogged"
                name="agreeToTerms"
                checked={loginData.agreeToTerms}
                onChange={(e) =>
                  setLoginData((prevData) => ({
                    ...prevData,
                    agreeToTerms: e.target.checked,
                  }))
                }
                className="w-5 h-5"
              />
              <span className="checkmark"></span> Stay logged in.
            </label>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLoginUser}
            className="w-full flex justify-center items-center dark:border dark:border-gray/30 btn bg-primary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-darkGray hover:border-primary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter"
          >
            {loading ? <Loader /> : "Sign In"}
          </button>
        </div>

        {/* Or Sign up with */}
        <div className="text-gray text-center my-5">Or Sign In With</div>

        {/* Social Media Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="py-2 px-5 bg-lightGray dark:bg-dark flex-1 rounded-md justify-center items-center w-full flex cursor-pointer">
            <BiLogoGoogle className="w-8 h-8 text-red-600" />
          </button>

          <button className="py-2 px-5 bg-lightGray dark:bg-dark flex-1 rounded-md justify-center items-center w-full flex cursor-pointer">
            <BiLogoFacebookCircle className="w-8 h-8 text-blue-600" />
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-10 dark:text-white text-center">
          Don't have an account?{" "}
          <button
            onClick={handleChangeStep}
            className="text-primary dark:text-gray"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Debug */}
      <div className="text-xs text-gray mt-2">
        {/* <pre>{JSON.stringify(loginData, null, 2)}</pre> */}
      </div>

      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

LoginFormComponent.propTypes = {
  handleChangeStep: PropTypes.func.isRequired,
};

export default LoginFormComponent;
