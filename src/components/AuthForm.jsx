import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import '../index.css';
import logoImg from '../assets/logo.png';

const AuthForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isSignup = location.pathname === '/signup';

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        /* ---------- basic validation ---------- */
        if (!email.trim()) { setError('Please enter your email.'); return; }
        if (!password.trim()) { setError('Please enter your password.'); return; }
        if (isSignup && !username.trim()) { setError('Please enter a user name.'); return; }

        setLoading(true);

        /* simulate a short network delay */
        setTimeout(() => {
            if (isSignup) {
                /* ---- REGISTER ---- */
                const user = { email, username, password, registeredAt: new Date().toISOString() };
                localStorage.setItem('eduflex_user', JSON.stringify(user));
                localStorage.setItem('eduflex_logged_in', 'true');
                navigate('/home');
            } else {
                /* ---- LOGIN ---- */
                const saved = localStorage.getItem('eduflex_user');
                if (!saved) {
                    setLoading(false);
                    setError('No account found. Please sign up first.');
                    return;
                }

                const user = JSON.parse(saved);

                /* Strictly check email and password */
                if (user.email !== email) {
                    setLoading(false);
                    setError('No account found with this email.');
                    return;
                }

                if (user.password !== password) {
                    setLoading(false);
                    setError('Incorrect password. Please try again.');
                    return;
                }

                /* Credentials match */
                localStorage.setItem('eduflex_logged_in', 'true');
                navigate('/home');
            }
            setLoading(false);
        }, 600);
    };

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh',
            background: '#fff', position: 'relative', padding: '20px', gap: '50px'
        }}>
            <style>{`
                @media (max-width: 900px) {
                  .auth-container {
                    flex-direction: column !important;
                    gap: 30px !important;
                  }
                  .auth-card {
                    width: 100% !important;
                    padding: 30px 20px !important;
                    max-width: 400px;
                  }
                  .brand-side {
                    text-align: center;
                    margin-bottom: 20px;
                  }
                  .blob-bg {
                    width: 150px !important;
                    height: 150px !important;
                  }
                }
                .auth-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 80px;
                    width: 100%;
                    max-width: 1200px;
                    z-index: 1;
                }
                .auth-error {
                    background: #ffe0e0;
                    color: #c44;
                    padding: 10px 16px;
                    border-radius: 12px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 16px;
                    text-align: center;
                }
            `}</style>

            {/* Blobs */}
            <div className="blob-bg" style={{
                position: 'absolute', bottom: '0', left: '10%', width: '300px', height: '300px',
                background: '#fff5f5', borderRadius: '50%', zIndex: 0
            }}></div>

            <div className="auth-container">
                {/* Brand / Logo Side */}
                <div className="brand-side">
                    <img
                        src={logoImg}
                        alt="EduFlex Logo"
                        style={{ maxWidth: '250px', height: 'auto', display: 'block' }}
                    />
                    <div style={{ display: 'none', fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 'bold', color: '#000' }}>
                        EDUFLEX <br /> <span style={{ fontSize: '1rem', letterSpacing: '5px', textTransform: 'uppercase' }}>Education</span>
                    </div>
                </div>

                {/* Auth Card */}
                <div className="auth-card" style={{
                    background: '#ebdcdc',
                    padding: '40px 60px',
                    borderRadius: '40px',
                    width: '450px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    {/* Toggle Switch */}
                    <div style={{
                        background: '#c49696', borderRadius: '30px', padding: '5px', display: 'flex', marginBottom: '30px',
                        position: 'relative'
                    }}>
                        <Link to="/login" style={{
                            flex: 1, padding: '10px', borderRadius: '25px',
                            background: !isSignup ? '#fff' : 'transparent',
                            color: !isSignup ? '#c49696' : '#fff',
                            fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.3s'
                        }}>Login</Link>
                        <Link to="/signup" style={{
                            flex: 1, padding: '10px', borderRadius: '25px',
                            background: isSignup ? '#fff' : 'transparent',
                            color: isSignup ? '#c49696' : '#fff',
                            fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.3s'
                        }}>Sign up</Link>
                    </div>

                    <h2 style={{ fontFamily: 'var(--font-heading)', color: '#555', marginBottom: '30px' }}>
                        Welcome to EduFlex..
                    </h2>

                    {error && <div className="auth-error">{error}</div>}

                    <form className="flex flex-col gap-4" style={{ textAlign: 'left' }} onSubmit={handleSubmit}>
                        {/* Email — shown on BOTH login and signup */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%', padding: '15px', borderRadius: '25px', border: 'none', outline: 'none'
                                }}
                            />
                        </div>

                        {/* Username — only on signup */}
                        {isSignup && (
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>User Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your User name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={{
                                        width: '100%', padding: '15px', borderRadius: '25px', border: 'none', outline: 'none'
                                    }}
                                />
                            </div>
                        )}

                        {/* Password */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%', padding: '15px', borderRadius: '25px', border: 'none', outline: 'none'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                marginTop: '20px', background: loading ? '#d4b0b0' : '#c49696', color: '#fff',
                                padding: '15px', borderRadius: '25px', fontSize: '1.1rem', fontWeight: 'bold',
                                alignSelf: 'center', width: '50%', cursor: loading ? 'wait' : 'pointer',
                                transition: 'background 0.3s', border: 'none'
                            }}
                        >
                            {loading ? '...' : (isSignup ? 'Sign up' : 'Login')}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AuthForm;
