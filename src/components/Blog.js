import { useState, useEffect } from "react";

const Blog = () => {

  const [recurso, setRecurso] = useState("posteo");

  useEffect(() => {}, [recurso])

  return (
    <>
      <div>
        <button onClick={() => setRecurso("posteos")}>Posteos</button>
        <button onClick={() => setRecurso("usuarios")}>Usuario</button>
        <button onClick={() => setRecurso("comentarios")}>Comentarios</button>
      </div>
      <h2>{recurso}</h2>
    </>
  )
}

export default Blog