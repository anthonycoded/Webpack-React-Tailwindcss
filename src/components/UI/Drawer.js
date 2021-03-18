import React from "react";
import { Link } from "react-router-dom";

const Drawer = ({ setOpen }) => {
  return (
    <div
      className="bg-yellow-400 h-96 w-72 inset-y-0 right-0 top-14 transform flex flex-col fixed rounded-l-xl"
      onMouseLeave={(e) => setOpen(false)}
    >
      <div className="flex flex-col px-8 py-2 space-y-4">
        <Link
          to="/"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/apparel"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Apparel
        </Link>
        <Link
          to="/beats"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Beats
        </Link>
        <Link
          to="/faqs"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Faqs
        </Link>
        <Link
          to="/account"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Account
        </Link>

        <Link
          to="/admin"
          className="text-2xl font-medium"
          onClick={() => setOpen(false)}
        >
          Admin
        </Link>
        <Link
          to="/login"
          className="text-2xl font-medium"
          onclick={() => setOpen(false)}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-2xl font-medium"
          onclick={() => setOpen(false)}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
