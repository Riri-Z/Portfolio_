import React, { useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';


export const Contact = () => {

  const [emailSent, setEmailSent] = useState(false)

  const service = process.env.REACT_APP_SERVICE
  const template = process.env.REACT_APP_TEMPLATE_ID
  const user = process.env.REACT_APP_USER_ID

  const form = React.useRef<HTMLFormElement>(null!);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service as string, template as string, form.current,
      user as string)
      .then((result) => {
        setEmailSent(true)
      }, (error) => {
        setEmailSent(false)
      });
  };

  return (

    <div id="contact" >

      <h1 className='title'>CONTACT</h1>

      <form className='forms' ref={form} onSubmit={sendEmail}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          required
          autoComplete='new-password'
        />
        <textarea
          className='content'
          required
          placeholder="Votre message"
          id="message"
          minLength={10}
          name="message"

        />

        <input
          className='btn-contact'
          type="submit"
          value={emailSent ? "Email envoyer ! " : "Envoyer"}
          disabled={emailSent ? true : false}
        />


      </form>

    </div>

  )
}