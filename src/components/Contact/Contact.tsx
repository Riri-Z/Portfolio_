import React, { useState, useRef, useEffect } from 'react';
import './Contact.css'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser';

export const Contact = () => {

   const service = process.env.REACT_APP_SERVICE || "test"
   const template = process.env.REACT_APP_TEMPLATE_ID || "test"
   const user = process.env.REACT_APP_USER_ID || "test"
   
   useEffect(() => {
  console.log("🚀 ~ file: Contact.tsx ~ line 9 ~ Contact ~ service", service)
  console.log("🚀 ~ file: Contact.tsx ~ line 10 ~ Contact ~ template", template)
  console.log("🚀 ~ file: Contact.tsx ~ line 11 ~ Contact ~ user", user)

},[])

  const form = React.useRef<HTMLFormElement>(null!);

  /*   const [form, setForm] = useState({
      email: "",
      content: ""
    }) */

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service,template, form.current,
    user)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log('process.env.', process.env.EMAIL_SERVICE_ID);
        console.log(error.text);
      });
  };

  /*   const handleChange = (value) => {
      setForm(value)
    } */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('first');
  }

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