import React from "react";
import LogoHeader from "./LogoHeader/LogoHeader";
import MenuHeader from './MenuHeader/MenuHeader';

function Header() {
  return(
    <div className='header'>
      <LogoHeader />
      <MenuHeader />
    </div>
  );
}

export default Header;
