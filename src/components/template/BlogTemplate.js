import Button from '../atoms/Button';
import BlogPost from '../organisms/BlogPost';
import { useState, useEffect } from 'react';

const BlogTemplate = () => {
    const [recurso, setRecurso] = useState("posteos");
    const [post, setPost] = useState({});

    const datos = {
        posteos: {
            titulo: "La creacion del Reloj",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglmkFxesg88O2GrameqYhhyM_ueV2iYLJ8Q&s",
            introduccion: "Exploraremos el fascinante proceso de creación de un reloj desde cero.",
            contenidoPrincipal: "El diseño de un reloj implica precisió...",
            conslucion: "La creacion del reloj es un Arte en si mismo",
        },
        usuarios: {/*"Autores destacados: Abraham-Louis Breguet,  Christiaan Huygens, Daniel Quare, John Harwood, Franz Ketterer"*/},
        comentarios: {/*"comentarios: ¡Qué interesante! Me encantaría aprender más sobre la historia de los relojes."*/},
    };
    useEffect(() => {
        setPost(datos[recurso]);
} , [recurso]);

  return (
    <>
      <div>
        <Button onClick={() => setRecurso("posteos")}>Posteos</Button>
        <Button onClick={() => setRecurso("usuarios")}>Usuarios</Button>
        <Button onClick={() => setRecurso("comentarios")}>Comentarios</Button>
      </div>
      <BlogPost post={post}/>
    </>
  )
}

export default BlogTemplate
