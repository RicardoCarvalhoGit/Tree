import LinkButton from "../../layout/buttons/linkButton/LinkButton"
import styles from "./LandingPageComponent.module.css"
import bannerImg from "../../../assets/images/homeBannerImg.png"

export default function LandingPage () {

    return (
        <section className={styles.landingPage}>

            <div className={styles.cta}>
                <h1>
                    Faça Parte Da <span>Mudança</span>
                </h1>
                <p>
                    Mostre seu compromisso com o planeta e inspire outros a seguir seu exemplo.
                </p>
                <LinkButton className={styles.signUpBtn} to="signUp" text="Quero Meu Certificado!"/>
            </div>

            <div className={styles.banner}>
                <img src={bannerImg} alt="sistrema de navegação na natureza" />
            </div>

            
        </section>
    )

}