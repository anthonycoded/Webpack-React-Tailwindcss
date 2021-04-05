import React, { useState } from "react";
import {Link} from "react-router-dom"
import Menu from "./Menu";
import Drawer from "./Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="pb-12 fixed h-full w-full mb-8">
      <div className="bg-gray-700 h-14 flex justify-between items-center fixed w-full px-4">
        <Link to="/" className="text-xl font-bold text-yellow-400">
          Webpack-React-Tailwind
        </Link>
        <a className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu></Menu>
        </a>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-xl font-bold text-yellow-400">
            Home
          </Link>
          <Link to="/apparel" className="text-xl font-medium text-yellow-400">
            Apparel
          </Link>
          <Link to="/beats" className="text-xl font-medium text-yellow-400">
            Beats
          </Link>
          <Link to="/faqs" className="text-xl font-medium text-yellow-400">
            Faqs
          </Link>
          <Link to="/account" className="text-xl font-medium text-yellow-400">
            Account
          </Link>
          <Link to="/admin" className="text-xl font-medium text-yellow-400">
            Admin
          </Link>
        </div>
      </div>
      {open ? <Drawer setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Header;
