import "./formulario.css"

export const Formulario = () => {

  const handleSubmit = async (event) => {
    event.preventDefault()

    const $form = event.target
    const form = new FormData($form)

    const response = await fetch($form.action, {
                                                  method: $form.method,
                                                  body: form,
                                                  headers: {
                                                    'Accept': 'aplication/json'
                                                  }
                                                })

    if (response.ok) {
      $form.reset()
      alert("se envio correctamente el mensaje")
    }
  }

  return (
    <div className="contacto" id="contacto">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/maygvney" method="POST" id="form" className="form">
        <h2>Contactame</h2>
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Nombre" />

          <label htmlFor="phone">Número</label>
          <input type="text" name="phone" id="phone" placeholder="Telefono" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" />

          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>

          <button className="btn-form" type="submit">Enviar</button>

        </div>
      </form>
    </div>
  )
}