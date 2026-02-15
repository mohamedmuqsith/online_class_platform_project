import React from 'react';
import classImg from '../assets/user _interface _designed _for _the _classroom.png';
import interviewImg from '../assets/Teacher.png';
import tutorialImg from '../assets/For_students.png';
import activityImg from '../assets/For_nstructors.png';

const HomeCategories = () => {
    const categories = [
        { title: 'Classes', image: classImg },
        { title: 'Interviews', image: interviewImg },
        { title: 'Tutorials', image: tutorialImg },
        { title: 'Activities', image: activityImg }
    ];

    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <h2 style={{ fontSize: '2.2rem', fontFamily: 'serif', color: '#333', marginBottom: '60px', textAlign: 'left' }}>
                Categories
            </h2>
            <div className="flex categories-grid" style={{ gap: '20px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {categories.map((cat, index) => (
                    <div key={index} className="category-card" style={{ textAlign: 'center', flex: '1 1 220px', maxWidth: '270px', background: '#ebdcdc', borderRadius: '30px', padding: '20px', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{
                            width: '100%', aspectRatio: '4/3',
                            borderRadius: '20px', overflow: 'hidden', marginBottom: '20px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                        }}>
                            <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#333' }}>{cat.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeCategories;
