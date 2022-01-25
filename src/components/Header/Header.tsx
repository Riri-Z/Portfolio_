import "./Styles.css"
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom'

export const Header = () => {




  return (
    <div className="container">

      <Router>
        <HashLink
          smooth
          to="#home"
          className="logo">
          <span>R</span>
          <span>.Zamor</span>
        </HashLink>

        <nav className="section">
          <NavHashLink smooth to="#home">
            HOME
          </NavHashLink>
          <NavHashLink smooth to="#about">
            About Me
          </NavHashLink>
          <NavHashLink smooth to="#contact">
            Contact
          </NavHashLink>
          <a
            className="btn"
            href={require("../../assets/cv.pdf")}
            download="CV_RIRI_ZAMOR"
            target="_blank"
          >
            CV
          </a>
        </nav>

      </Router>




    </div>
  )
}