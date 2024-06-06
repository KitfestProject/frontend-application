import React, { useContext, useState } from "react";
import { UserRegisterFormContext } from "../../context/UserRegisterFormContext";
import useAuthentication from "../../hooks/useAuthentication.mjs";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader";
import axiosClient from "../../axiosClient";
import useAuthStore from "../../store/UseAuthStore";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DarkLogo from "../../assets/kitft-logo-dark.png";
import LightLogo from "../../assets/kitft-logo-light.png";
import useThemeStore from "../../store/UseThemeStore";

const RegisterFormComponent = ({ currentStep, setCurrentStep }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  const {
    userRegisterData,
    setUserRegisterData,
    clearRegisterData,
    validateRegisterInput,
  } = useContext(UserRegisterFormContext);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setUserRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterUser = async (ev) => {
    ev.preventDefault();
    setLoading(true);

    if (!validateRegisterInput()) {
      setLoading(false);
      return toast.error(
        "The form requires your attention. Please fill all the fields."
      );
    }

    try {
      await axiosClient
        .post("users/sign_up", userRegisterData)
        .then((response) => {
          setLoading(false);
          const { success, data, message } = response.data;

          if (success === true) {
            clearRegisterData();

            toast.success(message);

            setTimeout(() => {
              setCurrentStep(currentStep - 1);
            }, 3000);
          }
        });
    } catch (error) {
      console.log(error);
      const { message } = error.response?.data;
      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%] md:w-[550px] p-4 bg-white shadow-md rounded-md py-10 dark:bg-primary">
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
      <div className="mb-5 text-center">
        <h1 className="text-[28px] font-bold tracking-tighter dark:text-white">
          Welcome to Theatre KE
        </h1>
        <p className="text-basemd:text-md text-gray dark:text-white tracking-tighter">
          Register for an account
        </p>
      </div>

      <div className="mb-5 md:px-20">
        <div className="mt-4 space-y-4">
          {/* Full Name input */}
          <div className="mb-3">
            <label
              htmlFor="fullName"
              className="block font-semibold dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={userRegisterData.name}
              onChange={handleInputChange}
              className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-100 dark:bg-[#813c2a] dark:text-white font-light"
              placeholder="Example: John Doe"
            />
          </div>

          {/* email input */}
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
              value={userRegisterData.email}
              onChange={handleInputChange}
              className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-100 dark:bg-[#813c2a] dark:text-white font-light"
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
              value={userRegisterData.password}
              onChange={handleInputChange}
              className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-100 dark:bg-[#813c2a] dark:text-white font-light"
              placeholder="Enter your password"
            />
          </div>

          {/* Agree to terms & Conditions */}
          <div className="flex items-center space-x-2 checkbox-container">
            <label htmlFor="terms" className="dark:text-white">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={userRegisterData.terms}
                onChange={(e) =>
                  setUserRegisterData((prevData) => ({
                    ...prevData,
                    terms: e.target.checked,
                  }))
                }
                className="w-5 h-5"
              />
              <span className="checkmark"></span>I agree to the{" "}
              <Link to="/terms-conditions" className="text-primary">
                terms and conditions
              </Link>
            </label>
          </div>

          {/* Login Button */}
          <button
            onClick={handleRegisterUser}
            className="w-full flex justify-center items-center btn bg-primary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-darkGray hover:border-primary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter"
          >
            {loading ? <Loader /> : "Sign Up"}
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-10 dark:text-white text-center">
          Already have an account?{" "}
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-primary dark:text-gray"
          >
            Sign In
          </button>
        </div>

        {/* Debug */}
        <div className="text-xs text-gray mt-2">
          {/* <pre>{JSON.stringify(userRegisterData, null, 2)}</pre> */}
        </div>

        <Toaster position="bottom-left" reverseOrder={false} />
      </div>
    </div>
  );
};

export default RegisterFormComponent;
