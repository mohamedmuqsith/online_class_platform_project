import React from 'react';
import aiImg from '../assets/Ai.png';

const HomeHero = () => {
    return (
        <section className="container" style={{ padding: '60px 0', background: '#e3d6d6', borderRadius: '40px', marginTop: '30px' }}>
            <div className="flex items-center home-hero-flex" style={{ gap: '50px', flexWrap: 'wrap', padding: '0 40px' }}>
                <div className="home-hero-text" style={{ flex: 1, minWidth: '350px' }}>
                    <div style={{ position: 'relative', marginBottom: '50px', maxWidth: '500px' }}>
                        <input
                            type="text"
                            placeholder="Search your favourite course"
                            style={{ width: '100%', padding: '18px 30px', borderRadius: '40px', border: 'none', outline: 'none', fontSize: '1.1rem' }}
                        />
                        <button style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: '#c49696', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '35px', cursor: 'pointer', fontWeight: 'bold' }}>
                            Search
                        </button>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontFamily: 'serif', color: '#333', marginBottom: '30px', lineHeight: '1.1' }}>
                        Advanced Data Science <br /> & AI Course
                    </h1>
                    <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6', maxWidth: '450px' }}>
                        Equip yourself with data science skills through live, interactive lectures guided by industry expert mentors
                    </p>
                    <div style={{ marginBottom: '40px', fontWeight: '500', color: '#333', fontSize: '1.4rem' }}>
                        Live Interactive Classes
                    </div>
                    <button style={{ background: '#c49696', color: '#fff', border: 'none', padding: '18px 50px', borderRadius: '40px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                        Start learning now
                    </button>
                </div>
                <div className="home-hero-img-wrap" style={{ flex: 1, minWidth: '400px', display: 'flex', justifyContent: 'center' }}>
                    <div className="home-hero-img-box" style={{
                        width: '100%', maxWidth: '600px', height: '550px',
                        background: '#1a0d3d', borderRadius: '50px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <img
                            src={aiImg}
                            alt="AI Illustration"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
