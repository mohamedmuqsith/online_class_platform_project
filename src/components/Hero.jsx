import React from 'react';
import '../index.css';

import homeImg from '../assets/home.png';

const Hero = () => {
    return (
        <section className="container hero-section" style={{ minHeight: '80vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <style>{`
                @media (max-width: 768px) {
                  .hero-section {
                    flex-direction: column !important;
                    text-align: center;
                    padding-top: 40px;
                    gap: 40px;
                    justify-content: center !important;
                  }
                  .hero-content {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                  }
                  .hero-illustration {
                     width: 100% !important;
                     max-width: 450px !important;
                     height: auto !important;
                  }
                  .floating-card {
                    font-size: 0.7rem !important;
                    padding: 8px 12px !important;
                  }
                  .blob-bg {
                    width: 200px !important;
                    height: 200px !important;
                    top: -20px !important;
                    left: -50px !important;
                  }
                }
            `}</style>

            {/* Background blobs imitation */}
            <div className="blob-bg" style={{
                position: 'absolute', top: '-50px', left: '-100px', width: '400px', height: '400px',
                background: '#fff5f5', borderRadius: '50%', zIndex: -1
            }}></div>

            <div className="hero-content" style={{ flex: 1 }}>
                <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '20px', fontFamily: 'serif' }}>
                    Studying Online <br /> is now Much <br /> Easier
                </h1>
                <p style={{ marginBottom: '30px', color: '#666' }}>
                    EduFlex is an interesting platform that will teach <br /> you in more an interactive way
                </p>
                <button className="btn-outline" style={{ borderRadius: '25px', padding: '10px 30px', borderColor: '#c49696', color: '#c49696' }}>
                    Join for free
                </button>
            </div>

            <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
                {/* Illustration Image */}
                <img
                    src={homeImg}
                    alt="Studying Online"
                    className="hero-illustration"
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                        objectFit: 'contain',
                        zIndex: 1
                    }}
                />

                {/* Floating Cards simulating the design */}
                <div className="floating-card" style={{
                    position: 'absolute', top: '10%', right: '5%', background: '#fff', padding: '10px 20px',
                    borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', fontSize: '0.8rem', display: 'flex', gap: '10px', alignItems: 'center', zIndex: 2
                }}>
                    <span>📅</span> 250k assisted Student
                </div>

                <div className="floating-card" style={{
                    position: 'absolute', bottom: '15%', left: '5%', background: '#fff', padding: '10px 20px',
                    borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', fontSize: '0.8rem', display: 'flex', gap: '10px', alignItems: 'center', zIndex: 2
                }}>
                    <span>✉️</span> Congratulations <br /> Your Admission completed
                </div>
            </div>

        </section>
    );
};

export default Hero;
