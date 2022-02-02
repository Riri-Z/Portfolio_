import React from 'react';
import './Contact.css'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const service = process.env.REACT_APP_SERVICE || "test"
  const template = process.env.REACT_APP_TEMPLATE_ID || "test"
  const user = process.env.REACT_APP_USER_ID || "test"



  const form = React.useRef<HTMLFormElement>(null!);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current,
      user)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log('process.env.', process.env.EMAIL_SERVICE_ID);
        console.log(error.text);
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
        />
        <textarea
          className='content'
          required
          placeholder="Votre message"
          id="message"
          minLength={10}
          name="message"

        />

        <input type="submit" value="Send" />


        <ReCAPTCHA
          className="captcha"
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={(e) => {
          }}
        >
        </ReCAPTCHA>


      </form>

    </div>

  )
}