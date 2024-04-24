import React from "react";
import DynamicHelmet from "../../components/DynamicHelmet";

const Login = () => {
  return (
    <div>
      <DynamicHelmet
        title="KITFT - Login"
        description="Login to your KITFT account."
      />
      <div className="">
        <h1 className="text-5xl font-[800] tracking-tight">
          Welcome to login page
        </h1>
      </div>
    </div>
  );
};

export default Login;
