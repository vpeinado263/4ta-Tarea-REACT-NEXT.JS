import { useState, useEffect } from "react";
import RelojEffect from "./RelojEffect";
import RelojEf from "./Rolex";

const Blog = () => {
  const [recurso, setRecurso] = useState("posteos");
  const [contenido, setContenido] = useState("");

  // Colocamos los datos de cada seccion
  const datos = {
    digital: <RelojEffect/>,
    analogico: <RelojEf/>,
    comentarios: "comentarios: ¡Qué interesante! Me encantaría aprender más sobre la historia de los relojes.",
  };

  useEffect(() => {
    setContenido(datos[recurso]);
  }, [recurso]);

  return (
    <>
      <div className="button-container">
        <button className="blog-button" onClick={() => setRecurso("digital")}>Digital</button>
        <button className="blog-button" onClick={() => setRecurso("analogico")}>Analogico</button>
        <button className="blog-button" onClick={() => setRecurso("comentarios")}>Comentarios</button>
      </div>
      <h2 className="blog-title">{recurso.toUpperCase()}</h2>
      <p className="blog-content">{contenido}</p>
    </>
  );
};

export default Blog;
