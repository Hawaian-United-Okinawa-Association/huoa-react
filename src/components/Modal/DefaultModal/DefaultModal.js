import React from "react";
import { useDispatch } from 'react-redux';

const DefaultModal = (props) => {
  const dispatch = useDispatch();

  const closeModal = () => {
		dispatch({
			type: 'MODAL_CLOSE'
		})
	}

  return (
    <div>
      <h1>Default Modal</h1>
      <button onClick={() => closeModal()}>Close Modal</button>
    </div>
  )
}

export default DefaultModal;
