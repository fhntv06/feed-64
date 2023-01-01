import React from "react";
import LogoHeader from "./LogoHeader/LogoHeader";
import MenuHeader from './MenuHeader/MenuHeader';
import './Header.module.scss';

function Header() {
  return(
    <div styleName='header'>
      <LogoHeader />
      <MenuHeader />
    </div>
  );
}

export default Header;
