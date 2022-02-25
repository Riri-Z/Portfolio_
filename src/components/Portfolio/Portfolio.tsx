import './Portfolio.css'
import hm from "../../assets/projects/HM.png"
import cbo from "../../assets/projects/cboh.png"
import museum from "../../assets/projects/museumSearch.png"


export const Portfolio = () => {

  const projects = [
    {
      title: "Cards Battle Of Heroes",
      url: "https://cards-battle-of-heroes-g3.netlify.app/",
      img: cbo,
      description: "A React project, aiming to build a card game"
    },

    {
      title: "Museum Search",
      url: "https://museum-search-rz.netlify.app/",
      img: museum,
      description: "Travel from your computer around the world"
    },

    {
      title: "HealthyMood",
      url: "",
      img: hm,
      description: "A (used to be) recipe website "
    }
  ]


  const DisplayProjects = (props) => {
    const { projects } = props

    return (
      <div className='containerProject'>
        {
          projects.map(e =>

            <div key={e.title} className='cardProject'>
              <a href={e.url !== "" ? e.url : "#"} target="_blank" rel="noreferrer"  >
                <div>

                  <img
                    className='picture'
                    src={e.img}
                    alt={e.title}
                  />

                </div>
                <div className='middle'>
                  <p>{e.description}</p>
                </div>
              </a>

            </div>)

        }

      </div>
    )
  }

  return (
    <div className="containerPortfolio">
      <h1 className='title'>PORTFOLIO</h1>
      <DisplayProjects
        projects={projects}
      />
    </div>
  )
}