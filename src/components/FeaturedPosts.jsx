import React from 'react';

const FeaturedPosts = () => {
    return (
        <section className="container" style={{ padding: '40px 0' }}>
            <div className="flex" style={{ gap: '40px', flexWrap: 'wrap' }}>
                {[1, 2].map((i) => (
                    <div key={i} style={{
                        flex: 1, minWidth: '350px', background: '#ebdcdc',
                        borderRadius: '50px', padding: '40px', position: 'relative',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{
                            width: '100%', height: '200px', background: '#fff',
                            borderRadius: '30px', marginBottom: '25px', overflow: 'hidden'
                        }}>
                            <div style={{ width: '100%', height: '100%', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🖼️</div>
                        </div>
                        <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '20px', lineHeight: '1.4' }}>
                            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333' }}></div>
                            <span style={{ fontWeight: 'bold' }}>Lina</span>
                        </div>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '25px' }}>
                            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a href="#" style={{ color: '#c49696', fontWeight: 'bold', textDecoration: 'underline' }}>Read more</a>
                            <span style={{ color: '#999', fontSize: '0.8rem' }}>👁️ 251,232</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex" style={{ justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
                <button style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#c49696', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>‹</button>
                <button style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#c49696', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>›</button>
            </div>
        </section>
    );
};

export default FeaturedPosts;
