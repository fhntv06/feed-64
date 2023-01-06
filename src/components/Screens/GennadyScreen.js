import React from "react";
import Text from "./Text/Text";
import ColorText from "./ColorText/ColorText";

function GennadyScreen() {
  return (
    <>
      <ColorText
        color={'blue'}
        colorBgText={'in work'}
        colorText={'early access on steam'}
      />
      <Text
        content={'Dark roguelite about endless fight with aliens on their territory'}
        src={'/gennady'}
      />
    </>
  );
}

export default GennadyScreen;
