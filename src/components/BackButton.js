import React from "react";
import { Link } from "react-router-dom";

const BackButton = (to) => {
  return (
    <Link to={to} className="text-primary-main">
      Back
    </Link>
  );
};

export default BackButton;
