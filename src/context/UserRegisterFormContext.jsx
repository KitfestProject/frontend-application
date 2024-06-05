import React, { createContext, useState } from "react";

export const UserRegisterFormContext = createContext();

const initialLoginData = {
  email: "",
  password: "",
  agreeToTerms: false,
};

const initialRegistrationData = {
  name: "",
  email: "",
  preferences: {},
  password: "",
};

export const UserRegisterFormProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [userRegisterData, setUserRegisterData] = useState(
    initialRegistrationData
  );

  // Clear Login Data
  const clearLoginData = () => {
    setLoginData(initialLoginData);
  };

  // Clear Register Data
  const clearRegisterData = () => {
    setUserRegisterData(initialRegistrationData);
  };

  // Validate register input
  const validateRegisterInput = () => {
    const { name, email, password } = userRegisterData;

    if (name === "" || email === "" || password === "") {
      return false;
    }

    return true;
  };

  // Validate login inputs
  const validateLoginInput = () => {
    const { email, password } = loginData;

    if (email === "" || password === "") {
      return false;
    }

    return true;
  };

  return (
    <UserRegisterFormContext.Provider
      value={{
        loginData,
        setLoginData,
        clearLoginData,
        userRegisterData,
        clearRegisterData,
        validateLoginInput,
        setUserRegisterData,
        validateRegisterInput,
      }}
    >
      {children}
    </UserRegisterFormContext.Provider>
  );
};
