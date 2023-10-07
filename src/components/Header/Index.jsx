/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import "./header.css"

export const Header = ({ modeDark, onclick, desactiveHi }) => {
  const [activeHamburguesa, setActiveHamburguesa] = useState(false)

  return (
    <header className={`${!desactiveHi&&"mostrar-header"}`} style={{background: `${modeDark ? "rgba(31, 31, 31, .96)" : "rgba(243, 243, 243, .96)"}`}}>
      <nav style={{color:`${modeDark ? "white" : "black"}`}}>
        <a href="#" className="logo" >Renzo AE</a>
        <ul>
          <li onClick={onclick}>
            {
              modeDark ?  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path></svg>
                          :
                          <svg stroke="currentColor" color="black" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg>
            }
          </li>
          <li>
            <button className={`la-x ${activeHamburguesa&&"active"}`} onClick={() => setActiveHamburguesa(!activeHamburguesa)}>
              <div style={{ background: `${modeDark ? "white" : "black"}`}}></div>
              <div style={{ background: `${modeDark ? "white" : "black"}`}}></div>
              <div style={{ background: `${modeDark ? "white" : "black"}`}}></div>
            </button>
          </li>
          <li className="option">
            <a href="#acerca-de-mi" style={{ color: `${modeDark ? "white" : "black"}`}} >Acerca de mi</a>
            <div className="underline"></div>
          </li>
          <li className="option">
            <a href="#" style={{ color: `${modeDark ? "white" : "black"}` }} >Proyectos</a>
            <div className="underline"></div>
          </li>
        </ul>
      </nav>
      <div 
        className={`modal-nav ${activeHamburguesa&&"active-menu-nav"}`} 
        id="modal-nav" 
        onClick={(event) => event.target.id == "modal-nav" && setActiveHamburguesa(false)} 
        style={{color:`${modeDark ? "white" : "black"}`, borderTop:`2px solid ${modeDark ? "white" : "black"}`}}
      >
        <div className="contenedor" style={{background: `${modeDark ? "rgba(31, 31, 31, .96)" : "rgba(243, 243, 243, .96)"}`}}>
          <ul>
            <li className="">
              <div className="underline"></div>
              <a href="#acerca-de-mi" style={{ color: `${modeDark ? "white" : "black"}`}} >Acerca de mi</a>
            </li>
            <li className="">
              <div className="underline"></div>
              <a href="#" style={{ color: `${modeDark ? "white" : "black"}` }} >Proyectos</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}