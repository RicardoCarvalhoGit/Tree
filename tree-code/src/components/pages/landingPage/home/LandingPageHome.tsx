import styles from "./LandingPageHome.module.css"

import LinkButton from "../../../layout/buttons/linkButton/LinkButton"
import bannerImg from "../../../../assets/images/homeBannerImg.png"
import { Fade } from "react-awesome-reveal"
import { WordRotate } from "@/assets/animations/WordRotate"


export const Home = () => {
    return (
        <section id="home" className={styles.landingPage}>
            
            <div className={styles.cta}>
            <Fade direction="left" cascade={true} damping={0.25}>
                <h1>
                    Faça Parte Da <WordRotate className={styles.span} duration={3000} words={["Mudança", "Evolução", "Esperança", "Preservação" ]} />
                </h1>
                <p>
                    Mostre seu compromisso com o planeta e inspire outros a seguir seu exemplo.
                </p>
            </Fade>
                <Fade direction="left" delay={500} childClassName={styles.signUpBtn}>
                    <LinkButton to="signUp" text="Quero Meu Certificado!"/>
                </Fade>
            </div>

            <Fade direction="right" className={styles.banner}>
                <img src={bannerImg} alt="sistrema de navegação na natureza" />
            </Fade>
        </section>
    )
}