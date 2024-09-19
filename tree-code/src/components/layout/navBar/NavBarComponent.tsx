import styles from './NavBarComponent.module.css'

function NavBar() {
    return (
        <header className={styles.navBar}>
            <h3>Tree</h3>
            <div className={styles.navLinks}>
                <nav>
                    <a href="https://youtu.be/lJBcZHzgD7s?si=ob_xQ2ZCRl-Ro4Fc">Home</a>
                    <a href="https://youtu.be/QNYT9wVwQ8A?si=IoNKFFXeBWViSClQ">Ranking</a>
                    <a href="#about">Sobre</a>
                </nav>
            </div>
            <div>
                <button>Torne-se Tree</button>
            </div>
        </header>
    )
}

export default NavBar;
