import React from "react";
import { Link } from "react-router-dom";

const Drawer = ({ setOpen }) => {
  return (
    <div className=" bg-orange mt-14 p-4 h-96 w-96 inset-y-0 right-0 flex flex-col fixed">
      <div className="flex h-12 justify-between items-center">
        <a href="/">
          <h1 className="pl-4 font-bold text-3xl text-white">
            Webpack React TailwindCSS
          </h1>
        </a>
      </div>
      <div className="flex flex-col p-8 space-y-4">
        <div className="h-8 flex items-center">
          <h2 className="text-2xl font-medium">Services</h2>
        </div>
        <div className="h-8 flex items-center">
          <p className="text-2xl font-medium">My Garage</p>
        </div>
        <Link to="/admin" className="h-8 flex items-center">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
