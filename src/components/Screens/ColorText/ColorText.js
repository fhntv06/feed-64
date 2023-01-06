import React from "react";

function ColorText({colorBgText, colorText, color}) {
  const colorBg = color === 'green' ? 'bggreen' : color === 'blue' ? 'bgblue' : '';
  // логика обработки слов
  // обернуть слова в <span className="text-color--blue">{слово}</span>
  return (
    <div className="text-color">
      <p className={`text-color--${colorBg}`}>{colorBgText}</p>
      <p>{colorText}</p>
    </div>
  );
}

export default ColorText;
