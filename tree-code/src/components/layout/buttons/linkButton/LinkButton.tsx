import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

interface LinkButtonProps {
    to: string;
    text: string;
}

export default function LinkButton({ to, text }: LinkButtonProps) {

    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )

}