import { NavLink } from 'react-router-dom';

export interface NavItemProps {
    to: string;
    text: string;
    className: string;
    activeClassName: string;
}

export default function NavItem({ to, text, className, activeClassName }: NavItemProps) {
    return (
        <nav>
            <NavLink 
            to={to} 
            className={({ isActive }) => 
                isActive ? `${className} ${activeClassName}` : className
            }
        >
            {text}
        </NavLink>
        </nav>
    );
}
