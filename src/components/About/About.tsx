import './About.css'
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg"
import reduxIcon from "../../assets/redux-icon.svg"
import figmaIcon from "../../assets/figma-icon.svg"
import git from "../../assets/git.svg"
import npm from "../../assets/npm.svg"
import sql from "../../assets/sql.svg"
import yarn from "../../assets/yarn.svg"
import mui from "../../assets/mui.png"
import es6 from "../../assets/es6.png"
import rocket from "../../assets/rocket.svg"

export const About = () => {



  const DisplayList = (list) => {
     const category = list?.list
    return (
      <div className="tools">

        <h1 className='titleList'>{category.title}    </h1>

        <div className='toolsList'          >

          {
            category.element.map(e => {

              return (
                <div className='item'>
                  <p key={e.name}
                  >{e.name}</p>
                  <img
                    width={50}
                    src={e.logo}
                    alt={e.name}

                  />
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }


  const tools = {
    title: "Tools",
    element: [
      { name: 'Figma', logo: figmaIcon },
      { name: 'VsCode', logo: vscodeIcon },
    ]
  }


  const versionControl = {
    title: "Version Control",
    element: [
      { name: 'GIT', logo: git },
    ]
  }

  const Languages = {
    title: "Languages",
    element: [
      { name: 'HTML', logo: htmlIcon },
      { name: 'CSS3', logo: cssIcon },
      { name: 'Javascript', logo: jsIcon },
      { name: 'ES6', logo: es6 },
    ]
  }

  const frameworkAndLib = {
    title: "JS Framework/Library",
    element: [
      { name: 'TS', logo: typescriptIcon },
      { name: 'ReactJS', logo: reactIcon },
      { name: 'Redux', logo: reduxIcon },
      { name: 'NPM', logo: npm },
      { name: 'YARN', logo: yarn },
    ]
  }

  const cssFramework = {
    title: "CSS Framework/Library"
    , element: [
      { name: 'Mui', logo: mui },
      { name: 'BootStrap', logo: boostrapIcon },
    ]
  }

  const Backend = {
    title: "Backend",
    element: [
      { name: 'NodeJS', logo: nodeIcon },
      { name: 'SQL', logo: sql },
      { name: 'MongoDB', logo: mongodbIcon },
    ]
  }

  return (
    <div className="techContainer">

      <div className='rocket' >
        <img
          src={rocket}
          width={300}
          alt="rocket"

        >
        </img>
      </div>

      <div className='listTools'>
        <h1>TECH STACK </h1>
        <DisplayList
          list={Languages}
        />
        <DisplayList
          list={frameworkAndLib}
        />
        <DisplayList
          list={cssFramework}
        />
        <DisplayList
          list={Backend}
        />
        <DisplayList
          list={tools}
        />
        <DisplayList
          list={versionControl}
        />
      </div>

    </div>
  )
}