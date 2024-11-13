import styles from "./PartnersMarquee.module.css";

type Logo = {
    src: string;
    alt: string;
};

interface PartnersMarqueeProps {
    logos: Logo[];
}

export const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ logos }) => {
    return (
        <>
            <div className={styles.logos}>
                {[...Array(2)].map((_, i) => (
                    <div key={i} className={styles.logosSlide}>
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.logos}>
                {[...Array(2)].map((_, i) => (
                    <div key={i} className={styles.logosSlideReverse}>
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};
