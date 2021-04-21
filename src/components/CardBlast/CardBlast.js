import React, { useState } from 'react';
import jsonp from 'jsonp';

import checkmark from './check.svg';
import Button from '../Button/Button';

const CardBlast = ({ props }) => {
  const { title, body, first_name_placeholder, last_name_placeholder, email_placeholder, button_text } = props;


  const [ firstName, setFirstName ] = useState({});
  const [ lastName, setLastName ] = useState({});
  const [ email, setEmail ] = useState({});
  const [formData, setFormData] = useState("");


  const submit = (event) => {  
    event.preventDefault();
    console.log(firstName, lastName, email);
    let api = `https://huoa.us10.list-manage.com/subscribe/post-json?u=fb4e3b9e255496f68e4d87e35&id=96858fbc3b&MERGE0=${email.MERGE0}.com&MERGE1=${firstName.MERGE1}&MERGE2=${lastName.MERGE2}`
    
    jsonp(api, {
      param: "c"
    }, (error, data) => {
      if (error) {
        console.log(error)
      }
      console.log(data.result)
      setFormData(data.result);
      console.log(formData)
    }) 
  }
  // TODO write conditional for state formData, so that when we get a 'success', we will show the success card info.
  
  // TODO fix the conditional error to get the builds to work.

  return (
    <div className='card-blast'>
      {formData === "fail" || formData === "" &&
        <div className='card-blast__form--wrapper'>
          <div className='card-blast__text'>
            <h3 className='card-blast__title'>{ title }</h3>
            <p className='card-blast__body'>{ body }</p>
          </div>
          <div className='card-blast__form'>
            <form 
              onSubmit={submit}>
              <input 
                type="hidden" 
                name="u" 
                value="fb4e3b9e255496f68e4d87e35" />
              <input 
                type="hidden" 
                name="id" 
                value="96858fbc3b" />
              <div className="card-blast__form__name-container">
                <div className="card-blast__form__input-container">
                  <input 
                    className='card-blast__input' 
                    type="text" 
                    placeholder={ first_name_placeholder } 
                    name="MERGE1" 
                    id="MERGE1" 
                    onChange={e => setFirstName({ ...firstName, MERGE1: e.target.value })}
                    required={true} />
                  <p className="card-blast__input__error-message">Please enter first name*</p>
                </div>
                <div className="card-blast__form__input-container">
                  <input 
                    className='card-blast__input' 
                    type="text" 
                    placeholder={ last_name_placeholder } 
                    name="MERGE2" 
                    id="MERGE2" 
                    onChange={e => setLastName({ ...lastName, MERGE2: e.target.value })}
                    required={true} />
                  <p className="card-blast__input__error-message">Please enter last name*</p>
                </div>
              </div>
              <div className="card-blast__form__name-container">
              </div>
              <div className="card-blast__form__input-container">
                <input 
                  className='card-blast__input' 
                  type="email"
                  placeholder={ email_placeholder } 
                  autoCapitalize="none" 
                  autoCorrect="off" 
                  name="MERGE0" 
                  id="MERGE0" 
                  onChange={e => setEmail({ ...email, MERGE0: e.target.value })}
                  required={true} />
                <p className="card-blast__input__error-message">Please enter a valid Email Address*</p>
              </div>
              <div className='card-blast__button-container'>
                <Button type='submit' value={button_text} />
              </div>
            </form>
          </div>
        </div>
      }
      {formData === "success" &&
        <div className='card-blast__success'>
          <div className='card-blast__success__header-container'>
            <img className='card-blast__success__header-icon' src={checkmark} alt="success"/>
            <p className='card-blast__success__header-title'>You've Subscribed to Purple Blast</p>
          </div>
          <p className='card-blast__success__body'>Please confirm your subscription by checking the email you provided.</p>
        </div>
      }
    </div>
  );
};

export default CardBlast;
