import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Drawer from "./Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-14 w-full z-30 pb-12 absolute">
      <div className="bg-blue-400 h-14 flex justify-between items-center fixed w-full px-4 shadow-xl">
        <Link to="/" className="text-xl font-bold ">
          Logo
        </Link>
        <a className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu></Menu>
        </a>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-xl font-bold ">
            Home
          </Link>
          <Link to="/apparel" className="text-xl font-medium ">
            Apparel
          </Link>
          <Link to="/beats" className="text-xl font-medium ">
            Beats
          </Link>
          <Link to="/faqs" className="text-xl font-medium ">
            Faqs
          </Link>
          <Link to="/account" className="text-xl font-medium ">
            Account
          </Link>
          <Link to="/admin" className="text-xl font-medium ">
            Admin
          </Link>
        </div>
      </div>
      {open ? <Drawer setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Header;
