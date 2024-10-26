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

      <style jsx>{`
        .button-container {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .blog-button {
          background-color: #0070f3;
          color: #fff;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1em;
          transition: background-color 0.3s;
        }

        .blog-button:hover {
          background-color: #005bb5;
        }

        .blog-title {
          font-size: 1.8em;
          color: #333;
          margin-top: 0;
        }

        .blog-content {
          font-size: 1.1em;
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export default Blog;
