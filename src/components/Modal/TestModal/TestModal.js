import React from "react";
import { useDispatch } from 'react-redux';

const TestModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
		dispatch({
			type: 'MODAL_CLOSE'
		})
	}

  return (
    <div>
      <h1>Modal One Working!</h1>
      <p>Click button to exit modal!</p>
      <button onClick={() => closeModal()}>Close Modal</button>
    </div>
  )
}

export default TestModal;
