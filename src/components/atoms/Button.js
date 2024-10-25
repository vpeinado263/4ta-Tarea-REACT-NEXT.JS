import styles from "./Button.module.css";

const Button = ({ onClick, children}) => {
    return(
        <>
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
        </>
    )
}
export default Button;