/* eslint-disable react/prop-types */
import "./presentacion.css"

export const Presentacion = ({ hi }) => {
  return (
    <div className="content-presentation">
      <div className="sobre-mi">
        <section className={`presentation ${!hi&&"return-about"}`}>
          <h1>
            Mi nombre es <span>Renzo</span>
          </h1>
          <p>Me enfoco en la ruta de ser un especialista en el FrontEnd </p>
        </section>
        <div className={`picture-personal ${!hi&&"return-about"}`}>
          <img  src="../../img/foto.png" alt="" />
        </div>
      </div>
    </div>
  )
}