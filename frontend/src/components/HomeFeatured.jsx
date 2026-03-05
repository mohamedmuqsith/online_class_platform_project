import React, { useState, useEffect } from 'react';
import { coursesAPI } from '../api';
import newsImg from '../assets/Related Blog.png';

const HomeFeatured = () => {
    const [featured, setFeatured] = useState([]);
    const [_loading, _setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                // Fetch first 2 courses as "featured" for home page news style
                const data = await coursesAPI.getAll({ limit: 2 });
                const formatted = data.map(c => ({
                    id: c._id,
                    title: c.title,
                    desc: c.description.substring(0, 150) + '...',
                    author: c.instructor?.username || 'Admin',
                    image: c.image || newsImg,
                    views: Math.floor(Math.random() * 500000) // Mocking views since not in DB
                }));
                setFeatured(formatted.length > 0 ? formatted : [
                    { id: '1', title: 'Class adds $30 million for Zoom-friendly solution', desc: 'Class, launched less than a year ago, integrates exclusively with Zoom...', author: 'Lina', image: newsImg, views: 251232 },
                    { id: '2', title: 'The Future of Remote Learning Platforms', desc: 'New technologies are emerging to make remote learning more interactive...', author: 'Lina', image: newsImg, views: 184500 }
                ]);
            } catch (err) {
                console.error('Featured fetch failed:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatured();
    }, []);

    return (
        <section className="container" style={{ padding: '40px 0' }}>
            <div className="flex featured-grid" style={{ gap: '40px', flexWrap: 'wrap' }}>
                {featured.map((item, i) => (
                    <div key={i} className="featured-card" style={{
                        flex: 1, minWidth: '400px', background: '#ebdcdc',
                        borderRadius: '60px', padding: '50px', position: 'relative',
                        boxShadow: '0 15px 50px rgba(0,0,0,0.05)'
                    }}>
                        <div className="featured-card-img" style={{
                            width: '100%', height: '280px', background: '#fff',
                            borderRadius: '30px', marginBottom: '35px', overflow: 'hidden'
                        }}>
                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '25px', lineHeight: '1.3', fontWeight: 'bold' }}>
                            {item.title}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>👤</div>
                            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.author}</span>
                        </div>
                        <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '35px' }}>
                            {item.desc}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a href={`/course-details?id=${item.id}`} style={{ color: '#333', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1rem' }}>Read more</a>
                            <span style={{ color: '#666', fontSize: '1.1rem' }}>👁️ {item.views.toLocaleString()}</span>
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
