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
  password: "",
  preferences: {},
};

export const UserRegisterFormProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [userRegisterData, setUserRegisterData] = useState(
    initialRegistrationData
  );

  return (
    <UserRegisterFormContext.Provider
      value={{
        loginData,
        setLoginData,
        userRegisterData,
        setUserRegisterData,
      }}
    >
      {children}
    </UserRegisterFormContext.Provider>
  );
};
