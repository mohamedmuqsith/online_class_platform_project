import React from 'react';

const BlogCategories = () => {
    const categories = [
        { title: 'Classes', icon: '🏫', color: '#f8dcdb' },
        { title: 'Interviews', icon: '👩‍💼', color: '#eef2f5' },
        { title: 'Tutorials', icon: '💻', color: '#eef2f5' },
        { title: 'Activities', icon: '🎨', color: '#eef2f5' }
    ];

    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'serif', color: '#333', marginBottom: '50px', textTransform: 'lowercase' }}>
                categories
            </h2>
            <div className="flex" style={{ gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {categories.map((cat, index) => (
                    <div key={index} style={{ textAlign: 'center', flex: 1, minWidth: '150px', maxWidth: '220px' }}>
                        <div style={{
                            width: '100%', aspectRatio: '1/1', background: cat.color,
                            borderRadius: '30px', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', fontSize: '4rem', marginBottom: '20px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            {cat.icon}
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>{cat.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogCategories;
