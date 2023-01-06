import React from "react";
import Link from "../../Screens/Link/Link";

function LogoHeader() {
  return(
    <div className='header__logo'>
      <div className='logo__title'><Link href="/">FEED 64</Link></div>
      <div className='logo__dectiprion text--small'>Canned Interactive</div>
    </div>
  );
}

export default LogoHeader;
