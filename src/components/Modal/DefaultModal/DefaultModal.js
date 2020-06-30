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
      <div className='modal--container'>
        <div className='modal--close' onClick={() => closeModal()}>X</div>
        <div className='modal--content'>
          <h1>You are one of us now!</h1>
          <p>Thank you for becoming a part of our community.</p>
          <p>Keep an eye on your inbox, we will send you an email at xztuhda@gmail.com.</p>
        </div>
      </div>
    </div>
  )
}

export default DefaultModal;

// onClick={() => closeModal()}
