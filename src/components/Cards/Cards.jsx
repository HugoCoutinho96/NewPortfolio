import styles from "../Portfolio.module.css"
import { FlagTitle } from "../FlagTitle"

export function Cards({url, name, description, img, tecnologia}){
    return (
        <a href={url} target="_blank">
            <div className={styles.appInfo}>
                <h3>{name}</h3>
                <p>
                    {description}                                   
                </p>
            </div>

            <div className={styles.appTech}>
                <div>
                    {tecnologia.map(tech => (
                        <FlagTitle key={tech} tech title={tech}/>
                    ))}
                </div>
                <img src={img} />
            </div>
        </a>
    )
}