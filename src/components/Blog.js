import { useState, useEffect } from "react";

const Blog = () => {
  const [recurso, setRecurso] = useState("posteos");
  const [contenido, setContenido] = useState("");

  // Colocamos los datos de cada seccion
  const datos = {
    posteos: "Bienvenidos al blog sobre la creación del reloj. Aquí exploraremos los pasos para diseñar un reloj único.",
    usuarios: "Autores destacados: Abraham-Louis Breguet, Christiaan Huygens, Daniel Quare, John Harwood, Franz Ketterer",
    comentarios: "comentarios: ¡Qué interesante! Me encantaría aprender más sobre la historia de los relojes.",
  };

  useEffect(() => {
    setContenido(datos[recurso]);
  }, [recurso]);

  return (
    <>
      <div className="button-container">
        <button className="blog-button" onClick={() => setRecurso("posteos")}>Posteos</button>
        <button className="blog-button" onClick={() => setRecurso("usuarios")}>Usuarios</button>
        <button className="blog-button" onClick={() => setRecurso("comentarios")}>Comentarios</button>
      </div>
      <h2 className="blog-title">{recurso.toUpperCase()}</h2>
      <p className="blog-content">{contenido}</p>
    </>
  );
};

export default Blog;
