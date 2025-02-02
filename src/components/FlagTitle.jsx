import styles from "./FlagTitle.module.css"

export function FlagTitle({title, tech=false}){
    return(
        <span className={tech ? styles.tech : ''}>{title}</span>
    )
}