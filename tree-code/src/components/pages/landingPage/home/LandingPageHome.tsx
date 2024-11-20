import styles from "./LandingPageHome.module.css"

import LinkButton from "../../../layout/buttons/linkButton/LinkButton"
import BannerImg from "../../../../assets/images/HomeBannerImg.png"
import { Fade } from "react-awesome-reveal"
import { WordRotate } from "@/assets/animations/WordRotate"


export const Home = () => {
    return (
        <section id="home" className={styles.landingPage}>
            
            <div className={styles.cta}>
            <Fade direction="left" cascade={true} damping={0.25}>
                <h1>
                    Faça Parte Da <span><WordRotate duration={3000} words={["Mudança", "Evolução", "Esperança", "Preservação" ]} /></span>
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
                <img src={BannerImg} alt="sistrema de navegação na natureza" />
            </Fade>
        </section>
    )
}