import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; 

import '../styles/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); 

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const user = await response.json();
                login(user); // Update the authentication state
                navigate('/');
            } else {
                console.error('Error logging in');
                console.error(response.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="email" value={email} placeholder="shailesh93602@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <p>Don't have an account? <Link to="/signup" className="link">SignUp here</Link></p>
            </form>
        </div>
    );
};

export default Login;
