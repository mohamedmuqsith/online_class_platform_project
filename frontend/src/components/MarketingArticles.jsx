import React from 'react';

const MarketingArticles = () => {
    const articles = [
        { title: 'Top 10 Learning Activities', price: '$80', oldPrice: '$55' },
        { title: 'AWS Certified Solutions Architect', price: '$80', oldPrice: '$100' },
        { title: 'How to Care Your Children', price: '$80', oldPrice: '$55' },
        { title: 'Creative art ideas', price: '$80', oldPrice: '$100' }
    ];

    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', fontFamily: 'serif', color: '#333' }}>Marketing Articles</h2>
                <a href="/courses" style={{ color: '#c49696', fontWeight: 'bold', textDecoration: 'none' }}>See all</a>
            </div>
            <div className="flex" style={{ gap: '25px', flexWrap: 'wrap' }}>
                {articles.map((art, index) => (
                    <div key={index} style={{
                        flex: 1, minWidth: '250px', background: '#fff',
                        borderRadius: '25px', padding: '20px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                        border: '1px solid #f0f0f0'
                    }}>
                        <div style={{ width: '100%', height: '150px', background: '#f5f5f5', borderRadius: '15px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>📄</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#999', marginBottom: '10px' }}>
                            <span>📅 18 min ago</span>
                            <span>⏱️ 5 min read</span>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', color: '#333', marginBottom: '15px', height: '50px', overflow: 'hidden' }}>{art.title}</h3>
                        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '20px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '25px', height: '25px', borderRadius: '50%', background: '#333' }}></div>
                                <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Lina</span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.8rem', marginRight: '5px' }}>{art.oldPrice}</span>
                                <span style={{ color: '#c49696', fontWeight: 'bold' }}>{art.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex" style={{ justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: i === 2 ? '#c49696' : '#ccc' }}></div>
                ))}
            </div>
        </section>
    );
};

export default MarketingArticles;
