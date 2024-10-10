import styles from './NavBarComponent.module.css'
import TreeLogo from '../../../assets/TreeLogo.png'
import LinkButton from '../buttons/linkButton/LinkButton';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className={styles.navBar}>
            <Link to="/">
                <img src={TreeLogo} alt='TreeLogo' />
            </Link>
            <div className={styles.navLinks}>
                <nav>
                    <a href="/">Home</a>
                    <a href="/Ranking">Ranking</a>
                    <a href="#about">Sobre</a>
                </nav>
            </div>
            <div>
                <LinkButton to='SignUp' text='Torne-se Tree'/>
            </div>
        </header>
    )
}

export default NavBar