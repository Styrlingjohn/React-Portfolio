import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Comments, setComments] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'Comments') {
      setComments(inputValue);
    };
  };
    const handleContactSubmit = (e) => {

      e.preventDefault();


      if (!validateEmail(email)) {
        setErrorMessage('Enter a valid Email address');

        return;
      }
      if (!Comments) {
        setErrorMessage('Please provide comments');

        return;
      }
      if (!Name) {
        setErrorMessage('Please provide your name')
        
        return;
      }
      if (email && Name && Comments){
        setErrorMessage('Thank you for your feedback')

        return;
      }

      setName('');
      setEmail('');
      setComments('');
    };
  
    return (
      <div className='form'>
        <h1>Thanks for your interest, leave a comment about how I can improve. </h1>
        <contact>
          <input
            className="form-input"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            className="form-input"
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            className="form-input"
            value={Comments}
            name="Comments"
            onChange={handleInputChange}
            type="text"
            placeholder="Comments"
          />
          <button className="form-input" type="button" onClick={handleContactSubmit}>Submit</button>
        </contact>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
}
export default Contact;