import { LogoAnimation } from "./Animation/LogoAnimation";
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

    const scrollToSection = (tag, e) => {
        e.preventDefault()
        const element = document.querySelector(tag);
    
        if (element) {
            const rect = element.getBoundingClientRect();
            const Height = document.querySelector("header").offsetHeight; // Pegando altura do menu
            const menuHeight = window.innerWidth <= 768 ? 0 : Height // Ajustando a altura do menu de acordo com o tamanho da tela
            const topPosition = rect.top + window.scrollY - menuHeight; // Posição exata com ajuste para o menu fixo
            
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
    
        if (window.scrollY > 33) {
            header.style.setProperty("background-color", "var(--menuFixed)");
        } else {
            header.style.setProperty("background-color", "var(--purple-5)");
        }
    });

    return(
        <header>
            <LogoAnimation>
                <a className={styles.logo} href="#" onClick={(e) => scrollToSection(false, e)}><Code size={32}/></a>
            </LogoAnimation>

            <nav>
                <a href="#" onClick={(e) => scrollToSection("main",e)}>Sobre mim</a>
                <a href="#" onClick={(e) => scrollToSection("section",e)}>Portfólio</a>
                <a href="#" onClick={(e) => scrollToSection("footer",e)}>Contato</a>
            </nav>

            <div className={styles['mobile-menu']} id="mobileMenu">
                <a href="#" onClick={(e) => scrollToSection("main",e)}>Sobre mim</a>
                <a href="#" onClick={(e) => scrollToSection("section",e)}>Portfólio</a>
                <a href="#" onClick={(e) => scrollToSection("footer",e)}>Contato</a>
            </div>

            <button className={styles['menu-btn']} onClick={toggleMenu}><List size={32} /></button>
        </header>
    )
}