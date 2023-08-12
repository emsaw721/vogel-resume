import React, { useState } from 'react';
import { validateEmail, validateName } from '../utils/helpers';
import './style.css';

function Contact() {

  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [message, setMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'contactName') {
        setContactName(inputValue);
      } else if (inputType === 'message') {
        setMessage(inputValue);
      }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email) || !contactName) {
      setErrorMessage('Email or name is invalid');
      return;
    } 
    if (!message) {
      setErrorMessage(
        `Please write a message!`
      );
      return;
    }

    setContactName('');
    setEmail('');
    setMessage('');
    alert(`Hello ${contactName}`);
  };

  return (
  <div className='contact'>
  <h1>Contact Me</h1>
  <p>Feel free to send a note or inquire for more information.</p>
      <form className="form">
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here!"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact; 
