import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoGoogle, BiLogoFacebookCircle } from "react-icons/bi";
import { DynamicHelmet, PrimaryButton, ThemeChanger } from "../../components";

const Login = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleChangeStep = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
    } else {
      toggleShowModel();
    }
  };

  return (
    <div>
      <DynamicHelmet
        title="KITFT - Authentication Page!"
        description="Login or Register to your KITFT account."
      />
      <div className="h-screen grid place-items-center dark:bg-darkGray">
        {currentStep === 1 && (
          <div className="w-[95%] md:w-[550px] p-4 bg-white shadow-md rounded-md py-20 dark:bg-primary">
            {/* Title Area */}
            <div className="mb-5">
              <h1 className="text-[35px] md:text-[48px] font-bold text-center tracking-tighter dark:text-white">
                Welcome
              </h1>
              <p className="text-base md:text-xl text-center text-gray dark:text-white tracking-tighter">
                Create an account
              </p>
            </div>

            <div className="mb-5 md:px-20">
              <form className="mt-4 space-y-4">
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
                    id="email"
                    name="email"
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
                    id="password"
                    name="password"
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
                      className="w-5 h-5"
                    />
                    <span className="checkmark"></span> Stay logged in.
                  </label>
                </div>

                {/* Login Button */}
                <PrimaryButton
                  title="Sign In"
                  classes="w-full flex justify-center items-center"
                />
              </form>

              {/* Or Sign up with */}
              <div className="text-gray text-center my-5">Or Sign In With</div>

              {/* Social Media Buttons */}
              <div className="flex justify-center space-x-4">
                <button className="py-2 px-5 bg-lightGray flex-1 rounded-md justify-center items-center w-full flex cursor-pointer">
                  <BiLogoGoogle className="w-8 h-8 text-red-600" />
                </button>

                <button className="py-2 px-5 bg-lightGray flex-1 rounded-md justify-center items-center w-full flex cursor-pointer">
                  <BiLogoFacebookCircle className="w-8 h-8 text-blue-600" />
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center mt-5 dark:text-white">
                Don't have an account?{" "}
                <button
                  onClick={handleChangeStep}
                  className="text-primary dark:text-gray"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="w-[95%] md:w-[550px] p-4 bg-white shadow-md rounded-md py-20 dark:bg-primary">
            {/* Title Area */}
            <div className="mb-5">
              <h1 className="text-[35px] md:text-[48px] font-bold text-center tracking-tighter dark:text-white">
                Welcome
              </h1>
              <p className="text-base md:text-xl text-center text-gray dark:text-white tracking-tighter">
                Register for an account
              </p>
            </div>

            <div className="mb-5 md:px-20">
              <form className="mt-4 space-y-4">
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
                    id="fullName"
                    name="fullName"
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
                    id="email"
                    name="email"
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
                    id="password"
                    name="password"
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
                      className="w-5 h-5"
                    />
                    <span className="checkmark"></span>I agree to the{" "}
                    <Link to="/term_conditions" className="text-primary">
                      terms and conditions
                    </Link>
                  </label>
                </div>

                {/* Login Button */}
                <PrimaryButton
                  title="Sign In"
                  classes="w-full flex justify-center items-center dark:bg-white"
                />
              </form>

              {/* Login Link */}
              <div className="text-center mt-5">
                Already have an account?{" "}
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-primary"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default Login;
