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
        <nav className="container" style={{ padding: '5px 0', position: 'relative' }}>
            <div className="flex justify-between items-center" style={{ width: '100%' }}>

                {/* Logo / Brand Name */}
                <Link to="/">
                    <img
                        src={logoImg}
                        alt="EduFlex Logo"
                        style={{ maxWidth: '120px', height: 'auto' }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu flex items-center" style={{ gap: '45px' }}>
                    <style>{`
                      @media (max-width: 992px) {
                        .desktop-menu { display: none !important; }
                        .mobile-menu-btn { display: block !important; }
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
                      }
                      .nav-link:hover {
                        color: var(--primary-color);
                      }
                    `}</style>
                    <ul className="flex items-center" style={{ listStyle: 'none', gap: '35px', margin: 0, padding: 0 }}>
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/courses" className="nav-link">Courses</Link></li>
                        <li><Link to="/careers" className="nav-link">Careers</Link></li>
                        <li><Link to="/blog" className="nav-link">Blog</Link></li>
                        <li><Link to="/about" className="nav-link">About us</Link></li>
                    </ul>
                    <Link to="/login" className="btn-primary" style={{
                        textDecoration: 'none',
                        padding: '8px 24px',
                        fontSize: '0.95rem',
                        fontWeight: '700',
                        boxShadow: '0 4px 14px rgba(196, 150, 150, 0.4)',
                        transform: 'translateY(0)',
                        transition: 'all 0.3s ease'
                    }}>
                        Login
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div className="mobile-menu-btn" onClick={toggleMenu} style={{ cursor: 'pointer', zIndex: 100, display: 'none' }}>
                    <div style={{ width: '28px', height: '3px', background: isOpen ? '#c49696' : '#333', margin: '6px 0', transition: '0.4s', transform: isOpen ? 'rotate(-45deg) translate(-6px, 7px)' : 'none' }}></div>
                    <div style={{ width: '28px', height: '3px', background: isOpen ? '#c49696' : '#333', margin: '6px 0', transition: '0.4s', opacity: isOpen ? 0 : 1 }}></div>
                    <div style={{ width: '28px', height: '3px', background: isOpen ? '#c49696' : '#333', margin: '6px 0', transition: '0.4s', transform: isOpen ? 'rotate(45deg) translate(-6px, -7px)' : 'none' }}></div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="mobile-menu-overlay" style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                    backgroundColor: '#fff', zIndex: 99, display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center', gap: '2.5rem'
                }}>
                    <Link to="/" onClick={toggleMenu} style={{ fontSize: '1.6rem', fontWeight: 600, color: '#333' }}>Home</Link>
                    <Link to="/courses" onClick={toggleMenu} style={{ fontSize: '1.6rem', fontWeight: 600, color: '#333' }}>Courses</Link>
                    <Link to="/careers" onClick={toggleMenu} style={{ fontSize: '1.6rem', fontWeight: 600, color: '#333' }}>Careers</Link>
                    <Link to="/blog" onClick={toggleMenu} style={{ fontSize: '1.6rem', fontWeight: 600, color: '#333' }}>Blog</Link>
                    <Link to="/about" onClick={toggleMenu} style={{ fontSize: '1.6rem', fontWeight: 600, color: '#333' }}>About us</Link>
                    <Link to="/login" onClick={toggleMenu} className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.3rem', padding: '14px 40px' }}>Login</Link>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
