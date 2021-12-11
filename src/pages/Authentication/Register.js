import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarStepper from "../../components/UI/BarStepper";
import StepOne from "./registerForms/StepOne";
import StepThree from "./registerForms/StepThree";
import StepTwo from "./registerForms/StepTwo";

const Register = () => {
  const drawerWidth = 280;

  const steps = [
    "Personal Information",
    "Account Information",
    "Forms",
    "Confirm",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [formFilledByUser, setFormFilledByUser] = useState(true);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    mobilePhone: "",
    workPhone: "",
    homePhone: "",
    birthday: "",
    userId: "",
    password: "",
    confirmPassword: "",
    ssn: "",
    account: "",
  });

  //Setting state of forms//

  const [formsChecked, setFormsChecked] = useState({
    firstForm: false,
    secondForm: false,
    thirdForm: false,
    fourthForm: false,
  });

  //Basic form Validation// Not working// Would suggest Data Format Validation//

  const validationCheck = (inputsvalue, formsValue) => {
    let inputValueTruthy = undefined;
    let formsValueTruthy = undefined;
    for (let key in inputsvalue) {
      if (inputsvalue[key] === "") {
        inputValueTruthy = false;
      }
    }
    for (let key in formsValue) {
      if (formsValue[key] === false) {
        formsValueTruthy = false;
      }
    }

    if (inputValueTruthy && formsValueTruthy) {
      setFormFilledByUser(true);
    }
  };

  const handleTerms = (e) => {
    setFormsChecked({
      ...formsChecked,
      [e.target.name]: e.target.checked,
    });
  };
  const handleFormChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Switch board function to navigate from each page//

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <StepOne
            handleFormChange={handleFormChange}
            user={user}
            handleNext={handleNext}
          />
        );
      case 1:
        return <StepTwo handleFormChange={handleFormChange} user={user} />;
      case 2:
        return (
          <StepThree
            handleFormChange={handleFormChange}
            handleTerms={handleTerms}
            formsChecked={formsChecked}
          />
        );
      // case 3:
      //   validationCheck(user, formsChecked);
      //   return <Confirm {...user} {...formsChecked} />;
      default:
        return "Unknown step";
    }
  }

  //Button handlers//

  //Next button handler//
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //Back button handler//
  const handleBack = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-row justify-start bg-black h-full py-12">
      <div className="w-1/3 h-full"></div>
      <div className="w-full h-full px-12 py-12 flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl w-2/3 h-5/6 ">
          <BarStepper activeStep={activeStep}></BarStepper>
          <div className="px-32 w-full">{getStepContent(activeStep)}</div>
          <div className="flex flex-col items-center justify-center space-y-2 py-7">
            <button
              onClick={handleNext}
              className="h-12 bg-primary-main font-bold text-lg flex flex-row items-center justify-center rounded-xl shadow-lg px-12 py-4"
            >
              <p className="text-white font-bold ">Continue</p>
            </button>
            <button className="">Cancel</button>
          </div>
          <div className="border-t-2 border-inActive rounded-b-xl shadow-xl flex flex-row justify-between items-center h-12 w-full divide-x-2 divide-inActive">
            <div className="h-full w-full flex flex-row items-center justify-center">
              <button className="text-primary-main font-medium ">
                Contact Us
              </button>
            </div>
            <div className="h-full w-full flex flex-row items-center justify-center">
              <button className="text-primary-main font-medium ">
                How can we help you?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
