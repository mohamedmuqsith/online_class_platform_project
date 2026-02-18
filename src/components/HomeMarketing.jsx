import React from 'react';
import articleImg from '../assets/Related Blog.png';

const HomeMarketing = () => {
    const articles = [
        { title: 'Top 10 Learning Activities', price: '$80', oldPrice: '$100' },
        { title: 'AWS Certified Solutions Architect', price: '$80', oldPrice: '$100' },
        { title: 'How to Care Your Children', price: '$80', oldPrice: '$100' },
        { title: 'Creative art ideas', price: '$80', oldPrice: '$100' }
    ];

    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '10px' }}>
                <h2 style={{ fontSize: '2.2rem', fontFamily: 'serif', color: '#333' }}>Marketing Articles</h2>
                <a href="/courses" style={{ color: '#c49696', fontWeight: 'bold', fontSize: '1.1rem' }}>See all</a>
            </div>
            <div className="flex marketing-grid" style={{ gap: '25px', flexWrap: 'wrap' }}>
                {articles.map((art, i) => (
                    <div key={i} className="marketing-card" style={{
                        flex: '1 1 240px', maxWidth: '100%', background: '#fff',
                        borderRadius: '25px', padding: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                        border: '1px solid #f0f0f0'
                    }}>
                        <div style={{ width: '100%', height: '160px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                            <img src={articleImg} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px', minHeight: '2.5rem' }}>{art.title}</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '15px', flexWrap: 'wrap', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#333' }}></div>
                                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Lina</span>
                            </div>
                            <div>
                                <span style={{ color: '#999', textDecoration: 'line-through', marginRight: '10px', fontSize: '0.9rem' }}>{art.oldPrice}</span>
                                <span style={{ color: '#c49696', fontWeight: 'bold', fontSize: '1.1rem' }}>{art.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex" style={{ justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: i === 3 ? '#c49696' : '#ddd' }}></div>
                ))}
            </div>
        </section>
    );
};

export default HomeMarketing;
