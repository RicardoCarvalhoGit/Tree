import { Fade } from "react-awesome-reveal"
import styles from "./LandingPageHistory.module.css"

export const History = () => {
    return (
        <section id="history" className={styles.history}>
            <Fade direction="left" cascade={true} damping={0.25}>
                <h2>De Onde Viemos</h2>
                <h3>Como a <span>Tree</span> foi plantada</h3>
            </Fade>

            <Fade direction="right" cascade={true} delay={500} damping={0.25} className={styles.historyText}>
                    <p>
                        A <span>Tree</span> nasceu em uma sala de aula universitária, em meio
                        a discussões sobre os impactos das mudanças climáticas que
                        já transformam nosso planeta. Movidos pela necessidade urgente
                        de preservar o meio ambiente e promover um novo jeito de pensar,
                        decidimos agir. Inspirados pela ideia de tornar a sustentabilidade
                        acessível a todos, criamos um certificado digital que
                        valoriza e reconhece o compromisso com o futuro.
                    </p>
                    <p>
                        Acreditamos que cada pessoa pode fazer a diferença. Nosso
                        propósito é reunir todos que compartilham essa visão em uma
                        comunidade global que promove o respeito e a preservação
                        da natureza. Ao se tornar <span>Tree</span>, você demonstra
                        esse compromisso e se junta a uma rede de pessoas que
                        trabalham por um amanhã mais verde.
                    </p>
            </Fade>
        </section>
    )
}