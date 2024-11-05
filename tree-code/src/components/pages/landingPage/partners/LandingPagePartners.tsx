import styles from "./LandingPagePartners.module.css"
import { cn } from "@/lib/utils";
import Marquee from "@/assets/animations/Marquee";
import { Fade } from "react-awesome-reveal"
import suaLogo from "../../../../assets/images/suaLogoAqui.png"

const partners = [
    {
        name: "yourLogoHere",
        img: <img src={suaLogo} alt="Sua logo aqui" />
    },
]

export const Partners = () => {
    return (
        <section id="partners" className={styles.partnersPage}>
            <Fade direction="left" cascade={true} damping={0.25} className={styles.header}>
                <h2>Nossos Parceiros</h2>
                <h3>Os Melhoeres são <span>Tree</span></h3>
            </Fade>

            <div className={styles.partnersMarquee}>

            </div>
        </section>
    )
}