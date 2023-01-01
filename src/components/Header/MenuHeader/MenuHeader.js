import React from "react";
import'./MenuHeader.module.scss';

function MenuHeader() {
  return(
    <ul styleName='header__menu'>
      <li styleName='menu__item'>ABOUT</li>
      <li styleName='menu__item'>Gennady</li>
      <li styleName='menu__item menu__item--concept'>Throworm</li>
      <li styleName='menu__item'>Black Crow</li>
      <li styleName='menu__item'>CONTACTS</li>
    </ul>
  );
}

export default MenuHeader;