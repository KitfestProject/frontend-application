import React, { useContext } from "react";
import { UserRegisterFormContext } from "../../context/UserRegisterFormContext";
import { PrimaryButton } from "../index.mjs";
import useAuthentication from "../../hooks/useAuthentication.mjs";

const RegisterFormComponent = ({ handleChangeStep }) => {
  const { userRegisterData, setUserRegisterData } = useContext(
    UserRegisterFormContext
  );
  const { registerUser } = useAuthentication();

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setUserRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
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

        {/* Debug */}
        <div className="text-xs text-gray mt-2">
          {/* <pre>{JSON.stringify(userRegisterData, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterFormComponent;
