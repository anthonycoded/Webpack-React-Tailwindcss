import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-400 w-full h-full">
      <p>Foooter goes here</p>
      <div className="grid grid-cols-2 justify-items-center gap-8">
        <p className="text-yellow-400 font-main capitalize">Call to order</p>
        <p className="text-yellow-400 font-main capitalize">Menu</p>
        <p className="text-yellow-400 font-main capitalize">Location</p>
        <p className="text-yellow-400 font-main capitalize">About us</p>
        <p className="text-yellow-400 font-main capitalize">Contact us</p>
      </div>
    </div>
  );
};

export default Footer;
