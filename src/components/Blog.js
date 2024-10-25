import { useState, useEffect } from "react";

const Blog = () => {

  const [recurso, setRecurso] = useState("posteo");
  const [contenido, setContenido] = useState("")

  //colocamos los datos de cada seccion

  const datos = {
    posteos: "Bienvenidos al blog sobre la creación del reloj. Aquí exploraremos los pasos para diseñar un reloj único.",
    usuarios: "Autores destacados: Abraham-Louis Breguet,  Christiaan Huygens, Daniel Quare, John Harwood, Franz Ketterer",
    comentarios: "comentarios: ¡Qué interesante! Me encantaría aprender más sobre la historia de los relojes.",
  }

  useEffect(() => { setContenido(data[recurso]);},[recurso]);
  //Actualiza el contenido

  return (
    <>
      <div>
        <button onClick={() => setRecurso("posteos")}>Posteos</button>
        <button onClick={() => setRecurso("usuarios")}>Usuario</button>
        <button onClick={() => setRecurso("comentarios")}>Comentarios</button>
      </div>
      <h2>{recurso.toUpperCase()}</h2>
      <p>{contenido}</p>
    </>
  )
}

export default Blog