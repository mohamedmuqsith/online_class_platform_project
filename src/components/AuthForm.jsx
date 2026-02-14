import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../index.css';

const AuthForm = () => {
    const location = useLocation();
    const isSignup = location.pathname === '/signup';

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh',
            background: '#fff', position: 'relative', padding: '20px'
        }}>
            <style>{`
                @media (max-width: 768px) {
                  .auth-card {
                    width: 100% !important;
                    padding: 30px 20px !important;
                  }
                  .blob-bg {
                    width: 150px !important;
                    height: 150px !important;
                  }
                }
            `}</style>
            {/* Blobs */}
            <div className="blob-bg" style={{
                position: 'absolute', bottom: '0', left: '10%', width: '300px', height: '300px',
                background: '#fff5f5', borderRadius: '50%', zIndex: 0
            }}></div>

            <div className="auth-card" style={{
                background: '#ebdcdc',
                padding: '40px 60px',
                borderRadius: '40px',
                width: '450px',
                zIndex: 1,
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                textAlign: 'center'
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

                <form className="flex flex-col gap-4" style={{ textAlign: 'left' }}>
                    {isSignup && (
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Email</label>
                            <input type="email" placeholder="Enter Your Email" style={{
                                width: '100%', padding: '15px', borderRadius: '25px', border: 'none', outline: 'none'
                            }} />
                        </div>
                    )}

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>User Name</label>
                        <input type="text" placeholder="Enter Your User name" style={{
                            width: '100%', padding: '15px', borderRadius: '25px', border: 'none', outline: 'none'
                        }} />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Password</label>
                        <input type="password" placeholder="Enter Password" style={{
                            width: '100%', padding: '15px', borderRadius: '25px', border: 'none', outline: 'none'
                        }} />
                    </div>

                    <button type="submit" style={{
                        marginTop: '20px', background: '#c49696', color: '#fff',
                        padding: '15px', borderRadius: '25px', fontSize: '1.1rem', fontWeight: 'bold',
                        alignSelf: 'center', width: '50%'
                    }}>
                        {isSignup ? 'Sign up' : 'Login'}
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AuthForm;
