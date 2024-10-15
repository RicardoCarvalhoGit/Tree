import styles from './NavBarComponent.module.css';
import TreeLogoWhite from '../../../assets/images/TreeLogo.png';
import LinkButton from '../buttons/linkButton/LinkButton';
import NavItem from './NavItem';
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header>
            <nav className={styles.navBar}>

                <Link to="/">
                    <img src={TreeLogoWhite} alt='TreeLogo' />
                </Link>

                <ul className={styles.navList}>
                    <NavItem to="/" text="Home" className={styles.navItem} activeClassName={styles.activeNavItem} />
                    <NavItem to='/ranking' text='Ranking' className={styles.navItem} activeClassName={styles.activeNavItem} />
                    <NavItem to='/certification' text='Certificação' className={styles.navItem} activeClassName={styles.activeNavItem} />
                    <NavItem to='about' text='Sobre' className={styles.navItem} activeClassName={styles.activeNavItem} />
                </ul>

                <LinkButton className={styles.webSignUpBtn} to='signUp' text='Torne-se Tree' />

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
                        <NavItem to="/" text="Home" className={styles.navItem} activeClassName={styles.activeNavItem} />
                        <NavItem to='/ranking' text='Ranking' className={styles.navItem} activeClassName={styles.activeNavItem} />
                        <NavItem to='/certification' text='Certificação' className={styles.navItem} activeClassName={styles.activeNavItem} />
                        <NavItem to='about' text='Sobre' className={styles.navItem} activeClassName={styles.activeNavItem} />
                    </ul>

                    <LinkButton className={styles.mobileSignUpBtn} to='signUp' text='Torne-se Tree' />
                </div>
            )}
        </header>
    )
}

export default NavBar;
