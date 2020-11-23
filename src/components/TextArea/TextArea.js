import React from 'react';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

const TextArea = ({ props }) => {
  const { title, body, button } = props.text_area;

  return (
    <Container>
      <div className="text-area">
        <h2>{ title }</h2>
        <p>{ body }</p>
        <Button link={ button.link } type="filled">{ button.text }</Button>
      </div>
    </Container>
  )
}

export default TextArea;
