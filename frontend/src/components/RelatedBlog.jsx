import React from 'react';
import relatedBlogImg from '../assets/Related Blog.png';

const RelatedBlog = () => {
    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '10px' }}>
                <h2 style={{ fontSize: '2.2rem', fontFamily: 'serif', color: '#333' }}>Related Blog</h2>
                <a href="/blog" style={{ color: '#c49696', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>See all</a>
            </div>
            <div className="flex related-blog-grid" style={{ gap: '40px', flexWrap: 'wrap' }}>
                {[1, 2].map((i) => (
                    <div key={i} className="related-blog-card" style={{
                        flex: 1, minWidth: '350px', background: '#fff',
                        borderRadius: '40px', padding: '40px', position: 'relative',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                        border: '1px solid #f0f0f0'
                    }}>
                        <div className="related-blog-card-img" style={{
                            width: '100%', height: '250px', background: '#f5f5f5',
                            borderRadius: '25px', marginBottom: '25px', overflow: 'hidden'
                        }}>
                            <img
                                src={relatedBlogImg}
                                alt="Related blog"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.6rem', color: '#333', marginBottom: '20px', lineHeight: '1.4', fontWeight: 'bold' }}>
                            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#333' }}></div>
                            <div style={{ fontSize: '1.1rem' }}>
                                <span style={{ fontWeight: 'bold' }}>Lina</span>
                            </div>
                        </div>
                        <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px' }}>
                            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a href="/blog" style={{ color: '#c49696', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1rem' }}>Read more</a>
                            <span style={{ color: '#999', fontSize: '1rem' }}>👁️ 251,232</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex" style={{ justifyContent: 'center', gap: '20px', marginTop: '60px' }}>
                <button style={{ width: '45px', height: '45px', borderRadius: '10px', background: '#d8c5c5', color: '#666', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>‹</button>
                <button style={{ width: '45px', height: '45px', borderRadius: '10px', background: '#c49696', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>›</button>
            </div>
            <div className="flex" style={{ justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: i === 3 ? '#c49696' : '#ccc' }}></div>
                ))}
            </div>
        </section>
    );
};

export default RelatedBlog;
