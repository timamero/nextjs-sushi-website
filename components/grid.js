/*
props:
    type (default="row"):
        "row" - Set row grid styling
        "column" - Set column grid styling
    gridTemplate (default="auto"):
        Size of column heights or row widths
    gap (default=4):
        Row/column gap
*/
import styles from './grid.module.css'

const Grid = ({children, type="row", gridTemplate="auto", gap=4, justifyContent="none", alignItems="none"}) => {
    const rowStyle = {
        gridTemplateRows: gridTemplate,
        rowGap: gap, 
        justifyContent: justifyContent,
        alignItems: alignItems
    }

    const columnStyle = {
        gridTemplateColumns: gridTemplate,
        columnGap: gap,
        justifyContent: justifyContent,
        alignItems: alignItems
    }

    return (
        <div 
            className={styles.container}
            style={type === "row" 
                ? rowStyle
                : type === "column"
                ? columnStyle
                : null}
            >
            {children}
        </div>
    )
}

export default Grid