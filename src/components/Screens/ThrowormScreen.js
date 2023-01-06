import React from "react";
import Text from "./Text/Text";
import ColorText from "./ColorText/ColorText";

function ThrowormScreen() {
  return (
    <>
      <ColorText
        color={'green'}
        colorBgText={'released v1.0'}
        colorText={'available  on google play & app store'}
      />
      <Text
        content={'Casual story about a worm in an endless corridor'}
        src={'/throworm'}
      />
    </>
  );
}

export default ThrowormScreen;
