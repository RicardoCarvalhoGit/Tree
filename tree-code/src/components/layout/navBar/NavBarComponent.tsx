import styles from './NavBarComponent.module.css';
import TreeLogoWhite from '../../../assets/images/treeLogo.png';
import LinkButton from '../buttons/linkButton/LinkButton';
import { FaBars, FaX } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useEffect, useState } from 'react';

const sections = [
    { id: 'home', text: 'Início' },
    { id: 'partners', text: 'Parceiros' },
    { id: 'aboutUs', text: 'Sobre' },
    { id: 'team', text: 'Equipe' },
    { id: 'history', text: 'Origem' },
    { id: 'objectives', text: 'Metas' },
]

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollToSection, setScrollToSection] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (location.pathname === '/' && scrollToSection) {
            scroller.scrollTo(scrollToSection, {
                smooth: true,
                offset: -133,
                duration: 500,
            });
            setScrollToSection(null);
        }
    }, [location, scrollToSection]);

    return (
        <header>
            <nav className={styles.navBar}>

                <Link to="/">
                    <img src={TreeLogoWhite} alt='TreeLogo' />
                </Link>

                <ul className={styles.navList}>
                    {sections.map((section) => (
                        <ScrollLink
                            key={section.id}
                            to={section.id}
                            spy={true}
                            smooth={true}
                            offset={-133}
                            duration={500}
                            className={styles.navItem}
                            activeClass={location.pathname === '/signIn' || location.pathname === '/signUp' ? "" : styles.activeNavItem}
                            onClick={() => {
                                if (location.pathname === '/signIn' || location.pathname === '/signUp') {
                                    setScrollToSection(section.id);
                                    navigate('/');
                                }
                            }}
                        >
                            {section.text}
                        </ScrollLink>
                    ))}
                </ul>

                <LinkButton className={styles.webSignUpBtn} to='signIn' text='Torne-se Tree' onClick={scrollToTop}/>

                <button
                    className={styles.mobileBtn}
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (<FaX />) : (<FaBars />)}
                </button>
            </nav>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <ul className={styles.mobileNavList}>
                        {sections.map((section) => (
                            <ScrollLink
                                key={section.id}
                                to={section.id}
                                spy={true}
                                smooth={true}
                                offset={-400}
                                duration={500}
                                className={styles.navItem}
                                activeClass={styles.activeNavItem}
                                onClick={() => {
                                    if (location.pathname === '/signIn' || location.pathname === '/signUp') {
                                        setScrollToSection(section.id);
                                        navigate('/');
                                    }
                                    toggleMenu();
                                }}
                            >
                                {section.text}
                            </ScrollLink>
                        ))}
                    </ul>

                    <LinkButton className={styles.mobileSignUpBtn}
                    to='signIn'
                    text='Torne-se Tree'
                    onClick={() => {
                        scrollToTop();
                        toggleMenu();
                    }}
                    />
                </div>
            )}
        </header>
    )
}

export default NavBar;
