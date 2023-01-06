import React from "react";
import Button from '../Button/Button';

function Text({ preText, content, src }) {
  return (
    <>
      <div className={`content__text content__text${src ? '--btn' : '--only'}`}>
        {preText && <span className="pre-text pre-text--red">{preText}</span>}
        <p className="text--default">{content}</p>
        {src ? <Button src={src}/> : '' }
      </div>
    </>
  );
}

export default Text;
