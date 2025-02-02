import styles from "./Header.module.css"
import {Code, List} from "phosphor-react"

export function Header(){

    function toggleMenu() {
        var menu = document.getElementById("mobileMenu");
        if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
            menu.style.maxHeight = "300px"; // Ajuste conforme necessário
        } else {
            menu.style.maxHeight = "0px";
        }
    }

    const scrollToTop = (e) => {
        let position = 0

        switch(e){
            case 1: position = 0; break;
            case 2: position = 780; break;
            case 3: position = 1200; break;
            case 4: position = 0; break;
            case 5: position = 640; break;
            case 6: position = 1800; break;
        }

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

            <div className={styles['mobile-menu']} id="mobileMenu">
                <a href="#" onClick={e => scrollToTop(4)}>Sobre mim</a>
                <a href="#" onClick={e => scrollToTop(5)}>Portfólio</a>
                <a href="#" onClick={e => scrollToTop(6)}>Contato</a>
            </div>

            <button className={styles['menu-btn']} onClick={toggleMenu}><List size={32} /></button>
        </header>
    )
}