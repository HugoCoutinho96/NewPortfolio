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

    const scrollToSection = (tag) => {
        const element = document.querySelector(tag);
      
        if (element) {
          const rect = element.getBoundingClientRect();
          const topPosition = rect.top + window.scrollY;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };

    return(
        <header>
            <div className={styles.logo} alt="logotipo">
                <Code size={32}/>
            </div>

            <nav>
                <a href="#" onClick={() => scrollToSection("main")}>Sobre mim</a>
                <a href="#" onClick={() => scrollToSection("section")}>Portfólio</a>
                <a href="#" onClick={() => scrollToSection("footer")}>Contato</a>
            </nav>

            <div className={styles['mobile-menu']} id="mobileMenu">
                <a href="#" onClick={() => scrollToSection("main")}>Sobre mim</a>
                <a href="#" onClick={() => scrollToSection("section")}>Portfólio</a>
                <a href="#" onClick={() => scrollToSection("footer")}>Contato</a>
            </div>

            <button className={styles['menu-btn']} onClick={toggleMenu}><List size={32} /></button>
        </header>
    )
}