import React, { useEffect } from 'react';
import IntroImage from '../../assets/intro.svg'
import './Styles.css'

export const Intro = () => {

  window.addEventListener("scroll", reveal);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal")
    let revealsPicture = document.querySelectorAll(".revealPicture")
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    for (let i = 0; i < revealsPicture.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealsPicture[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        revealsPicture[i].classList.add("active");
      } else {
        revealsPicture[i].classList.remove("active");
      }
    }

  }


  return (
    <div className='introContainer'>

      <div className="description reveal">

        <p className='hello'>
          Bonjour👋
        </p>

        <p className='name'>
          Je suis Riri Zamor
        </p>

        <p className='content'>
          Développeur web full stack spécialisé en ReactJS et NodeJS
        </p>

      </div>

      <div className="picture revealPicture">
        <img
          src={IntroImage}
          style={{ height: 600, width: 400 }}
          alt="website logo"
        />
      </div>

    </div>
  )
}
