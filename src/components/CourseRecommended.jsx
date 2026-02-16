import React, { useState } from 'react';

const courseItems = [
    {
        title: 'Top 10 Learning Activities',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: '3 Month',
        instructor: 'Lina',
        oldPrice: '$100',
        newPrice: '$80',
        image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=300&h=200&fit=crop'
    },
    {
        title: 'AWS Certified solutions Architect',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: '3 Month',
        instructor: 'Lina',
        oldPrice: '$100',
        newPrice: '$80',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
    },
    {
        title: 'How to Care Your Children',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: '3 Month',
        instructor: 'Lina',
        oldPrice: '$100',
        newPrice: '$80',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&h=200&fit=crop'
    },
    {
        title: 'Creative art Ideas',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: '3 Month',
        instructor: 'Lina',
        oldPrice: '$100',
        newPrice: '$80',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop'
    }
];

const CourseRecommended = () => {
    const [dotIndex1, setDotIndex1] = useState(2);
    const [dotIndex2, setDotIndex2] = useState(2);

    return (
        <section className="container" style={{ padding: '20px 20px 80px' }}>
            <style>{`
                .rec-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }
                .rec-section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.8rem;
                    color: #333;
                    font-style: italic;
                }
                .see-all-link {
                    color: #4db6ac;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: opacity 0.3s;
                }
                .see-all-link:hover {
                    opacity: 0.7;
                }
                .course-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 22px;
                }
                .course-item-card {
                    background: #fff;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 3px 15px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .course-item-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .course-item-img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
                .course-item-body {
                    padding: 15px 18px;
                }
                .course-item-meta {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 10px;
                    font-size: 0.75rem;
                    color: #999;
                }
                .course-item-meta span {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .course-item-title {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: #333;
                    margin-bottom: 8px;
                    line-height: 1.3;
                }
                .course-item-desc {
                    color: #888;
                    font-size: 0.8rem;
                    line-height: 1.5;
                    margin-bottom: 15px;
                }
                .course-item-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #f0f0f0;
                    padding-top: 12px;
                }
                .course-instructor {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.85rem;
                    color: #555;
                }
                .course-instructor-avatar {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #c49696, #e8d5d5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.65rem;
                    color: #fff;
                }
                .course-price {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .old-price {
                    text-decoration: line-through;
                    color: #bbb;
                    font-size: 0.85rem;
                }
                .new-price {
                    color: #4db6ac;
                    font-weight: 700;
                    font-size: 1.1rem;
                }
                .section-dots {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 30px;
                }
                .section-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #ddd;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .section-dot.active {
                    background: #c49696;
                    transform: scale(1.3);
                }
                @media (max-width: 1024px) {
                    .course-cards-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 480px) {
                    .course-cards-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            {/* Recommended For You */}
            <div style={{ marginBottom: '60px' }}>
                <div className="rec-section-header">
                    <h2 className="rec-section-title">Recommended For You</h2>
                    <span className="see-all-link">See all</span>
                </div>
                <div className="course-cards-grid">
                    {courseItems.map((item, idx) => (
                        <div key={idx} className="course-item-card" onClick={() => window.location.href = '/course-details'} style={{ cursor: 'pointer' }}>
                            <img src={item.image} alt={item.title} className="course-item-img" />
                            <div className="course-item-body">
                                <div className="course-item-meta">
                                    <span>📚 {item.category}</span>
                                    <span>⏱ {item.duration}</span>
                                </div>
                                <div className="course-item-title">{item.title}</div>
                                <div className="course-item-desc">{item.desc}</div>
                                <div className="course-item-footer">
                                    <div className="course-instructor">
                                        <span className="course-instructor-avatar">👩</span>
                                        {item.instructor}
                                    </div>
                                    <div className="course-price">
                                        <span className="old-price">{item.oldPrice}</span>
                                        <span className="new-price">{item.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-dots">
                    {[0, 1, 2, 3, 4].map(i => (
                        <button key={i} className={`section-dot ${dotIndex1 === i ? 'active' : ''}`} onClick={() => setDotIndex1(i)} />
                    ))}
                </div>
            </div>

            {/* Get Choice of Your Course */}
            <div>
                <div className="rec-section-header">
                    <h2 className="rec-section-title">Get Choice of your course</h2>
                    <span className="see-all-link">See all</span>
                </div>
                <div className="course-cards-grid">
                    {courseItems.map((item, idx) => (
                        <div key={idx} className="course-item-card" onClick={() => window.location.href = '/course-details'} style={{ cursor: 'pointer' }}>
                            <img src={item.image} alt={item.title} className="course-item-img" />
                            <div className="course-item-body">
                                <div className="course-item-meta">
                                    <span>📚 {item.category}</span>
                                    <span>⏱ {item.duration}</span>
                                </div>
                                <div className="course-item-title">{item.title}</div>
                                <div className="course-item-desc">{item.desc}</div>
                                <div className="course-item-footer">
                                    <div className="course-instructor">
                                        <span className="course-instructor-avatar">👩</span>
                                        {item.instructor}
                                    </div>
                                    <div className="course-price">
                                        <span className="old-price">{item.oldPrice}</span>
                                        <span className="new-price">{item.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-dots">
                    {[0, 1, 2, 3, 4].map(i => (
                        <button key={i} className={`section-dot ${dotIndex2 === i ? 'active' : ''}`} onClick={() => setDotIndex2(i)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseRecommended;
