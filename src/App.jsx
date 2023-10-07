import { useEffect, useState } from 'react'
import { Header } from './components/Header/Index'
import './App.css'
import { Presentacion } from './components/Presentacion/Index'
import { AcercaDeMi } from './components/AcercaDeMi/Index'

function App() {
  const [hi, setHi] = useState(true)
  const [modeDark, setModeDark] = useState(true)

  if(!hi) document.querySelector("body").style.overflowY = "scroll"

  useEffect(() => {
    if (modeDark) {
      document.querySelector("body").style.background = "rgb(41, 41, 41)"
    } else {
      document.querySelector("body").style.background = "white"
    }
  }, [modeDark])

  return (
    <div style={{color:`${modeDark ? "white" : "black"}`}}>
      <button className={`btn-hi ${!hi&&"ocultar-hi"}`} onClick={() => setHi(!hi)}>Hola</button>
      <Header 
        modeDark={modeDark}
        onclick={() => setModeDark(!modeDark)}
        desactiveHi={hi}
      />

      <Presentacion hi={hi} />

      <div className={`content-portafolio ${hi&&"position-fixed"}`}>
        <AcercaDeMi modeDark={modeDark} />
      </div>

    </div>
  )
}

export default App
