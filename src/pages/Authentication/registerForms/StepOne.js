import React from "react";
import Button from "../../../components/UI/Button";

const StepOne = ({ handleFormChange, user }) => {
  return (
    <div className="h-full w-full py-8">
      <div className="px-2 space-y-5">
        <div item xs={12} md={8} lg={10}>
          <h5 className="text-primary-main text-left text-xl font-bold">
            Welcome!
          </h5>
          <p className="text-left text-sm font-light">
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="">
          <p className="text-lg font-bold text-primary-main">User Id</p>
          <p className="text-left text-xs font-light">
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          </p>
          <div className=" pt-4 ">
            <input
              className="border-inActive border-b-2 w-full h-12"
              type="text"
              placeholder="User Id"
            ></input>
          </div>
        </div>
        <div className="">
          <p className="text-lg font-bold text-primary-main">Password</p>
          <p className="text-left text-xs font-light">
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          </p>
          <div className=" pt-4  flex flex-col items-center">
            <input
              className="border-inActive border-b-2 w-full h-12"
              type="text"
              placeholder="Password"
            ></input>
            <input
              className="border-inActive border-b-2 w-full h-12"
              type="text"
              placeholder="Confirm Password"
            ></input>
          </div>
          <div className=" pt-4  flex flex-col items-center">
            <input
              className="border-inActive border-b-2 w-full h-12"
              type="text"
              placeholder="SSN/TaxId"
            ></input>
            <input
              className="border-inActive border-b-2 w-full h-12"
              type="text"
              placeholder="Account #"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
