import React from "react";
import AboutScreen from '../Screens/AboutScreen';
import GennadyScreen from '../Screens/GennadyScreen';
import ThrowormScreen from '../Screens/ThrowormScreen';
import BlackCrowScreen from '../Screens/BlackCrowScreen';
import ContactsScreen from '../Screens/ContactsScreen';
//  через редакс сделать получение объекта с данными страниц

function Main() {
  return (
    <main className='main grid-container'>
      <div id="about" className='main__content grid-container bg bg-about'>
        <div className="container grid-container offset--out-top">
          <AboutScreen />
        </div>
      </div>

      <div id="gennady" className='main__content grid-container bg bg-gennady'>
        <div className="container grid-container">
          <GennadyScreen />
        </div>
      </div>

      <div id="throworm" className='main__content grid-container bg bg-throworm'>
        <div className="container grid-container">
          <ThrowormScreen />
        </div>
      </div>

      <div id="blackCrow" className='main__content grid-container bg'>
        <div className="container grid-container">
          <BlackCrowScreen />
        </div>
      </div>

      <div id="contacts" className='main__content grid-container bg bg-contact'>
        <div className="container grid-container offset--out-top">
          <ContactsScreen />
        </div>
      </div>
    </main>
  );
}

export default Main;