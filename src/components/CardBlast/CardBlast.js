import axios from 'axios';
import React, { useState } from 'react';

// import Button from '../Button/Button';

const CardBlast = ({ props }) => {
  const { title, body, first_name_placeholder, last_name_placeholder, email_placeholder, button_text } = props;

  //TODO - build the api request function, using the mailchimp_url api from wordpress. Then check the return, and start building the logic if the email already exists in the return, then show a confirmation on the form. Probably over the email field.
  const [ firstName, setFirstName ] = useState({});
  const [ lastName, setLastName ] = useState({});
  const [ email, setEmail ] = useState({});



  const submit = (e) => {    
    let api = `https://huoa.us10.list-manage.com/subscribe/post?u=fb4e3b9e255496f68e4d87e35&id=96858fbc3b&MERGE0=${email.MERGE0}.com&MERGE1=${firstName.MERGE1}&MERGE2=${lastName.MERGE2}`

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
        console.log('Success: ', response);
      } else {
        console.error('Error: ', response);
      }
    });
  }

  // I was going to try to use axios, but I couldn't figure out how to rewrite this for the data property to use useState and not this.state.

  // const submitAxios = (event) => {
  //   event.preventDefault();
  //   axios({
  //     url: 'https://huoa.us10.list-manage.com/subscribe/post?u=fb4e3b9e255496f68e4d87e35&id=96858fbc3b',
  //     method: 'post',
  //     data: this.state,
  //     dataType: 'json'
  //   }).then(response => {
  //     if (response.ok) {
  //       console.log('Success: ', response);
  //     } else {
  //       console.error('Error: ', response);
  //     }
  //   });
  // }

  // I was writing this to try to use axios, but abandoned it when I couldn't figure out how to access state for the axios call data.
  
  // return (
  //   <div className='card-blast'>
  //     <div className='card-blast__text'>
  //       <h3 className='card-blast__title'>{ title }</h3>
  //       <p className='card-blast__body'>{ body }</p>
  //     </div>
  //     <div className='card-blast__form'>
  //       <form 
  //         onSubmit={submitAxios} 
  //         action="https://huoa.us10.list-manage.com/subscribe/post"
  //         method="POST">
  //         <input 
  //           type="hidden" 
  //           name="u" 
  //           value="fb4e3b9e255496f68e4d87e35" />
  //         <input 
  //           type="hidden" 
  //           name="id" 
  //           value="96858fbc3b" />
  //         <div className="card-blast__form__name-container">
  //           <input 
  //             className='card-blast__input' 
  //             type="text" 
  //             placeholder={ first_name_placeholder } 
  //             name="MERGE1" 
  //             id="MERGE1"
  //             value={firstName.MERGE1}
  //             onChange={e => setFirstName({ ...firstName, MERGE1: e.target.value })} />
  //           <input 
  //             className='card-blast__input' 
  //             type="text" 
  //             placeholder={ last_name_placeholder } 
  //             name="MERGE2" 
  //             id="MERGE2"
  //             value={lastName.MERGE2}
  //             onChange={e => setLastName({ ...lastName, MERGE2: e.target.value })}  />
  //         </div>
  //         <input 
  //           className='card-blast__input' 
  //           type="email"
  //           placeholder={ email_placeholder } 
  //           autoCapitalize="none" 
  //           autoCorrect="off" 
  //           name="MERGE0" 
  //           id="MERGE0"
  //           value={email.MERGE0}
  //           onChange={e => setEmail({ ...email, MERGE0: e.target.value })}  />
  //         <div className='card-blast__button-container'>
  //           <input type="submit" className="formEmailButton button" name="submit" value={button_text} />
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  return (
    <div className='card-blast'>
      <div className='card-blast__text'>
        <h3 className='card-blast__title'>{ title }</h3>
        <p className='card-blast__body'>{ body }</p>
      </div>
      <div className='card-blast__form'>
        <form 
          onSubmit={submit} 
          action="https://huoa.us10.list-manage.com/subscribe/post"
          method="POST">
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
            required="true" />
          <div className='card-blast__button-container'>
            <input type="submit" className="formEmailButton button" name="submit" value={button_text} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardBlast;
