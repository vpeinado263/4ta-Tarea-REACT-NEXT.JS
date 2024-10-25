import styles from "./Section.module.css";

const Section = ({title, content}) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitles}>{title}</h3>
      <p className={styles.section.content}>{content}</p>
    </section>
  )
};

export default Section
