import styles from './button.module.css'

const Button = ({children, type="primary", link="", newWindow=false}) => {
    const buttonStyle = 
        type === "primary" 
        ? styles.primary 
        : type === "primaryDark"
        ? styles.primaryDark
        : type ==="outline"
        ? styles.outline
        : type==="outlineDark"
        ? styles.outlineDark
        : null
    
    const target = newWindow 
        ? "_blank"
        : ""

    return (
        <a href={link} target={target} rel="noreferrer" className={`${styles.btn} ${buttonStyle}`}>
            {children}
        </a>
    )
}

export default Button;