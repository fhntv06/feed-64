import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="/gennady" className="button">
      More info
      <svg className="icon">
        <use xlinkHref="/src/images/icon.svg#arrow" />
      </svg>
    </Link>
  );
}

export default Button;