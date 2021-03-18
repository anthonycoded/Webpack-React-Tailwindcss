import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full bg-yellow-400 p-8 py-12 space-y-8">
      <div className="h-32 w-full flex justify-center items-center mb-4">
        <img src="" alt="bear" className="h-32 rounded-md"></img>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="font-bold text-4xl">Welcome Back!</p>
        <p className="text-xl font-medium">Sign into your account</p>
      </div>
      <div className="h-full w-full px-8 space-y-6">
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
          Sign In
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/register" className="text-md font-sm">
          Don't have an account?{" "}
          <span className="text-lg font-bold underline">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
