import React, { useEffect } from 'react';
import IntroImage from '../../assets/intro.svg'
import './Styles.css'

export const Intro = () => {

  useEffect(() => {
    reveal()
  }, [])


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
          Hello 👋
        </p>

        <p className='name'>
          My name is Riri Zamor
        </p>

        <p className='content'>
          I am a web developer with a working proficiency in HTML, CSS, Javascript, ReactJS and NodeJs. My development environment consists of Linux Ubuntu, vscode, Github.
          I am actually playing with others javascript frameworks, and web3 technology.
          My goal is to continually grow as a developer while staying current with the latest trends and technologies. I would love to work for a team that is truly passionate about what they create, and positive energy.
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