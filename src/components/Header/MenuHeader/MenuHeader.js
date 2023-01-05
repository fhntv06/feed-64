import React from "react";

function MenuHeader() {
  return (
    <ul className='header__menu'>
      <li className='menu__item active'>About</li>
        <ul className='menu__list'>
          <li className='menu__item'>Gennady</li>
          <li className='menu__item'>Throworm</li>
          <li className='menu__item menu__item--concept'>Black Crow</li>
        </ul>
      <li className='menu__item'>Contacts</li>
    </ul>
  );
}

export default MenuHeader;
