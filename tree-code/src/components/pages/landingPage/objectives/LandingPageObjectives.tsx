import { Fade } from "react-awesome-reveal"
import { GiDiploma, GiFootsteps, GiMegaphone, GiTreehouse } from "react-icons/gi";


import styles from "./LandingPageObjectives.module.css"

export const Objectives = () => {
    return (
        <section id="objectives" className={styles.objectives}>
            <Fade direction="left" cascade={true} damping={0.25} className={styles.objectivesHeader}>
                <h2>Pra Onde Vamos</h2>
                <h3>O que esperar da <span>Tree</span></h3>
            </Fade>

            <Fade direction="right" cascade={true} delay={500} damping={0.25}>
                <div className={styles.objectivesContainer}>
                    <div className={styles.first}>
                        <GiMegaphone className={styles.firstIcon} />
                        <h4>Ampliar a Concientização</h4>
                        <p>
                            Nosso objetivo é alcançar mais pessoas, incentivando
                            práticas sustentáveis em diferentes comunidades e
                            regiões.
                        </p>
                    </div>
                    <div className={styles.second}>
                        <GiDiploma className={styles.secondIcon} />
                        <h4>Certificar 100 mil Empresas até 2030</h4>
                        <p>
                            Queremos ver nossa comunidade crescer, com cem mil
                            empresas certificadas e ativas no movimento ambiental
                            até o final da década.
                        </p>
                    </div>
                    <div className={styles.third}>
                        <GiTreehouse className={styles.thirdIcon} />
                        <h4>Apoiar 100 Projetos de Reflorestamento</h4>
                        <p>
                            A <span>Tree</span> busca financiar e apoiar projetos
                            de reflorestamento ao redor do mundo, regenerando áreas
                            críticas para a biodiversidade.
                        </p>
                    </div>
                    <div className={styles.fourth}>
                        <GiFootsteps className={styles.fourthIcon} />
                        <h4>Reduzir a Pegada de Carbono</h4>
                        <p>
                            Nosso objetivo é implementar ações concretas e
                            incentivar práticas sustentáveis que ajudem a
                            diminuir a emissão de gases de efeito estufa,
                            contribuindo diretamente para a regeneração do
                            planeta e um futuro mais equilibrado.
                        </p>
                    </div>
                </div>
            </Fade>
        </section>
    )
}