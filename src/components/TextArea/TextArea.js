import React from 'react';
import Button from 'components/Button/Button';

const TextArea = ({ props }) => {
  const { title, body, button } = props.text_area;

  return (
      <div className="text-area">
        <div>
          <p className="text-area__subtitle">ABOUT US</p>
          <h2 className="text-area__title">{ title }</h2>
        </div>
        <div>
          <p className="text-area__body">{ body }</p>
          <Button link={ button.link } type="filled">{ button.text }</Button>
        </div>
      </div>
  )
}

export default TextArea;
