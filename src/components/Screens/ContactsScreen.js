import React from "react";
import Button from "./Button/Button";
import Text from "./Text/Text";
import Icons from "./Icons/Icons";

function ContactsScreen() {
  return (
    <div className="container__contacts grid-container">
      <Button src={'/contacts'} />
      <Icons />
      <div className="container__contacts__info">
        <p className="text--small"><a href="tel:3749000123456">+374 900 012 3456</a></p>
        <p className="text--small">Armenia, Khachatouryan st, 18, 202</p>
      </div>
      <Text preText={'Talk to us'} content={'We will consider any proposals for mutually beneficial partnerships with developers, publishers and advertisers.'} />

      <svg id="part-circle" width="70" height="728" viewBox="0 0 70 728" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1914_366)"><path d="M40.5938 1C56.6348 92.2527 65.0005 186.149 65.0005 282C65.0005 433.635 44.064 580.379 4.92383 719.5" stroke="url(#paint0_linear_1914_366)" strokeOpacity="0.5" shapeRendering="crispEdges"/></g><defs><filter id="filter0_d_1914_366" x="0.442383" y="0.913086" width="69.0576" height="726.723" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1914_366"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1914_366" result="shape"/></filter><linearGradient id="paint0_linear_1914_366" x1="34.9622" y1="1" x2="34.9622" y2="719.5" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0"/><stop offset="0.238157" stopColor="white"/><stop offset="0.753794" stopColor="white" stopOpacity="0.87244"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs></svg>
    </div>
  );
}

export default ContactsScreen;
