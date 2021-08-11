/*
props:
    height (default="maxContent"):
        "fullView" - height is set to 100%;
        "maxContent" - height is set to max-content
    flexDirection (default="column")
    justifyContent (default="center")
    alignItems (default="center")
*/
import styles from './layout.module.css'

const Layout = ({
    children, 
    className, 
    height="maxContent", 
    flexDirection="column", 
    justifyContent="center", 
    alignItems="center",
    id
    }) => {
        const style = {
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
    }

    return (
        <div className={
                height==="fullView" 
                ? `${styles.container} ${styles.fullViewContainer} ${className}` 
                : height==="maxContent"
                ? `${styles.container} ${styles.maxContentContainer} ${className}`
                : null
                }
                style={style}
                id={id}
                >
            {children}
        </div>
    )
}

export default Layout;