import React, { useContext } from "react";
import { UserRegisterFormContext } from "../../context/UserRegisterFormContext";
import { PrimaryButton } from "../index.mjs";
import { BiLogoFacebookCircle, BiLogoGoogle } from "react-icons/bi";
import Loader from "../utils/Loader";
import axiosClient from "../../axiosClient";
import useAuthStore from "../store/UseAuthStore";

const LoginFormComponent = ({ handleChangeStep }) => {
  const { loginData, setLoginData } = useContext(UserRegisterFormContext);
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const handleLoginInputChange = (ev) => {
    const { name, value, type, checked } = ev.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginUser = async (ev) => {
    ev.preventDefault();

    try {
      await axiosClient.post("/users/sign_in", loginData).then((response) => {
        const { data } = response.data;
        login(data, data.token);
        console.log(data);
        return true;
      });
    } catch (error) {
      return error;
    }
  };

  return (
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
              value={loginData.password}
              onChange={handleLoginInputChange}
              className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-100 dark:bg-[#813c2a] dark:text-white font-light"
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
          <PrimaryButton
            title="Sign In"
            classes="w-full flex justify-center items-center"
            handleClick={handleLoginUser}
          />
          <button
            onClick={handleLoginUser}
            className="w-full flex justify-center items-center btn bg-primary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-darkGray hover:border-primary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter"
          >
            <Loader />
          </button>
        </div>

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

      {/* Debug */}
      <div className="text-xs text-gray mt-2">
        {/* <pre>{JSON.stringify(loginData, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default LoginFormComponent;
