import React from 'react';
import newsImg from '../assets/Related Blog.png';

const HomeFeatured = () => {
    return (
        <section className="container" style={{ padding: '40px 0' }}>
            <div className="flex featured-grid" style={{ gap: '40px', flexWrap: 'wrap' }}>
                {[1, 2].map((i) => (
                    <div key={i} className="featured-card" style={{
                        flex: 1, minWidth: '400px', background: '#ebdcdc',
                        borderRadius: '60px', padding: '50px', position: 'relative',
                        boxShadow: '0 15px 50px rgba(0,0,0,0.05)'
                    }}>
                        <div className="featured-card-img" style={{
                            width: '100%', height: '280px', background: '#fff',
                            borderRadius: '30px', marginBottom: '35px', overflow: 'hidden'
                        }}>
                            <img src={newsImg} alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '25px', lineHeight: '1.3', fontWeight: 'bold' }}>
                            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#333' }}></div>
                            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Lina</span>
                        </div>
                        <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '35px' }}>
                            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a href="#" style={{ color: '#333', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1rem' }}>Read more</a>
                            <span style={{ color: '#666', fontSize: '1.1rem' }}>👁️ 251,232</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex" style={{ justifyContent: 'center', gap: '15px', marginTop: '60px' }}>
                <button style={{ width: '45px', height: '45px', borderRadius: '10px', background: '#fff', border: '1px solid #ddd', fontSize: '1.5rem', cursor: 'pointer' }}>‹</button>
                <button style={{ width: '45px', height: '45px', borderRadius: '10px', background: '#c49696', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>›</button>
            </div>
        </section>
    );
};

export default HomeFeatured;
