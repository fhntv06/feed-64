import React from "react";
import Link from '../Link/Link';

function Button({ src }) {
  return (
    <Link href={src} className={"button"}>
      More info
      <svg id="arrow" className="arrow" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.96875 1.27344L8.24219 8.54687L15.5156 1.27344" stroke="white"/></svg>
    </Link>
  );
}

export default Button;