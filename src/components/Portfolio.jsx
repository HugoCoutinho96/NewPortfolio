import styles from "./Portfolio.module.css"
import { CardsAnimation } from "./Animation/CardsAnimation"

import MyTubeImg from "../assets/mytube.jpg"
import MerkuryImg from "../assets/merkury.jpg"
import NodePropImg from "../assets/nodeprop.jpg"
import RocketnotesImg from "../assets/rocketnotes.jpg"
import VibeshopImg from "../assets/vibe-shop.png"

import { FlagTitle } from "./FlagTitle"
import { Cards } from "./Cards/Cards"

export function Portfolio(){
    return(
        <section>
            <div className={styles.header}>
                <FlagTitle title="🔗 Portfólio"/>
                <h1>Projetos</h1>
            </div>

            <div className={styles.projects}>
                <CardsAnimation>
                    <Cards
                        url="https://vibe-shop-800nf5z0m-hugo-coutinhos-projects.vercel.app/"
                        name="Vibe Shop"
                        description="Vibe Shop é uma loja online de camisetas estilizadas."
                        tecnologia={["NextJs", "Typescript", "Javascript", "Tailwind", "Stripe"]}
                        img={VibeshopImg}
                    />
                </CardsAnimation>

                <CardsAnimation>
                    <Cards
                        url="https://rocketnotes96.netlify.app/"
                        name="RocketNotes"
                        description="Crie e organize suas notas personalizadas, 
                                adicionando links e tags a elas, e salve-as 
                                em sua conta para acessá-las de qualquer lugar."
                        tecnologia={["ReactJs", "Javascript", "Styled-components"]}
                        img={RocketnotesImg}
                    />
                </CardsAnimation>

                <CardsAnimation>
                     <Cards
                        url="https://mytube2.netlify.app/"
                        name="MyTube"
                        description="Aplicação que permite criar playlists personalizadas com URLs do YouTube."
                        tecnologia={["ReactJs", "Javascript", "Styled-components"]}
                        img={MyTubeImg}
                    />
                </CardsAnimation>

                <CardsAnimation>
                    <Cards
                        url="https://merkury2.netlify.app/"
                        name="Merkury"
                        description="Uma página sobre o negócio, recursos oferecidos e 
                                planos de preços para ajudar o cliente a encontrar a melhor
                                solução para suas necessidades."
                        tecnologia={["HTML", "CSS", "Javascript"]}
                        img={MerkuryImg}
                    />
                </CardsAnimation>

                <CardsAnimation>
                    <Cards
                        url="https://nodeprop2.netlify.app/"
                        name="NodeProp"
                        description="Uma página voltada ao marketing, 
                                branding e publicidade, com foco em experiências de marca, 
                                estratégias de engajamento e conexão entre marcas e consumidores"
                        tecnologia={["HTML", "CSS", "Javascript"]}
                        img={NodePropImg}
                    />
                </CardsAnimation>
            </div>
        </section>
    )
}