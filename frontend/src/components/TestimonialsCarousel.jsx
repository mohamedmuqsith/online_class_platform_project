import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
    { name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipis­cing elit, sed do eiusmod' },
    { name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipis­cing elit, sed do eiusmod' },
    { name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipis­cing elit, sed do eiusmod' },
    { name: 'Sarah Johnson', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.' },
    { name: 'Michael Chen', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
];

const TestimonialsCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const visibleCount = 3;
    const maxIndex = testimonials.length - visibleCount;

    const next = useCallback(() => {
        setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = () => {
        setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [paused, next]);

    return (
        <section style={{ background: 'linear-gradient(180deg, #d4a8a8 0%, #c49696 100%)', padding: '70px 20px 50px' }}>
            <style>{`
                .testimonials-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                    color: #5c4040;
                    text-align: center;
                    margin-bottom: 45px;
                    font-style: italic;
                }
                .testimonials-wrap {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .testimonials-track {
                    display: flex;
                    gap: 25px;
                    overflow: hidden;
                    flex: 1;
                }
                .testimonial-card {
                    background: #fff;
                    border-radius: 18px;
                    padding: 30px 25px;
                    text-align: center;
                    min-width: calc(33.333% - 17px);
                    max-width: calc(33.333% - 17px);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    flex-shrink: 0;
                }
                .testimonial-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
                }
                .testimonial-avatar {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #e8d5d5, #c49696);
                    margin: 0 auto 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.6rem;
                    color: #fff;
                    box-shadow: 0 4px 12px rgba(196,150,150,0.3);
                    overflow: hidden;
                }
                .testimonial-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .testimonial-name {
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    font-size: 1.05rem;
                    color: #333;
                    margin-bottom: 12px;
                }
                .testimonial-text {
                    color: #777;
                    font-size: 0.85rem;
                    line-height: 1.6;
                }
                .carousel-arrow {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    background: rgba(255,255,255,0.2);
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(5px);
                }
                .carousel-arrow:hover {
                    background: rgba(255,255,255,0.4);
                    transform: scale(1.1);
                }
                .carousel-dots {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 35px;
                }
                .carousel-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid rgba(255,255,255,0.6);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .carousel-dot.active {
                    background: #fff;
                    border-color: #fff;
                    transform: scale(1.2);
                }
                @media (max-width: 768px) {
                    .testimonial-card {
                        min-width: calc(100% - 0px) !important;
                        max-width: calc(100% - 0px) !important;
                    }
                }
            `}</style>

            <h2 className="testimonials-title">What our students have to say</h2>

            <div className="testimonials-wrap"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <button className="carousel-arrow" onClick={prev}>◀</button>

                <div className="testimonials-track">
                    {testimonials.slice(current, current + visibleCount).map((t, idx) => (
                        <div key={current + idx} className="testimonial-card">
                            <div className="testimonial-avatar">
                                👩‍🎓
                            </div>
                            <div className="testimonial-name">{t.name}</div>
                            <div className="testimonial-text">{t.text}</div>
                        </div>
                    ))}
                </div>

                <button className="carousel-arrow" onClick={next}>▶</button>
            </div>

            <div className="carousel-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`carousel-dot ${current === idx ? 'active' : ''}`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
