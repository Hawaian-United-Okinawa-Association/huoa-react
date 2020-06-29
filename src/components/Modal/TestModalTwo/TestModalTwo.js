import React from "react";
import { useDispatch } from 'react-redux';

const TestModalTwo = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
		dispatch({
			type: 'MODAL_CLOSE'
		})
	}

  return (
    <div>
      <h1>Modal Two Working!</h1>
      <p>Click button to exit modal!</p>
      <button onClick={() => closeModal()}>Close Modal</button>
    </div>
  )
}

export default TestModalTwo;
