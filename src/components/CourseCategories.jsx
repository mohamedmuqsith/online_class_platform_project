import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
    { name: 'Design', icon: '✏️', color: '#e0f7fa' },
    { name: 'Development', icon: '💻', color: '#e0f7fa' },
    { name: 'Business', icon: '💼', color: '#e0f7fa' },
    { name: 'Marketing', icon: '📢', color: '#e0f7fa' },
    { name: 'Photography', icon: '📷', color: '#e0f7fa' },
    { name: 'Acting', icon: '🎬', color: '#e0f7fa' },
];

const CourseCategories = () => {
    const navigate = useNavigate();
    return (
        <section className="container" style={{ padding: '60px 20px' }}>
            <style>{`
                .cat-section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                    color: #333;
                    text-align: center;
                    margin-bottom: 45px;
                    font-style: italic;
                }
                .course-cat-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .course-cat-card {
                    background: #fff;
                    border-radius: 18px;
                    padding: 30px 20px;
                    text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .course-cat-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 8px 25px rgba(196,150,150,0.2);
                }
                .cat-icon-wrap {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    background: #e0f7fa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.6rem;
                    margin: 0 auto 15px;
                    transition: transform 0.3s ease;
                }
                .course-cat-card:hover .cat-icon-wrap {
                    transform: scale(1.1) rotate(5deg);
                }
                .cat-name {
                    font-weight: 700;
                    font-size: 1rem;
                    color: #333;
                    margin-bottom: 10px;
                }
                .cat-desc {
                    color: #888;
                    font-size: 0.8rem;
                    line-height: 1.5;
                }
                @media (max-width: 768px) {
                    .course-cat-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 480px) {
                    .course-cat-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            <h2 className="cat-section-title">Choice favourite course from top category</h2>

            <div className="course-cat-grid">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="course-cat-card"
                        onClick={() => navigate(`/search?category=${encodeURIComponent(cat.name)}`)}
                    >
                        <div className="cat-icon-wrap">
                            {cat.icon}
                        </div>
                        <div className="cat-name">{cat.name}</div>
                        <div className="cat-desc">
                            Explore courses in our {cat.name} category and advance your career.
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseCategories;
