import React, { useState } from 'react';
// import Button from '../Button/Button';
import jsonp from 'jsonp';

const CardBlast = ({ props }) => {
  const { title, body, first_name_placeholder, last_name_placeholder, email_placeholder, button_text } = props;


  const [ firstName, setFirstName ] = useState({});
  const [ lastName, setLastName ] = useState({});
  const [ email, setEmail ] = useState({});
  const [formData, setFormData] = useState(null);


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
      console.log(data)
      setFormData(data.result);
    }) 
  }
  // TODO write conditional for state formData, so that when we get a 'success', we will show the success card info.
  // TODO add a cookie with an expiry date, so we can keep the form disabled for 24 hours or something. Ask Jenn about this.

  return (
    <div className='card-blast'>
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
            <input 
              className='card-blast__input' 
              type="text" 
              placeholder={ first_name_placeholder } 
              name="MERGE1" 
              id="MERGE1" 
              onChange={e => setFirstName({ ...firstName, MERGE1: e.target.value })} />
            <input 
              className='card-blast__input' 
              type="text" 
              placeholder={ last_name_placeholder } 
              name="MERGE2" 
              id="MERGE2" 
              onChange={e => setLastName({ ...lastName, MERGE2: e.target.value })}  />
          </div>
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
          <div className='card-blast__button-container'>
            <input type="submit" className="formEmailButton button" name="submit" value={button_text} />
          </div>
        </form>
      </div>
      </div>
      <div className='card-blast__success'>

      </div>
    </div>
  );
};

export default CardBlast;
