import React from 'react'
import {Link} from "react-router-dom"


const Register = () => {
    return (
      <div className="w-full h-full bg-yellow-400 p-8 py-12 space-y-8">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
          <p className="text-2xl font-bold">Welcome</p>
          <p className="text-xl font-medium"> </p>
          <p className="text-xl font-medium">To get started create an acount</p>
        </div>
        <div className="h-full w-full px-8 space-y-8">
          <div className="flex flex-col items-center space-y-2">
            <input
              type="text"
              className="h-12 w-full px-4 rounded-full shadow-lg"
              id="fname"
              placeholder="First Name"
            ></input>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <input
              type="text"
              className="h-12 w-full px-4 rounded-full shadow-lg"
              id="lname"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <input
              type="email"
              className="h-12 w-full px-4 rounded-full shadow-lg"
              id="email"
              placeholder="example@email.com"
            ></input>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <input
              type="password"
              className="h-12 w-full px-4 rounded-full shadow-lg"
              placeholder="Password"
            ></input>

            <div className="flex justify-end w-full">
              <Link to="/password-reset" className="h-12 w-32">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full h-full">
          <button className="flex justify-center items-center py-2 px-2 bg-green-400 hover:bg-green-300 h-12 w-32 rounded-xl shawdow-xl">
            Create
          </button>
        </div>
        <div className="flex justify-center">
          <Link to="/login" className="text-md font-sm">
            Already have an account?{" "}
            <span className="text-lg font-bold underline">Sign In</span>
          </Link>
        </div>
      </div>
    );
}

export default Register
