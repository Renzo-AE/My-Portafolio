import "./formulario.css"

export const Formulario = () => {

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = new FormData(document.querySelector(`.${event.target.className}`))

    console.log(form.get('name'))
  };

  return (
    <form action="" method="POST" onSubmit={handleSubmit} className="form">
      <h2>Contacto</h2>
      <div className="input-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Nombre" />

        <label htmlFor="phone">Nombre</label>
        <input type="text" name="phone" id="phone" placeholder="Telefono" />

        <label htmlFor="email">Nombre</label>
        <input type="text" name="email" id="email" placeholder="Email" />

        <label htmlFor="message">Nombre</label>
        <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>
      
        <input className="btn-form" type="submit" value="Enviar" />

        <input type="hidden" name="_next" value="http://localhost:5173/" />
        <input type="hidden" name="_captcha" value="false" />

      </div>

      <a href="mailto:me@renzo.com"> hi </a>
    </form>
  )
}