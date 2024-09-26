import styles from './NavBarComponent.module.css'
import TreeLogo from '../../../assets/TreeLogo.png'

function NavBar() {
    return (
        <header className={styles.navBar}>
            <img src={TreeLogo} alt="TreeLogo" className={styles.treeLogo} />
            <div className={styles.navLinks}>
                <nav>
                    <a href="/">Home</a>
                    <a href="/Ranking">Ranking</a>
                    <a href="#about">Sobre</a>
                </nav>
            </div>
            <div>
                <button onClick={() => window.location.href="signUp"}>Torne-se Tree</button>
            </div>
        </header>
    )
}

export default NavBar;
