import "./Header.css"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom'

export const Header = () => {

  return (
    <div className="container">

      <Router>

        <HashLink
          to="#home"
          className="logo">
          <span>R</span>
          <span>.Zamor</span>
        </HashLink>

        <div className="section">

          <HashLink
            smooth
            to="#about"
          >

            <p>HOME</p>

          </HashLink>

          <HashLink
            smooth
            to="#about"
          >

            <p>About Me</p>

          </HashLink>

          <HashLink
            smooth
            to="#contact"
          >

            <p>Contact </p>

          </HashLink>

          <HashLink
            smooth
            to="#stack">
            <p>Tools</p>
          </HashLink>

          <a
            className="btn"
            href={require("../../assets/cv.pdf")}
            download="CV_RIRI_ZAMOR"
            target="_blank"
            rel="noreferrer"
          >
            <p>CV</p>
          </a>

        </div>

      </Router>

    </div>
  )
}