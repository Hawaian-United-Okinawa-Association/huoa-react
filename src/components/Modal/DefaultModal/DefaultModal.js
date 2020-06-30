import React from "react";
import { useDispatch } from 'react-redux';

import './DefaultModal.scss';

const DefaultModal = (props) => {
  const dispatch = useDispatch();

  const closeModal = () => {
		dispatch({
			type: 'MODAL_CLOSE'
		})
	}

  return (
    <div className='modal'>
      <div className='modal--overlay'></div>
      <div className='modal--content'>
        <h1>Default Modal</h1>
        <button onClick={() => closeModal()}>Close Modal</button>
      </div>
    </div>
  )
}

export default DefaultModal;
