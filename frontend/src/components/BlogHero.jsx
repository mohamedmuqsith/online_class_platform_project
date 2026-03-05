import React from 'react';

const BlogHero = () => {
    return (
        <section className="container" style={{ padding: '60px 0', background: '#e3d6d6', borderRadius: '40px', marginTop: '30px' }}>
            <div className="flex items-center" style={{ gap: '50px', flexWrap: 'wrap', padding: '0 40px' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ position: 'relative', marginBottom: '40px' }}>
                        <input
                            type="text"
                            placeholder="Search your favorite course"
                            style={{ width: '100%', padding: '15px 30px', borderRadius: '30px', border: 'none', outline: 'none', fontSize: '1.1rem' }}
                        />
                        <button style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: '#c49696', color: '#fff', border: 'none', padding: '10px 25px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
                            Search
                        </button>
                    </div>

                    <h1 style={{ fontSize: '2.8rem', fontFamily: 'serif', color: '#333', marginBottom: '25px', lineHeight: '1.2' }}>
                        Advanced Data Science <br /> & AI Course
                    </h1>
                    <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px', maxWidth: '450px' }}>
                        Equip yourself with data science skills through live, interactive lectures guided by industry expert mentors.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                        <span style={{ fontWeight: 'bold', color: '#333' }}>Live Interactive Classes</span>
                    </div>
                    <button className="btn-primary" style={{ padding: '15px 40px', borderRadius: '30px' }}>
                        Start learning now
                    </button>
                </div>

                <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        width: '100%', maxWidth: '500px', height: '400px',
                        background: '#1a0b3d', borderRadius: '50px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        overflow: 'hidden'
                    }}>
                        {/* Placeholder for AI Illustration */}
                        <div style={{ textAlign: 'center', color: '#fff' }}>
                            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🔮</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>AI & Data Science Illustration</div>
                            <div style={{ fontSize: '0.9rem', opacity: '0.7' }}>[Illustration Placeholder]</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
