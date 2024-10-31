import styles from "./LandingPageAboutUs.module.css"

import { GiEyeTarget, GiRocket, GiTechnoHeart } from "react-icons/gi";

export const LandingPageAboutUs = () => {
    return(
        <section className={styles.aboutUs}>
            <h2>Sobre <span>Nós</span></h2>
            <h3>Um pouco sobre o que é ser <span>Tree</span></h3>

            <div className={styles.mvv}>
                <div className={styles.mission}>
                    <GiRocket className={styles.missionIcon}/>
                    <h4>Missão</h4>
                    <p>Inspirar pessoas e organizações a adotar práticas sustentáveis, promovendo um impacto
                    positivo no meio ambiente por meio de um certificado digital acessível e reconhecido.</p>
                </div>
                <div className={styles.vision}>
                    <GiEyeTarget className={styles.visionIcon}/>
                    <h4>Visão</h4>
                    <p>Ser a principal referência em certificação ambiental digital, com uma
                    comunidade global comprometida com um futuro mais verde e consciente.</p>
                </div>
                <div className={styles.values}>
                    <GiTechnoHeart className={styles.valuesIcon}/>
                    <h4>Valores</h4>
                    <ul className={styles.valuesList}>
                        <li>Inovação</li>
                        <li>Comunidade</li>
                        <li>Transparência</li>
                        <li>Sustentabilidade</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}