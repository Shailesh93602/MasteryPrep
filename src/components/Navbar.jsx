import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        // Call the logout function from AuthContext
        logout();
    };

    const menuItems = [
        { label: 'Home', path: '/', condition: location.pathname === '/' },
        { label: 'OOPS', path: '/oops', condition: location.pathname.startsWith('/oops') },
        { label: 'DSA', path: '/dsa', condition: location.pathname.startsWith('/dsa') },
        { label: 'DBMS', path: '/dbms', condition: location.pathname.startsWith('/dbms') },
        { label: 'PS', path: '/ps', condition: location.pathname.startsWith('/ps') },
        { label: 'CIQ', path: '/ciq', condition: location.pathname.startsWith('/ciq') },
    ];

    return (
        <nav className="container">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={`link ${item.condition ? 'active' : ''}`} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            {isAuthenticated ? (
                <Link className="auth-button" to="/logout" onClick={handleLogout}>
                    Logout
                </Link>
            ) : (
                <div className="auth-buttons">
                    <Link className="auth-button" to="/login">
                        Login
                    </Link>
                    <Link className="auth-button" to="/signup">
                        Signup
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
