import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseContents = [
    { title: 'Get Started', duration: '1 Hour', lessons: '5 Lessons', completed: true },
    { title: 'Work with Numpy', duration: '59:00', lessons: '3 Lessons', active: true },
    { title: 'Work with Numpy', duration: '59:00', lessons: '3 Lessons' },
    { title: 'Using Illustrator', duration: '1 Hour', lessons: '4 Lessons' },
    { title: 'What is Pandas?', duration: '12:54', lessons: '5 Lessons' },
];

const Meetings = () => {
    const [openIndex, setOpenIndex] = useState(1);
    const [isCamOn, setIsCamOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);
    const [currentPage, setCurrentPage] = useState(2);

    return (
        <div style={{ background: '#fdf6f6', minHeight: '100vh' }}>
            <Navbar />

            <style>{`
                .mt-container {
                    max-width: 1200px;
                    margin: 40px auto;
                    padding: 0 20px;
                }
                
                .mt-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 30px;
                }
                
                .mt-back-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    background: #c49696;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    cursor: pointer;
                    font-size: 1.2rem;
                }
                
                .mt-title-info {
                    flex: 1;
                }
                
                .mt-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #333;
                    margin: 0;
                }
                
                .mt-subtitle {
                    color: #888;
                    font-size: 0.9rem;
                    margin-top: 5px;
                }
                
                .mt-content-grid {
                    display: flex;
                    gap: 30px;
                    align-items: flex-start;
                }
                
                .mt-video-area {
                    flex: 1;
                    min-width: 0;
                }
                
                .mt-video-box {
                    background: #333;
                    border-radius: 24px;
                    height: 500px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
                }
                
                .mt-main-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .mt-pip-videos {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                
                .mt-pip-box {
                    width: 100px;
                    height: 75px;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 2px solid rgba(255,255,255,0.3);
                }
                
                .mt-pip-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .mt-controls {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(255,255,255,0.9);
                    backdrop-filter: blur(10px);
                    padding: 12px 25px;
                    border-radius: 40px;
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                }
                
                .mt-control-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 1.1rem;
                    border: none;
                    background: none;
                }
                
                .mt-control-btn:hover { background: #f0f0f0; }
                .mt-control-btn.red { background: #ff5252; color: #fff; }
                .mt-control-btn.red:hover { background: #ff1744; }
                .mt-control-icon { color: #555; }
                .mt-control-btn.red .mt-control-icon { color: #fff; }
                
                .mt-pagination {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    margin-top: 25px;
                }
                
                .mt-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    border: 2px solid #ccc;
                    background: none;
                    cursor: pointer;
                    padding: 0;
                }
                
                .mt-dot.active {
                    background: #c49696;
                    border-color: #c49696;
                    transform: scale(1.2);
                }
                
                /* Sidebar */
                .mt-sidebar {
                    width: 350px;
                    background: #fff;
                    border-radius: 20px;
                    padding: 25px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }
                
                .mt-sb-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 5px;
                }
                
                .mt-sb-progress-text {
                    font-size: 0.8rem;
                    color: #4db6ac;
                    font-weight: 700;
                    margin-bottom: 12px;
                    display: block;
                }
                
                .mt-sb-progress-bar {
                    height: 4px;
                    background: #eee;
                    border-radius: 10px;
                    display: flex;
                    gap: 5px;
                    margin-bottom: 30px;
                }
                
                .mt-sb-progress-fill {
                    height: 100%;
                    flex: 1;
                    background: #4db6ac;
                    border-radius: 10px;
                }
                
                .mt-sb-progress-empty {
                    height: 100%;
                    flex: 1;
                    background: #eee;
                    border-radius: 10px;
                }
                
                .mt-accordion {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                
                .mt-acc-item {
                    border: 1px solid #eee;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                
                .mt-acc-item.active {
                    border-color: #4db6ac;
                    box-shadow: 0 0 0 1px #4db6ac;
                }
                
                .mt-acc-header {
                    padding: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    background: #fff;
                }
                
                .mt-acc-info h4 {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 4px;
                }
                
                .mt-acc-meta {
                    display: flex;
                    gap: 15px;
                    font-size: 0.75rem;
                    color: #999;
                }
                
                .mt-acc-meta span {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                
                .mt-acc-chevron {
                    transition: transform 0.3s;
                    color: #999;
                }
                
                .mt-acc-item.open .mt-acc-chevron {
                    transform: rotate(180deg);
                }
                
                @media (max-width: 1024px) {
                    .mt-content-grid { flex-direction: column; }
                    .mt-sidebar { width: 100%; }
                }
                
                @media (max-width: 600px) {
                    .mt-video-box { height: 300px; }
                    .mt-controls { gap: 10px; padding: 8px 15px; bottom: 15px; }
                    .mt-control-btn { width: 32px; height: 32px; font-size: 0.9rem; }
                    .mt-title { font-size: 1.4rem; }
                }
            `}</style>

            <div className="mt-container">
                <div className="mt-header">
                    <button className="mt-back-btn" onClick={() => window.location.href = '/course-calendar'}>←</button>
                    <div className="mt-title-info">
                        <h1 className="mt-title">UX/UI Design Conference Meeting</h1>
                        <p className="mt-subtitle">9 Lesson • 6h 30min</p>
                    </div>
                </div>

                <div className="mt-content-grid">
                    <div className="mt-video-area">
                        <div className="mt-video-box">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop" className="mt-main-video" alt="Presenter" />

                            <div className="mt-pip-videos">
                                <div className="mt-pip-box">
                                    <img src="https://images.unsplash.com/photo-1580489944761-15a3bbd7547b?w=100&h=75&fit=crop" className="mt-pip-img" alt="Student 1" />
                                </div>
                                <div className="mt-pip-box">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=75&fit=crop" className="mt-pip-img" alt="Student 2" />
                                </div>
                            </div>

                            <div className="mt-controls">
                                <button
                                    className={`mt-control-btn ${!isCamOn ? 'red' : ''}`}
                                    onClick={() => setIsCamOn(!isCamOn)}
                                >
                                    <span className="mt-control-icon">{isCamOn ? '📹' : '📵'}</span>
                                </button>
                                <button
                                    className={`mt-control-btn ${!isMicOn ? 'red' : ''}`}
                                    onClick={() => setIsMicOn(!isMicOn)}
                                >
                                    <span className="mt-control-icon">{isMicOn ? '🎤' : '🔇'}</span>
                                </button>
                                <button className="mt-control-btn red" onClick={() => window.location.href = '/course-calendar'}>
                                    <span className="mt-control-icon">📞</span>
                                </button>
                                <button className="mt-control-btn" onClick={() => alert('Screen sharing started')}>
                                    <span className="mt-control-icon">🖥️</span>
                                </button>
                                <button className="mt-control-btn" onClick={() => alert('Raising hand...')}>
                                    <span className="mt-control-icon">📤</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-pagination">
                            {[0, 1, 2, 3, 4].map(idx => (
                                <button
                                    key={idx}
                                    className={`mt-dot ${idx === currentPage ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(idx)}
                                />
                            ))}
                        </div>
                    </div>

                    <aside className="mt-sidebar">
                        <h3 className="mt-sb-title">Course Contents</h3>
                        <span className="mt-sb-progress-text">2/5 COMPLETED</span>
                        <div className="mt-sb-progress-bar">
                            <div className="mt-sb-progress-fill" />
                            <div className="mt-sb-progress-fill" />
                            <div className="mt-sb-progress-empty" />
                            <div className="mt-sb-progress-empty" />
                            <div className="mt-sb-progress-empty" />
                        </div>

                        <div className="mt-accordion">
                            {CourseContents.map((item, idx) => (
                                <div key={idx} className={`mt-acc-item ${openIndex === idx ? 'open' : ''} ${item.active ? 'active' : ''}`}>
                                    <div className="mt-acc-header" onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}>
                                        <div className="mt-acc-info">
                                            <h4>{item.title}</h4>
                                            <div className="mt-acc-meta">
                                                <span>⏱️ {item.duration}</span>
                                                <span>📖 {item.lessons}</span>
                                            </div>
                                        </div>
                                        <div className="mt-acc-chevron">▼</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Meetings;
