import { useState } from "react";
import {
  DynamicHelmet,
  RegisterForm,
  LoginForm,
} from "@/components";

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
        {currentStep === 1 && <LoginForm handleChangeStep={handleChangeStep} />}

        {currentStep === 2 && (
          <RegisterForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
