import { WhatsappLogo, PaperPlaneTilt, ArrowUp } from "phosphor-react"
import styles from "./Contact.module.css"
import { FlagTitle } from "./FlagTitle"

export function Contact(){

    const phoneNumber = "5581992967462"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}`;  

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return(
        <footer>
            <div className={styles.header}>
                <FlagTitle tech title="📬 Contatos"/>
                <h1>Vamos Conversar!</h1>
            </div>

            <div className={styles.contact}>
                <a href={whatsappUrl} target="_blank" title="Entrar em contato pelo whatsapp"><WhatsappLogo size={32}/>Vamos conversar</a>
                <div>
                    <PaperPlaneTilt size={32} />
                    <p>Email:</p>
                    <a href="mailto:hugocoutinho96@outlook.com" title="Entrar em contato pelo Email">hugocoutinho96@outlook.com</a>
                </div>
            </div>

            <a onClick={scrollToTop}>Voltar ao topo<ArrowUp size={32} /></a>
        </footer>
    )
}