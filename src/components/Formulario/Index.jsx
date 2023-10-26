import "./formulario.css"

export const Formulario = () => {

  const handleSubmit = async (event) => {
    event.preventDefault()

    document.querySelector(".btn-form").innerHTML = `Enviando<span class="punto-1">.</span><span class="punto-2">.</span><span class="punto-3">.</span>`
    document.querySelector(".btn-form").disabled = true;

    const $form = event.target
    const form = new FormData($form)
    
    const response = await fetch($form.action, {
                                                  method: $form.method,
                                                  body: form,
                                                  headers: {
                                                    'Accept': 'aplication/json'
                                                  }
                                                })
    
    console.log(response)
                                                
    if (response.ok) {
      $form.reset()
      document.querySelector(".btn-form").innerText = "Enviar"
      document.querySelector(".btn-form").disabled = false;
      alert("se envio correctamente el mensaje")
    } else {
      document.querySelector(".btn-form").innerText = "Enviar"
      document.querySelector(".btn-form").disabled = false;
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