import { FlagTitle } from "./FlagTitle"
import styles from "./Portfolio.module.css"

import MyTubeImg from "../assets/mytube.jpg"
import MerkuryImg from "../assets/merkury.jpg"
import NodePropImg from "../assets/nodeprop.jpg"
import RocketnotesImg from "../assets/rocketnotes.png"

export function Portfolio(){
    return(
        <section>
            <div className={styles.header}>
                <FlagTitle title="🔗 Portfólio"/>
                <h1>Projetos</h1>
            </div>

            <div className={styles.projects}>
                <div>
                    <a href="https://rocketnotes96.netlify.app/" target="_blank">
                        <div className={styles.appInfo}>
                            <h3>RocketNotes</h3>
                            <p>
                                Crie e organize suas notas personalizadas, 
                                adicionando links e tags a elas, e salve-as 
                                em sua conta para acessá-las de qualquer lugar.                                    
                            </p>
                        </div>

                        <div className={styles.appTech}>
                            <div>
                                <FlagTitle tech title="ReactJs"/>
                                <FlagTitle tech title="JavaScript"/>
                                <FlagTitle tech title="HTML"/>
                                <FlagTitle tech title="CSS"/>
                                <FlagTitle tech title="StyledComponents"/>
                            </div>
                            <img src={RocketnotesImg} />
                        </div>
                    </a>
                </div>

                <div>
                    <a href="https://mytube2.netlify.app/" target="_blank">
                        <div className={styles.appInfo}>
                            <h3>MyTube</h3>
                            <p>Aplicação que permite criar playlists personalizadas com URLs do YouTube. </p>
                        </div>

                        <div className={styles.appTech}>
                            <div>
                                <FlagTitle tech title="ReactJs"/>
                                <FlagTitle tech title="JavaScript"/>
                                <FlagTitle tech title="HTML"/>
                                <FlagTitle tech title="CSS"/>
                                <FlagTitle tech title="StyledComponents"/>
                            </div>
                            <img src={MyTubeImg} />
                        </div>
                    </a>
                </div>

                <div>
                    <a href="https://merkury2.netlify.app/" target="_blank">
                        <div className={styles.appInfo}>
                            <h3>Merkury</h3>
                            <p>
                                Uma página sobre o negócio, recursos oferecidos e 
                                planos de preços para ajudar o cliente a encontrar a melhor
                                solução para suas necessidades.
                            </p>
                        </div>

                        <div className={styles.appTech}>
                            <div>
                                <FlagTitle tech title="HTML"/>
                                <FlagTitle tech title="CSS"/>
                                <FlagTitle tech title="JavaScript"/>
                            </div>
                            <img src={MerkuryImg} />
                        </div>
                    </a>
                </div>

                <div>
                    <a href="https://nodeprop2.netlify.app/" target="_blank">
                        <div className={styles.appInfo}>
                            <h3>NodeProp</h3>
                            <p>
                                Uma página voltada ao marketing, 
                                branding e publicidade, com foco em experiências de marca, 
                                estratégias de engajamento e conexão entre marcas e consumidores
                            </p>
                        </div>

                        <div className={styles.appTech}>
                            <div>
                                <FlagTitle tech title="HTML"/>
                                <FlagTitle tech title="CSS"/>
                                <FlagTitle tech title="JavaScript"/>
                            </div>
                            <img src={NodePropImg} />
                        </div>
                    </a>
                </div>

            </div>
        </section>
    )
}