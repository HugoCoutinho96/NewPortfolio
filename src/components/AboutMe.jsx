import styles from "./AboutMe.module.css"
import AboutImg from "../assets/aboutme.png"
import { FlagTitle } from "./FlagTitle"
import { LinkedinLogo, GithubLogo } from "phosphor-react"
import { Greetings } from "./Animation/Greetings"
import { AboutMeAnimation } from "./Animation/AboutMeAnimation"
import { ImageAnimation } from "./Animation/ImageAnimation"

export function AboutMe(){
    return(
        <main>
            <Greetings>
                <div className={styles.hello}>
                    <FlagTitle title="👋 Saudações!"/>
                    <h1>Hugo<br/>Coutinho</h1>
                    <h2>Front-end developer</h2>
                    <div className={styles.socialMedia}>
                        <a href="https://www.linkedin.com/in/hugocoutinho96/" target="_blank" title="LinkedIn de Hugo Coutinho">
                            <LinkedinLogo size={32} />
                        </a>
                        <a href="https://github.com/HugoCoutinho96" target="_blank" title="Github de Hugo Coutinho">
                            <GithubLogo size={32} />
                        </a>
                    </div>
                </div>
            </Greetings>

            <ImageAnimation>
                <div className={styles.image}>
                    <img src={AboutImg}/>
                </div>
            </ImageAnimation>

            <AboutMeAnimation>
                <div className={styles.about}>
                    <FlagTitle title="🧐 Sobre mim"/>
                    <p>👨‍💻 Estudando e desenvolvendo interfaces com JavaScript, React JS.</p>
                    <p>🎓 Graduando em Sistemas de informação pela Uninassau de Recife</p>
                    <p>💡 Interesses em desenvolvimento Front-end com React, JavaScript e UX/UI Design.</p>
                    <p>🚀 Tentando ser melhor do que ontem. Todos os dias!</p>
                </div>
            </AboutMeAnimation>
        </main>
    )
}