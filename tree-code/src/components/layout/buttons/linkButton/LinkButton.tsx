import { Link } from 'react-router-dom'

export interface LinkButtonProps {
    to: string;
    text: string;
    className?: string
}

export default function LinkButton({ to, text, className }: LinkButtonProps) {

    return (
        <Link className={className} to={to}>
            {text}
        </Link>
    )

}