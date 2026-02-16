import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const lessons = [
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: true },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: false },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: false },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: false },
];

const quizzes = Array(11).fill({ title: 'Lesson 01 : Introduction about XD', time: '30 mins' });

const CreateEvent = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
            <style>{`
                /* Sidebar - Reused from Calendar */
                .ce-sidebar {
                    width: 280px;
                    background: #fff;
                    border-right: 1px solid #eee;
                    display: flex;
                    flex-direction: column;
                    flex-shrink: 0;
                    height: 100vh;
                    position: sticky;
                    top: 0;
                    overflow-y: auto;
                }
                .ce-sidebar-header {
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    border-bottom: 1px solid #f5f5f5;
                }
                .back-btn {
                    width: 32px;
                    height: 32px;
                    border-radius: 6px;
                    background: #c49696;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                }
                .ce-logo { height: 40px; }
                .ce-sidebar-content { padding: 20px; }
                .section-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                    padding-left: 5px;
                }
                .lesson-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 15px;
                    border-radius: 8px;
                    margin-bottom: 8px;
                    font-size: 0.8rem;
                    color: #555;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .lesson-item.active { background: #666; color: #fff; }
                .lesson-item.orange { background: #fff3e0; border: 1px solid #ffe0b2; color: #333; }
                .lesson-item.blue { background: #e3f2fd; border: 1px solid #bbdefb; color: #333; }
                .lesson-item.red { background: #ffebee; border: 1px solid #ffcdd2; color: #333; }
                
                /* Main */
                .ce-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
                .ce-content-wrap { padding: 0 40px 60px; }

                .ce-hero {
                    background: #c49696;
                    border-radius: 12px;
                    padding: 30px 40px;
                    color: #fff;
                    margin: 30px 0;
                    position: relative;
                }
                .ce-hero-title { font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 8px; }
                .ce-hero-sub { font-size: 1rem; opacity: 0.9; }
                .ce-hero-timer {
                    position: absolute;
                    top: 30px;
                    right: 40px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.2);
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                }

                /* Form Card */
                .ce-form-card {
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 5px 25px rgba(0,0,0,0.04);
                    padding: 40px;
                }
                .ce-form-title { font-size: 1.8rem; font-weight: 700; color: #333; margin-bottom: 12px; }
                .ce-form-desc { font-size: 0.88rem; color: #777; line-height: 1.6; margin-bottom: 40px; }

                .form-row { display: flex; gap: 30px; margin-bottom: 25px; }
                .form-group { flex: 1; display: flex; flex-direction: column; gap: 8px; }
                .form-group.full { width: 100%; margin-bottom: 25px; }
                
                .form-label { font-size: 0.9rem; font-weight: 700; color: #333; }
                .form-input, .form-select, .form-textarea {
                    padding: 15px 20px;
                    border: 1px solid #eee;
                    border-radius: 10px;
                    font-size: 0.9rem;
                    outline: none;
                    transition: border-color 0.3s;
                    background: #fff;
                }
                .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: #c49696; }
                .form-textarea { min-height: 120px; resize: none; }
                
                .save-btn {
                    background: #c49696;
                    color: #fff;
                    border: none;
                    padding: 14px 50px;
                    border-radius: 10px;
                    font-weight: 700;
                    cursor: pointer;
                    float: right;
                    transition: background 0.3s;
                    margin-top: 10px;
                }
                .save-btn:hover { background: #b08585; }

                @media (max-width: 768px) {
                    .ce-sidebar { display: none; }
                    .ce-content-wrap { padding: 0 20px 40px; }
                    .form-row { flex-direction: column; gap: 20px; }
                }
            `}</style>

            {/* Sidebar */}
            <aside className="ce-sidebar">
                <div className="ce-sidebar-header">
                    <button className="back-btn" onClick={() => window.location.href = '/course-calendar'}>←</button>
                    <img src="/logo-black.png" alt="Eduflex" className="ce-logo"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/120x40?text=EDUFLEX"; }} />
                </div>

                <div className="ce-sidebar-content">
                    <h3 className="section-title">Change Simplification</h3>
                    {lessons.map((item, i) => (
                        <div key={i} className={`lesson-item ${item.active ? 'active' : i % 3 === 1 ? 'orange' : i % 3 === 2 ? 'blue' : 'red'}`}>
                            <span>📖</span>
                            <span>{item.title}</span>
                            <span style={{ marginLeft: 'auto', opacity: 0.8 }}>{item.time}</span>
                        </div>
                    ))}

                    <h3 className="section-title" style={{ marginTop: '30px' }}>PRACTICE QUIZ</h3>
                    {quizzes.map((item, i) => (
                        <div key={i} className={`lesson-item ${i % 4 === 0 ? 'blue' : i % 4 === 1 ? 'orange' : i % 4 === 2 ? 'blue' : 'red'}`}>
                            <span>📖</span>
                            <span>{item.title}</span>
                            <span style={{ marginLeft: 'auto', opacity: 0.8 }}>{item.time}</span>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main className="ce-main">
                <Navbar />

                <div className="ce-content-wrap">
                    <div className="ce-hero">
                        <h1 className="ce-hero-title">Learn about Adobe XD & Prototyping</h1>
                        <p className="ce-hero-sub">Introduction about XD</p>
                        <div className="ce-hero-timer">🕒 1 hour</div>
                    </div>

                    <div className="ce-form-card">
                        <h2 className="ce-form-title">Create new event</h2>
                        <p className="ce-form-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>

                        <div className="form-group full">
                            <label className="form-label">Event Name</label>
                            <input type="text" className="form-input" defaultValue="Adobe XD Auto - Animate : Your Guide to Creating" />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Start date / Time</label>
                                <input type="text" className="form-input" defaultValue="September 24, 2017 07:59 am" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">End Date / Time</label>
                                <input type="text" className="form-input" defaultValue="September 24, 2017 07:59 am" />
                            </div>
                        </div>

                        <div className="form-group full">
                            <label className="form-label">Location</label>
                            <input type="text" className="form-input" defaultValue="2118 Thornridge Cir, Syracuse, Connecticut 35624" />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Notification</label>
                                <select className="form-select">
                                    <option>30 mins</option>
                                    <option>1 hour</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-input" defaultValue="jessica.hansome@example.com" />
                            </div>
                        </div>

                        <div className="form-group full">
                            <label className="form-label">Event Description</label>
                            <textarea className="form-textarea" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."></textarea>
                        </div>

                        <button className="save-btn" onClick={() => { alert('Event Saved Successfully!'); window.location.href = '/course-calendar'; }}>Save Now</button>
                        <div style={{ clear: 'both' }}></div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default CreateEvent;
