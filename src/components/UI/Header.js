import React, { useState } from "react";
import Menu from "../UI/Menu";
import Drawer from "../UI/Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="h-12 w-full flex flex-col">
      <div className="h-12 flex justify-between items-center bg-gray-800 w-full px-2 fixed">
        <a href="/">
          <h1 className="pl-4 text-yellow-400 font-bold text-2xl">
            {open ? undefined : "Webpack React TailwindCSS"}
          </h1>
        </a>
        <a className="" onClick={() => setOpen(!open)}>
          <Menu></Menu>
        </a>
      </div>
      {open ? <Drawer></Drawer> : undefined}
    </div>
  );
};

export default Header;
