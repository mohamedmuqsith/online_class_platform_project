import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container" style={{ padding: '5px 0', position: 'relative', zIndex: 1000 }}>
            <style>{`
                @media (max-width: 992px) {
                    .desktop-menu { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
                @media (min-width: 993px) {
                    .mobile-menu-btn { display: none !important; }
                    .mobile-menu-overlay { display: none !important; }
                }

                .nav-link {
                    font-weight: 500;
                    color: #666;
                    transition: color 0.3s ease;
                    font-size: 0.95rem;
                    position: relative;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background: var(--primary-color);
                    transition: width 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--primary-color);
                }
                .nav-link:hover::after {
                    width: 100%;
                }

                /* Hamburger animation */
                .hamburger-line {
                    width: 28px;
                    height: 3px;
                    background: #333;
                    border-radius: 3px;
                    transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
                    transform-origin: center;
                }
                .hamburger-line.open {
                    background: var(--primary-color);
                }
                .hamburger-line.line1.open {
                    transform: rotate(45deg) translate(6px, 6px);
                }
                .hamburger-line.line2.open {
                    opacity: 0;
                    transform: scaleX(0);
                }
                .hamburger-line.line3.open {
                    transform: rotate(-45deg) translate(6px, -6px);
                }

                /* Mobile overlay animation */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    z-index: 999;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 0;
                    animation: fadeSlideIn 0.4s ease forwards;
                }

                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .mobile-nav-link {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #333;
                    text-decoration: none;
                    padding: 18px 0;
                    position: relative;
                    transition: all 0.3s ease;
                    opacity: 0;
                    animation: linkFadeIn 0.4s ease forwards;
                }
                .mobile-nav-link:nth-child(1) { animation-delay: 0.05s; }
                .mobile-nav-link:nth-child(2) { animation-delay: 0.1s; }
                .mobile-nav-link:nth-child(3) { animation-delay: 0.15s; }
                .mobile-nav-link:nth-child(4) { animation-delay: 0.2s; }
                .mobile-nav-link:nth-child(5) { animation-delay: 0.25s; }
                .mobile-nav-link:nth-child(6) { animation-delay: 0.3s; }

                @keyframes linkFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .mobile-nav-link:hover {
                    color: var(--primary-color);
                    transform: scale(1.05);
                }

                .mobile-nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 12px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background: var(--primary-color);
                    transition: width 0.3s ease;
                }
                .mobile-nav-link:hover::after {
                    width: 60%;
                }

                .mobile-login-btn {
                    margin-top: 15px;
                    opacity: 0;
                    animation: linkFadeIn 0.4s ease forwards;
                    animation-delay: 0.35s;
                }
            `}</style>

            <div className="flex justify-between items-center" style={{ width: '100%' }}>

                {/* Logo */}
                <Link to="/">
                    <img
                        src={logoImg}
                        alt="EduFlex Logo"
                        style={{ maxWidth: '120px', height: 'auto' }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu flex items-center" style={{ gap: '45px' }}>
                    <ul className="flex items-center" style={{ listStyle: 'none', gap: '35px', margin: 0, padding: 0 }}>
                        <li><Link to="/home" className="nav-link">Home</Link></li>
                        <li><Link to="/courses" className="nav-link">Courses</Link></li>
                        <li><Link to="/course-calendar" className="nav-link">Dashboard</Link></li>
                        <li><Link to="/meetings" className="nav-link">Meetings</Link></li>
                        <li><Link to="/membership" className="nav-link">Membership</Link></li>
                        <li><Link to="/blog" className="nav-link">Blog</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                    <Link to="/login" className="btn-primary" style={{
                        textDecoration: 'none',
                        padding: '10px 32px',
                        fontSize: '0.95rem',
                        fontWeight: '700',
                        borderRadius: '30px',
                        boxShadow: '0 8px 24px rgba(196, 150, 150, 0.3)',
                        transition: 'all 0.3s ease'
                    }}>
                        Login
                    </Link>
                </div>

                {/* Hamburger Toggle */}
                <div
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    style={{
                        cursor: 'pointer',
                        zIndex: 1001,
                        display: 'none',
                        flexDirection: 'column',
                        gap: '5px',
                        padding: '8px',
                        borderRadius: '8px',
                        transition: 'background 0.3s ease'
                    }}
                >
                    <div className={`hamburger-line line1 ${isOpen ? 'open' : ''}`}></div>
                    <div className={`hamburger-line line2 ${isOpen ? 'open' : ''}`}></div>
                    <div className={`hamburger-line line3 ${isOpen ? 'open' : ''}`}></div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="mobile-menu-overlay">
                    <Link to="/home" onClick={toggleMenu} className="mobile-nav-link">Home</Link>
                    <Link to="/courses" onClick={toggleMenu} className="mobile-nav-link">Courses</Link>
                    <Link to="/course-calendar" onClick={toggleMenu} className="mobile-nav-link">Dashboard / Calendar</Link>
                    <Link to="/meetings" onClick={toggleMenu} className="mobile-nav-link">Live Meetings</Link>
                    <Link to="/create-event" onClick={toggleMenu} className="mobile-nav-link">Create Event</Link>
                    <Link to="/membership" onClick={toggleMenu} className="mobile-nav-link">Membership</Link>
                    <Link to="/blog" onClick={toggleMenu} className="mobile-nav-link">Blog</Link>
                    <Link to="/contact" onClick={toggleMenu} className="mobile-nav-link">Contact</Link>
                    <Link to="/login" onClick={toggleMenu} className="btn-primary mobile-login-btn" style={{
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        padding: '14px 50px',
                        borderRadius: '30px',
                        boxShadow: '0 8px 24px rgba(196, 150, 150, 0.3)'
                    }}>
                        Login
                    </Link>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
