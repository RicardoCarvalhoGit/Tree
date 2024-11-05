import { Link } from 'react-router-dom'

export interface LinkButtonProps {
    to: string;
    text: string;
    className?: string;
    onClick?: () => void;
}

export default function LinkButton({ to, text, className, onClick }: LinkButtonProps) {

    return (
        <Link className={className} to={to} onClick={onClick}>
            {text}
        </Link>
    )

}