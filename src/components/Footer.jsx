import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ background: '#c49696', color: '#fff', padding: '60px 0 30px', marginTop: '50px' }}>
            <div className="container" style={{ textAlign: 'center' }}>

                {/* Logo in Footer */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                    <div style={{ background: '#fff', padding: '10px', borderRadius: '10px' }}>
                        <img src="/src/assets/logo.png" alt="Logo" style={{ width: '40px', height: 'auto' }} onError={(e) => e.target.style.display = 'none'} />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>EDUFLEX</h4>
                        <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>education</span>
                    </div>
                </div>

                <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', marginBottom: '30px', color: '#fff' }}>
                    Subscribe to Get our New-letter
                </h3>

                <div className="footer-subscribe" style={{
                    maxWidth: '500px', margin: '0 auto 50px', display: 'flex',
                    background: 'rgba(255,255,255,0.2)', borderRadius: '30px', padding: '5px'
                }}>
                    <input type="email" placeholder="Your Email" style={{
                        flex: 1, background: 'transparent', border: 'none', outline: 'none',
                        padding: '15px 20px', color: '#fff', minWidth: '0'
                    }} />
                    <button style={{
                        background: '#5c4040', color: '#fff', borderRadius: '25px',
                        padding: '12px 30px', fontWeight: 'bold', whiteSpace: 'nowrap'
                    }}>
                        Subscribe
                    </button>
                </div>

                <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '0.9rem', opacity: 0.9, padding: '0 15px' }}>
                    "Stay Inspired. Stay Ahead with EduFlex." <br />
                    Get expert tips, course updates, and learning resources delivered straight to your inbox.
                </p>

                <p style={{ marginBottom: '50px', fontSize: '0.9rem' }}>
                    ✉️ info@eduflex.io | 📞 +1 123 456 7890
                </p>

                <div className="footer-links" style={{
                    borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '20px',
                    display: 'flex', justifyContent: 'center', gap: '40px', fontSize: '0.9rem',
                    flexWrap: 'wrap'
                }}>
                    <Link to="/home" style={{ color: '#fff', opacity: 0.8 }}>Home</Link>
                    <Link to="/courses" style={{ color: '#fff', opacity: 0.8 }}>Courses</Link>
                    <Link to="/contact" style={{ color: '#fff', opacity: 0.8 }}>Contact</Link>
                    <Link to="/membership" style={{ color: '#fff', opacity: 0.8 }}>Membership</Link>
                    <Link to="/search" style={{ color: '#fff', opacity: 0.8 }}>Search</Link>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
