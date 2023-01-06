import React from "react";
import Link from '../../Screens/Link/Link';

function MenuHeader() {
  return (
    <ul className='header__menu'>
      <li className='menu__item active'><Link href={'#about'}>About</Link></li>
        <ul className='menu__list'>
          <span className="pre-text pre-text--gray">GAMES</span>
          <li className='menu__item'><Link href={'#gennady'}>Gennady</Link></li>
          <li className='menu__item'><Link href={'#throworm'}>Throworm</Link></li>
          <li className='menu__item menu__item--concept'><Link href={'#blackCrow'}>Black Crow</Link></li>
        </ul>
      <li className='menu__item'><Link href={'#contacts'}>Contacts</Link></li>
    </ul>
  );
}

export default MenuHeader;
