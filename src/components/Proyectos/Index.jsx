/* eslint-disable react/prop-types */
import "./proyectos.css"
import { projects } from "../../assets/dataProjects"
import { useState } from "react"

export const Proyectos = ({ modeDark }) => {
  const [dataProjectSelected, setDataProjectSelected] = useState(projects[0])
  const [indexProjectSelected, setIndexProjectSelected] = useState(0)

  const selectProject = (index) => {
    const dataProject = projects[index]
    setDataProjectSelected(dataProject)
    setIndexProjectSelected(index)
    document.querySelector(".modal-project").classList.add("active-modal-project")
  }

  const closeModalProject = (e) => {
    if (e.target.classList[0] == "modal-project"){
      document.querySelector(".modal-project").classList.remove("active-modal-project")
    }
  }

  return (
    <div className="content-proyectos" id="proyectos">
      <div className="space-proyectos">
        <h1>Proyectos</h1>
        <div className="proyectos">
          {
            projects.map((project, index) => 
              <div key={index} className="project">
                
                <div className="imagen" onClick={() => selectProject(index)}>
                  <img src={`../../img/project-${index + 1}.png`} alt="" />
                </div>
                
                <h2>{project.name}</h2>
                <div className="links">
                  <a href={project.respository} style={{ color: `${modeDark ? "white" : "black"}`}} target="_blank" rel="noopener noreferrer">Código</a>
                  <a href="#" style={{ color: `${modeDark ? "white" : "black"}`}}>Ver</a>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="modal-project" onClick={closeModalProject}>
        <div className="content" style={{background: `${modeDark ? "rgba(31, 31, 31, .96)" : "rgba(243, 243, 243, .96)"}`}}>
          <div className="modal-info">
            <img src={`../../img/project-${indexProjectSelected + 1}.png`} width="60" alt="" className="modal-img-project" />
            <div>
              <h1>{dataProjectSelected.name}</h1>
              <p className="descripton">{dataProjectSelected.description}</p>
              <ul className="modal-skills">
                {
                  dataProjectSelected.skills.map((skill, index) => 
                    <li key={index}>
                      <img src={`../../../svg/logo-${modeDark? skill.nameLogo+"-dark" : skill.nameLogo}.svg`} alt="" />
                      {skill.nameSkill}
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <div className="modal-buttons">
            <a href={dataProjectSelected.respository} style={{ color: `${modeDark ? "white" : "black"}`}} target="_blank" rel="noopener noreferrer">Código</a>
            <a href="#" style={{ color: `${modeDark ? "white" : "black"}`}}>Ver</a>
          </div>
        </div>
        <div 
          className="close"
          onClick={() => document.querySelector(".modal-project").classList.remove("active-modal-project")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}