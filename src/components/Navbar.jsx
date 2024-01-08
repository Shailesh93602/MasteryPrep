import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const menuItems = [
        { label: 'Home', path: '/', condition: location.pathname === '/'},
        { label: 'OOPS', path: '/oops', condition: location.pathname.startsWith('/oops')},
        { label: 'DSA', path: '/dsa', condition: location.pathname.startsWith('/dsa')},
        { label: 'SQL', path: '/sql', condition: location.pathname.startsWith('/sql')},
        { label: 'PS', path: '/ps', condition: location.pathname.startsWith('/ps')},
        { label: 'CIQ', path: '/ciq', condition: location.pathname.startsWith('/ciq')},
    ];
    
    return (
        <nav className="container">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={`link ${item.condition ? 'active' : ''}`} to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;