import styles from "./Header.module.css"
import {Code} from "phosphor-react"

export function Header(){

    const scrollToTop = (e) => {
        let position = 0
        if(e == 1)
            position = 0
        else if(e == 2)
            position = 780
        else
            position = 1200

        window.scrollTo({
        top: position,
        behavior: "smooth",
        });
    };

    return(
        <header>
            <div className={styles.logo} alt="logotipo">
                <Code size={32}/>
            </div>

            <nav>
                <a href="#" onClick={e => scrollToTop(1)}>Sobre mim</a>
                <a href="#" onClick={e => scrollToTop(2)}>Portfólio</a>
                <a href="#" onClick={e => scrollToTop(3)}>Contato</a>
            </nav>
        </header>
    )
}