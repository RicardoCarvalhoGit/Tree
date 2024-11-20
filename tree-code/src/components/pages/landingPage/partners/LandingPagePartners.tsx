import styles from "./LandingPagePartners.module.css"
import { Fade } from "react-awesome-reveal"
import { PartnersMarquee } from "./Marquee/PartnersMarquee"
import SuaLogo from "../../../../assets/images/SuaLogoAqui.png"

export const Partners = () => {

    const logosArray = Array(6).fill([
        { src: SuaLogo, alt: "Sua Logo aqui vetor" },
    ]).flat();    

    return (
        <section id="partners" className={styles.partnersPage}>
            <div className={styles.partners}>
            <Fade direction="left" cascade={true} damping={0.25} className={styles.header}>
                <h2>Nossos Parceiros</h2>
                <h3>Os melhores são <span>Tree</span></h3>
            </Fade>
            <PartnersMarquee logos={logosArray}/>
            </div>
        </section>
    )
}