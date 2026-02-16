import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = ['Overview', 'Overview', 'Overview', 'Overview'];

const marketingCourses = [
    {
        title: 'AWS Certified solutions Architect',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: 'Month',
        instructor: 'Lina',
        oldPrice: '$10',
        newPrice: '$8',
        image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=300&h=200&fit=crop'
    },
    {
        title: 'AWS Certified solutions Architect',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: 'Month',
        instructor: 'Lina',
        oldPrice: '$10',
        newPrice: '$8',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
    },
    {
        title: 'AWS Certified solutions Architect',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: 'Month',
        instructor: 'Lina',
        oldPrice: '$10',
        newPrice: '$8',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&h=200&fit=crop'
    },
    {
        title: 'AWS Certified solutions Architect',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        category: 'Design',
        duration: 'Month',
        instructor: 'Lina',
        oldPrice: '$10',
        newPrice: '$8',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop'
    }
];

const ratingBars = [
    { stars: 5, pct: 75 },
    { stars: 4, pct: 55 },
    { stars: 3, pct: 35 },
    { stars: 2, pct: 15 },
    { stars: 1, pct: 5 },
];

const CourseDetails = () => {
    const [activeTab, setActiveTab] = useState(2);

    return (
        <div>
            <Navbar />

            <style>{`
                .cd-hero-banner {
                    width: 100%;
                    height: 350px;
                    object-fit: cover;
                    border-radius: 0 0 20px 20px;
                    display: block;
                }
                .cd-main {
                    max-width: 1100px;
                    margin: -60px auto 0;
                    padding: 0 20px;
                    display: flex;
                    gap: 30px;
                    position: relative;
                    z-index: 2;
                }
                .cd-left {
                    flex: 1;
                    min-width: 0;
                }
                .cd-right {
                    width: 320px;
                    flex-shrink: 0;
                }

                /* Pricing Sidebar */
                .cd-pricing-card {
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 6px 30px rgba(0,0,0,0.1);
                    padding: 0;
                    overflow: hidden;
                    position: sticky;
                    top: 20px;
                }
                .cd-pricing-img {
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
                }
                .cd-pricing-body {
                    padding: 25px;
                }
                .cd-price-row {
                    display: flex;
                    align-items: baseline;
                    gap: 12px;
                    margin-bottom: 8px;
                }
                .cd-price {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #333;
                }
                .cd-discount {
                    color: #c49696;
                    font-weight: 600;
                    font-size: 0.95rem;
                }
                .cd-time-left {
                    color: #4db6ac;
                    font-size: 0.85rem;
                    margin-bottom: 18px;
                }
                .cd-buy-btn {
                    width: 100%;
                    padding: 14px;
                    border-radius: 30px;
                    background: #4db6ac;
                    color: #fff;
                    border: none;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-bottom: 22px;
                }
                .cd-buy-btn:hover {
                    background: #3d9e94;
                    box-shadow: 0 6px 20px rgba(77,182,172,0.35);
                    transform: translateY(-2px);
                }
                .cd-includes-title {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: #333;
                    margin-bottom: 12px;
                }
                .cd-includes-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 20px;
                }
                .cd-includes-list li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 6px 0;
                    font-size: 0.82rem;
                    color: #666;
                }
                .cd-includes-icon {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }
                .cd-training-title {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: #333;
                    margin-bottom: 8px;
                }
                .cd-training-text {
                    font-size: 0.82rem;
                    color: #777;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }
                .cd-share-title {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: #333;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .cd-share-icons {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
                .cd-share-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    color: #fff;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                .cd-share-icon:hover {
                    transform: scale(1.15);
                }

                /* Tabs */
                .cd-tabs {
                    display: flex;
                    gap: 12px;
                    margin: 80px 0 30px;
                    flex-wrap: wrap;
                }
                .cd-tab {
                    padding: 10px 24px;
                    border-radius: 25px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid #e0e0e0;
                    background: #fff;
                    color: #666;
                }
                .cd-tab.active {
                    background: #333;
                    color: #fff;
                    border-color: #333;
                }
                .cd-tab:hover:not(.active) {
                    border-color: #c49696;
                    color: #c49696;
                }

                /* Rating Section */
                .cd-rating-box {
                    background: #fff;
                    border-radius: 18px;
                    padding: 30px;
                    box-shadow: 0 3px 15px rgba(0,0,0,0.06);
                    display: flex;
                    gap: 40px;
                    align-items: center;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                }
                .cd-rating-left {
                    text-align: center;
                    min-width: 120px;
                }
                .cd-rating-num {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #333;
                }
                .cd-rating-stars {
                    color: #f5a623;
                    font-size: 1.1rem;
                    margin: 5px 0;
                }
                .cd-rating-label {
                    color: #999;
                    font-size: 0.85rem;
                }
                .cd-rating-bars {
                    flex: 1;
                    min-width: 200px;
                }
                .cd-bar-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 8px;
                }
                .cd-bar-label {
                    font-size: 0.82rem;
                    color: #888;
                    min-width: 50px;
                    text-align: right;
                }
                .cd-bar-track {
                    flex: 1;
                    height: 8px;
                    background: #f0f0f0;
                    border-radius: 10px;
                    overflow: hidden;
                }
                .cd-bar-fill {
                    height: 100%;
                    border-radius: 10px;
                    transition: width 0.6s ease;
                }

                /* Instructor */
                .cd-instructor {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 15px;
                }
                .cd-instructor-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #c49696, #e8d5d5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    color: #fff;
                }
                .cd-instructor-name {
                    font-weight: 600;
                    color: #333;
                }
                .cd-instructor-duration {
                    color: #999;
                    font-size: 0.82rem;
                }
                .cd-description {
                    color: #c49696;
                    font-size: 0.9rem;
                    font-style: italic;
                    margin-bottom: 10px;
                }
                .cd-desc-body {
                    color: #777;
                    font-size: 0.88rem;
                    line-height: 1.6;
                    margin-bottom: 60px;
                }

                /* Marketing Articles */
                .cd-marketing-section {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 20px 80px;
                }
                .cd-marketing-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }
                .cd-marketing-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.8rem;
                    color: #333;
                    font-style: italic;
                }
                .cd-see-all {
                    color: #4db6ac;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: opacity 0.3s;
                }
                .cd-see-all:hover { opacity: 0.7; }
                .cd-marketing-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 22px;
                }
                .cd-m-card {
                    background: #fff;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 3px 15px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .cd-m-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .cd-m-card-img {
                    width: 100%;
                    height: 140px;
                    object-fit: cover;
                }
                .cd-m-card-body {
                    padding: 14px 16px;
                }
                .cd-m-card-meta {
                    display: flex;
                    gap: 12px;
                    font-size: 0.72rem;
                    color: #999;
                    margin-bottom: 8px;
                }
                .cd-m-card-title {
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: #333;
                    margin-bottom: 6px;
                    line-height: 1.3;
                }
                .cd-m-card-desc {
                    color: #888;
                    font-size: 0.78rem;
                    line-height: 1.5;
                    margin-bottom: 12px;
                }
                .cd-m-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #f0f0f0;
                    padding-top: 10px;
                }
                .cd-m-instructor {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.8rem;
                    color: #555;
                }
                .cd-m-avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #c49696, #e8d5d5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.55rem;
                    color: #fff;
                }
                .cd-m-price {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .cd-m-old {
                    text-decoration: line-through;
                    color: #bbb;
                    font-size: 0.8rem;
                }
                .cd-m-new {
                    color: #4db6ac;
                    font-weight: 700;
                    font-size: 1rem;
                }

                /* Dots */
                .cd-dots {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 25px;
                }
                .cd-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #ddd;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .cd-dot.active {
                    background: #333;
                    transform: scale(1.3);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .cd-main {
                        flex-direction: column !important;
                        margin-top: 0 !important;
                    }
                    .cd-right {
                        width: 100% !important;
                        order: -1;
                    }
                    .cd-pricing-card {
                        position: static !important;
                    }
                    .cd-marketing-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 480px) {
                    .cd-hero-banner {
                        height: 200px !important;
                    }
                    .cd-marketing-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .cd-rating-box {
                        flex-direction: column !important;
                        gap: 20px !important;
                    }
                    .cd-tabs {
                        justify-content: center !important;
                    }
                }
            `}</style>

            {/* Hero Banner */}
            <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop"
                alt="Course Banner"
                className="cd-hero-banner"
            />

            {/* Main Content */}
            <div className="cd-main">
                {/* Left Column */}
                <div className="cd-left">
                    {/* Tabs */}
                    <div className="cd-tabs">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                className={`cd-tab ${activeTab === idx ? 'active' : ''}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Rating Section */}
                    <div className="cd-rating-box">
                        <div className="cd-rating-left">
                            <div className="cd-rating-num">4 out of 5</div>
                            <div className="cd-rating-stars">★★★★★</div>
                            <div className="cd-rating-label">Top Rating</div>
                        </div>
                        <div className="cd-rating-bars">
                            {ratingBars.map((bar, idx) => (
                                <div key={idx} className="cd-bar-row">
                                    <span className="cd-bar-label">{bar.stars} Stars</span>
                                    <div className="cd-bar-track">
                                        <div className="cd-bar-fill" style={{
                                            width: `${bar.pct}%`,
                                            background: bar.stars >= 4 ? '#4db6ac' : bar.stars === 3 ? '#f5a623' : '#e57373'
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructor */}
                    <div className="cd-instructor">
                        <div className="cd-instructor-avatar">👩</div>
                        <div>
                            <div className="cd-instructor-name">Lina</div>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <span className="cd-instructor-duration">3 Month</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="cd-description">
                        Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrated exclusively..
                    </p>
                    <p className="cd-desc-body">
                        Class, launched less than a year ago by Blackboard co-founder Michael
                        Chasen, integrated exclusively..
                    </p>
                </div>

                {/* Right Column — Pricing Sidebar */}
                <div className="cd-right">
                    <div className="cd-pricing-card">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop"
                            alt="Course Preview"
                            className="cd-pricing-img"
                        />
                        <div className="cd-social-icons">
                            <span className="cd-social-icon" onClick={() => alert('Shared on Instagram')}>📷</span>
                            <span className="cd-social-icon" onClick={() => alert('Shared on Facebook')}>f</span>
                            <span className="cd-social-icon" onClick={() => alert('Shared on X')}>𝕏</span>
                            <span className="cd-social-icon" onClick={() => alert('Shared on LinkedIn')}>in</span>
                        </div>
                        <div className="cd-pricing-body">
                            <div className="cd-price-row">
                                <span className="cd-price">$49.65</span>
                                <span className="cd-discount">50% Off</span>
                            </div>
                            <div className="cd-time-left">11 hour left at this price</div>
                            <button
                                className="cd-buy-btn"
                                onClick={() => window.location.href = '/payment'}
                            >
                                Buy Now
                            </button>

                            <div className="cd-includes-title">This Course Included</div>
                            <ul className="cd-includes-list">
                                <li><span className="cd-includes-icon" style={{ background: '#4db6ac' }} /> Money Back Guarantee</li>
                                <li><span className="cd-includes-icon" style={{ background: '#f5a623' }} /> Access on all devices</li>
                                <li><span className="cd-includes-icon" style={{ background: '#e57373' }} /> Certification of completion</li>
                                <li><span className="cd-includes-icon" style={{ background: '#7986cb' }} /> 32 Modules</li>
                            </ul>

                            <div className="cd-training-title">Training 5 or more people</div>
                            <p className="cd-training-text">
                                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrated exclusively..
                            </p>

                            <div className="cd-share-title">Share this course</div>
                            <div className="cd-share-icons">
                                <div className="cd-share-icon" style={{ background: '#333' }}>🔗</div>
                                <div className="cd-share-icon" style={{ background: '#1877f2' }}>f</div>
                                <div className="cd-share-icon" style={{ background: '#e4405f' }}>📷</div>
                                <div className="cd-share-icon" style={{ background: '#ff0000' }}>▶</div>
                                <div className="cd-share-icon" style={{ background: '#0077b5' }}>in</div>
                                <div className="cd-share-icon" style={{ background: '#1da1f2' }}>𝕏</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marketing Articles */}
            <div className="cd-marketing-section">
                <div className="cd-marketing-header">
                    <h2 className="cd-marketing-title">Marketing Articles</h2>
                    <span className="cd-see-all">See all</span>
                </div>

                <div className="cd-marketing-grid">
                    {marketingCourses.map((item, idx) => (
                        <div key={idx} className="cd-m-card">
                            <img src={item.image} alt={item.title} className="cd-m-card-img" />
                            <div className="cd-m-card-body">
                                <div className="cd-m-card-meta">
                                    <span>📚 {item.category}</span>
                                    <span>⏱ {item.duration}</span>
                                </div>
                                <div className="cd-m-card-title">{item.title}</div>
                                <div className="cd-m-card-desc">{item.desc}</div>
                                <div className="cd-m-card-footer">
                                    <div className="cd-m-instructor">
                                        <span className="cd-m-avatar">👩</span>
                                        {item.instructor}
                                    </div>
                                    <div className="cd-m-price">
                                        <span className="cd-m-old">{item.oldPrice}</span>
                                        <span className="cd-m-new">{item.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cd-dots">
                    {[0, 1, 2, 3].map(i => (
                        <button key={i} className={`cd-dot ${i === 2 ? 'active' : ''}`} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CourseDetails;
