import styles from "./LandingPagePartners.module.css"
import { Fade } from "react-awesome-reveal"
import { PartnersMarquee } from "./Marquee/PartnersMarquee"
import AlphabetLogo from "../../../../assets/images/LogosMarquese/AlphabetLogo.png"
import AmazonLogo from "../../../../assets/images/LogosMarquese/AmazonLogo.png"
import AppleLogo from "../../../../assets/images/LogosMarquese/AppleLogo.png"
import BerkshireHathawayIncLogo from "../../../../assets/images/LogosMarquese/BerkshireHathawayIncLogo.png"
import MetaLogo from "../../../../assets/images/LogosMarquese/MetaLogo.png"
import MicrosoftLogo from "../../../../assets/images/LogosMarquese/MicrosoftLogo.webp"
import NvidiaLogo from "../../../../assets/images/LogosMarquese/NvidiaLogo.png"
import SaudiAramcoLogo from "../../../../assets/images/LogosMarquese/SaudiAramcoLogo.jpg"
import TeslaLogo from "../../../../assets/images/LogosMarquese/TeslaLogo.png"
import TsmcLogo from "../../../../assets/images/LogosMarquese/TsmcLogo.png"


export const Partners = () => {

    const logosArray = Array(6).fill([
        { src: AlphabetLogo, alt: "AlphabetLogo" },
        { src: AmazonLogo, alt: "AmazonLogo" },
        { src: AppleLogo, alt: "AppleLogo" },
        { src: BerkshireHathawayIncLogo, alt: "BerkshireHathawayIncLogo" },
        { src: MetaLogo, alt: "MetaLogo" },
        { src: MicrosoftLogo, alt: "MicrosoftLogo" },
        { src: NvidiaLogo, alt: "NvidiaLogo" },
        { src: SaudiAramcoLogo, alt: "SaudiAramcoLogo" },
        { src: TeslaLogo, alt: "TeslaLogo" },
        { src: TsmcLogo, alt: "TsmcLogo" },
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