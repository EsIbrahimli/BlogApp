import styles from './Button.module.css';

const Button = ({ onClick, children, variant }) => {
    return (
        <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;