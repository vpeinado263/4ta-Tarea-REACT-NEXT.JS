import { useState, useEffect } from "react";
import RelojEffect from "./RelojEffect";
import RelojEf from "./Rolex";

const Blog = () => {
  const [recurso, setRecurso] = useState("digital");
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
    <nav className="navbar">
      <div className="navbar-title">¿Quien creó el Reloj?</div>
      <div className="button-container">
        <button className="nav-button" onClick={() => setRecurso("digital")}>Digital</button>
        <button className="nav-button" onClick={() => setRecurso("analogico")}>Analogico</button>
        <button className="nav-button" onClick={() => setRecurso("comentarios")}>Comentarios</button>
      </div>  
    </nav>
    <div className="content-container">
      <h2 className="blog-title">{recurso.toUpperCase()}</h2>
      <p className="blog-content">{contenido}</p>
    </div>
    </>
  );
};

export default Blog;
