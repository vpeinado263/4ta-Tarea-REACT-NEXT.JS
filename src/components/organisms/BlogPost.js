import Title from "../atoms/Title"
import ImagenBlog from "../molecules/ImagenBlog"
import BlogContent from "./BlogContent"


const BlogPost = ({post}) => {
  return (
    <>
      <Title text={post.titulo}/>
      <ImagenBlog src={post.image} alt={post.titulo}/>
      <BlogContent 
        introduccion={post.introduccion}
        contenidoPrincipal={post.contenidoPrincipal}
        conclusion={post.conclusion}
        />
    </>
  )
}

export default BlogPost
