import styles from "./imagenBlog.module.css";

const ImagenBlog = ({src, alt}) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} className={styles.image}/>
    </div>
  )
}

export default ImagenBlog;
