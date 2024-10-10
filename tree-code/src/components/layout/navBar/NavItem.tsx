import { Link } from 'react-router-dom'
import styles from './NavBarComponent.module.css'

export interface NavItemProps {
    to: string;
    text: string;
}

export default function NavItem({ to, text }: NavItemProps) {

    return (
        <li className={styles.navItem}>
            <Link to={to}>
                {text}
            </Link>
        </li>
    )

}