import styles from './NavBarComponent.module.css';
import TreeLogoWhite from '../../../assets/images/TreeLogo.png';
import LinkButton from '../buttons/linkButton/LinkButton';
import NavItem from './NavItem';
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className={styles.navBar}>

                <Link to="/">
                    <img src={TreeLogoWhite} alt='TreeLogo' />
                </Link>

                <ul className={styles.navList}>
                    <NavItem to="/" text="Home" />
                    <NavItem to='/ranking' text='Ranking' />
                    <NavItem to='/certification' text='Certificação' />
                    <NavItem to='about' text='Sobre' />
                </ul>

                <LinkButton to='signUp' text='Torne-se Tree' />

                <button className={styles.mobileBtn}>
                    <FaBars />
                </button>
            </nav>

            <div className={styles.mobileMenu}>
                <ul className={styles.mobileNavList}>
                    <NavItem to="/" text="Home" />
                    <NavItem to='/ranking' text='Ranking' />
                    <NavItem to='/certification' text='Certificação' />
                    <NavItem to='about' text='Sobre' />
                </ul>

                <LinkButton to='signUp' text='Torne-se Tree' />
            </div>
        </header>
    )
}

export default NavBar