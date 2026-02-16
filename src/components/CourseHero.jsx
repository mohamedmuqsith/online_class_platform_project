import React, { useState, useEffect, useCallback } from 'react';

const lessonCards = [
    {
        title: 'AWS Certified Solutions',
        instructor: 'Lina',
        progress: 'Lesson 5 of 7',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop'
    },
    {
        title: 'AWS Certified Solutions',
        instructor: 'Lina',
        progress: 'Lesson 5 of 7',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
    },
    {
        title: 'AWS Certified Solutions',
        instructor: 'Lina',
        progress: 'Lesson 5 of 7',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
    },
    {
        title: 'Web Development Masterclass',
        instructor: 'Lina',
        progress: 'Lesson 3 of 10',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop'
    },
    {
        title: 'Data Science Bootcamp',
        instructor: 'Lina',
        progress: 'Lesson 2 of 8',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    }
];

const CourseHero = () => {
    const [current, setCurrent] = useState(0);
    const visibleCount = 3;
    const maxIndex = lessonCards.length - visibleCount;

    const next = useCallback(() => {
        setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = () => {
        setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section style={{ background: '#f9f0f0', padding: '50px 20px 40px' }}>
            <style>{`
                .course-hero-container {
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .course-hero-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }
                .course-hero-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.8rem;
                    color: #333;
                    font-style: italic;
                }
                .view-history {
                    color: #4db6ac;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: opacity 0.3s;
                }
                .view-history:hover {
                    opacity: 0.7;
                }
                .lesson-carousel-wrap {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .lesson-track {
                    display: flex;
                    gap: 25px;
                    overflow: hidden;
                    flex: 1;
                }
                .lesson-card {
                    background: #fff;
                    border-radius: 18px;
                    overflow: hidden;
                    min-width: calc(33.333% - 17px);
                    max-width: calc(33.333% - 17px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    flex-shrink: 0;
                }
                .lesson-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                }
                .lesson-card-img {
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
                }
                .lesson-card-body {
                    padding: 15px 18px;
                }
                .lesson-card-title {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: #333;
                    margin-bottom: 8px;
                }
                .lesson-card-instructor {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.85rem;
                    color: #777;
                    margin-bottom: 8px;
                }
                .instructor-avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #c49696, #e8d5d5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.6rem;
                    color: #fff;
                }
                .lesson-progress {
                    font-size: 0.8rem;
                    color: #999;
                    text-align: right;
                }
                .lesson-arrow {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: #4db6ac;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }
                .lesson-arrow:hover {
                    background: #3d9e94;
                    transform: scale(1.1);
                }
                @media (max-width: 768px) {
                    .lesson-card {
                        min-width: calc(100%) !important;
                        max-width: calc(100%) !important;
                    }
                }
            `}</style>

            <div className="course-hero-container">
                <div className="course-hero-header">
                    <h2 className="course-hero-title">Welcome back, ready for your next lesson?</h2>
                    <span className="view-history">View history</span>
                </div>

                <div className="lesson-carousel-wrap">
                    <div className="lesson-track">
                        {lessonCards.slice(current, current + visibleCount).map((card, idx) => (
                            <div key={current + idx} className="lesson-card">
                                <img src={card.image} alt={card.title} className="lesson-card-img" />
                                <div className="lesson-card-body">
                                    <div className="lesson-card-title">{card.title}</div>
                                    <div className="lesson-card-instructor">
                                        <span className="instructor-avatar">👩</span>
                                        {card.instructor}
                                    </div>
                                    <div className="lesson-progress">{card.progress}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                        <button className="lesson-arrow" onClick={prev}>◀</button>
                        <button className="lesson-arrow" onClick={next}>▶</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;
