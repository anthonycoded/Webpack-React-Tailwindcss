import React from "react";

const BarStepper = ({ activeStep }) => {
  return (
    <div className="h-20 flex flex-row items-center justify-center bg-white py-12 px-8 border-b-2 border-inActive rounded-t-xl">
      <div className="flex flex-row justify-between w-full px-20">
        <div className="flex flex-col justify-between items-center w-full">
          <div className={"w-full h-2  rounded-l-xl bg-primary-main"}></div>
          <span className="text-left pl-2 text-primary-main capitalize text-xl font-bold">
            {activeStep >= 0 ? "Step 1" : null}
          </span>
        </div>
        <div className="flex flex-col justify-between items-center w-full px-2">
          <div
            className={
              activeStep >= 1
                ? "w-full h-2   bg-primary-main"
                : "w-full bg-inActive px-4 h-2"
            }
          ></div>
          <span className="text-left pl-2 text-primary-main capitalize text-xl font-bold">
            {activeStep >= 1 ? "Step 2" : null}
          </span>
        </div>
        <div className="flex flex-col justify-between items-center w-full pr-2">
          <div
            className={
              activeStep >= 2
                ? "w-full h-2   bg-primary-main"
                : "w-full bg-inActive px-4 h-2"
            }
          ></div>
          <span className="text-left pl-2 text-primary-main capitalize text-xl font-bold">
            {activeStep >= 2 ? "Step 3" : null}
          </span>
        </div>
        <div className="flex flex-col justify-between items-center w-full">
          <div
            className={
              activeStep >= 3
                ? "w-full h-2  bg-primary-main"
                : "px-4 bg-inActive w-full rounded-r-xl h-2"
            }
          />
          <span className="text-left pl-2 text-primary-main capitalize text-xl font-bold">
            {activeStep >= 3 ? "Step 4" : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BarStepper;
