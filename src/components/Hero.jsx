import React from 'react';
import '../index.css';

import dashboardImg from '../assets/Dashboardhome.png';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            height: '85vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>
            <style>{`
                @media (max-width: 768px) {
                  .hero-section {
                    height: auto !important;
                    min-height: 80vh;
                    padding: 40px 0;
                  }
                  .hero-text h1 {
                    font-size: 2.5rem !important;
                  }
                  .floating-card {
                    display: none !important;
                  }
                  .hero-bg-img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.3; /* Dim image on mobile for text readability */
                  }
                }
                @media (min-width: 769px) {
                    .hero-bg-img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        z-index: -1;
                    }
                }
            `}</style>

            {/* Background Image */}
            <img
                src={dashboardImg}
                alt="Dashboard Background"
                className="hero-bg-img"
            />

            <div className="container" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>

                {/* Text Content */}
                <div className="hero-text" style={{ maxWidth: '600px', padding: '20px', zIndex: 2 }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        lineHeight: '1.2',
                        marginBottom: '20px',
                        fontFamily: 'serif',
                        color: '#333'
                    }}>
                        Studying Online is now <br /> Much Easier
                    </h1>
                    <p style={{ marginBottom: '30px', color: '#555', fontSize: '1.1rem', maxWidth: '400px' }}>
                        EduFlex is an interesting platform that will teach you in more an interactive way
                    </p>
                    <button className="btn-outline" style={{
                        borderRadius: '30px',
                        padding: '12px 40px',
                        borderColor: '#ebdcdc',
                        color: '#333',
                        borderWidth: '1.5px',
                        fontSize: '1rem',
                        background: '#fff',
                        fontWeight: '600'
                    }}>
                        Join for free
                    </button>
                </div>

                {/* Floating Cards */}
                {/* Card 1: Congratulations */}
                <div className="floating-card" style={{
                    position: 'absolute',
                    top: '35%',
                    left: '50%',
                    transform: 'translateX(-15%)',
                    background: '#fff',
                    padding: '8px 25px',
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    fontSize: '0.8rem',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    zIndex: 2,
                    minWidth: '240px'
                }}>
                    <div style={{ background: '#333', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #fff', marginLeft: '2px' }}></div>
                    </div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '11px', color: '#333' }}>Congratulations Your</div>
                        <div style={{ fontSize: '10px', color: '#888' }}>Admission completed</div>
                    </div>
                </div>

                {/* Card 2: 250k Students */}
                <div className="floating-card" style={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '25%',
                    background: '#fff',
                    padding: '12px 25px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    zIndex: 2
                }}>
                    <div style={{ background: '#1a0d3d', color: '#fff', borderRadius: '5px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                        📊
                    </div>
                    <span style={{ fontWeight: '700', color: '#333' }}>250K assisted Student</span>
                </div>

                {/* User Code */}
                <div className="floating-card" style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    fontWeight: '800',
                    fontSize: '0.95rem',
                    color: '#333',
                    zIndex: 2
                }}>
                    E8DEDE
                </div>

            </div>
        </section>
    );
};

export default Hero;
