import Section from "../molecules/Section";


const BlogContent = ({introduccion, contenidoPrincipal, conclusion}) => {
  return (
    <>
      <Section title="Introduccion" content="">{introduccion}</Section>
      <Section title="Contenido Principal" content="">{contenidoPrincipal}</Section>
      <Section title="Conclusión" content="">{conclusion}</Section>
    </>
  )
}

export default BlogContent;
