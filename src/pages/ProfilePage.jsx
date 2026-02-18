import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

/* Sample data */
const userCourses = [
    { title: 'Mobile App Development', status: 'continue' },
    { title: 'Java Programming', status: 'continue' },
    { title: 'Project Management', status: 'complete' },
    { title: 'React', status: 'complete' },
    { title: 'UI/UX Design Fundamentals', status: 'continue' },
];

const upcomingSchedule = [
    { color: '#c49696', title: 'UI/UI Design Presentation', desc: 'Make and do wireframe file with your design process front-end Find notes.' },
    { color: '#e53935', title: 'Weekend Prototype Submit', desc: 'Make and do wireframe file with your design process front-end Find notes.' },
    { color: '#e53935', title: 'Beetcoral Hackathon', desc: 'Make and do wireframe file with your design process front-end Find notes.' },
];

const ProfilePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: 'User', email: 'user@email.com', address: 'N/A', contact: 'N/A' });

    useEffect(() => {
        const saved = localStorage.getItem('eduflex_user');
        if (saved) {
            const parsed = JSON.parse(saved);
            setUser({
                username: parsed.username || parsed.email?.split('@')[0] || 'User',
                email: parsed.email || 'user@email.com',
                address: parsed.address || 'N/A',
                contact: parsed.contact || 'N/A',
            });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('eduflex_logged_in');
        localStorage.removeItem('eduflex_user');
        navigate('/login');
    };

    return (
        <div className="pp-wrapper">
            <style>{`
                .pp-wrapper {
                    min-height: 100vh;
                    background: #f8f5f5;
                    font-family: 'Segoe UI', 'Inter', sans-serif;
                }

                /* ============= SIDEBAR BUTTONS ============= */
                .pp-sidebar-btns {
                    position: fixed;
                    left: 20px;
                    top: 140px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    z-index: 50;
                }
                .pp-sidebar-btn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 10px 18px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.82rem;
                    cursor: pointer;
                    min-width: 130px;
                    transition: all 0.3s;
                    text-decoration: none;
                }
                .pp-sidebar-btn:hover {
                    background: #b08585;
                    transform: translateX(4px);
                    box-shadow: 0 4px 15px rgba(196,150,150,0.3);
                }
                .pp-sidebar-btn span.arrow { font-size: 0.9rem; }

                /* ============= MAIN CONTENT ============= */
                .pp-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 30px 30px 40px 180px;
                }

                /* Greeting */
                .pp-greeting-card {
                    background: #f0dada;
                    border-radius: 20px;
                    padding: 18px 30px;
                    margin-bottom: 30px;
                    display: inline-block;
                }
                .pp-greeting {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #333;
                    font-family: 'Playfair Display', serif;
                }

                /* Top Section: Progress + User Card */
                .pp-top-row {
                    display: flex;
                    gap: 25px;
                    margin-bottom: 35px;
                    flex-wrap: wrap;
                }

                /* Progress Card */
                .pp-progress-card {
                    flex: 1;
                    min-width: 300px;
                    background: #fff;
                    border-radius: 18px;
                    padding: 25px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                }
                .pp-progress-title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 20px;
                }
                .pp-progress-circle-container {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                }
                .pp-circle-svg { width: 120px; height: 120px; }
                .pp-progress-stats { display: flex; flex-direction: column; gap: 8px; }
                .pp-stat-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    font-size: 0.78rem;
                    color: #555;
                }
                .pp-stat-row strong { color: #333; }

                /* User Info Card */
                .pp-user-card {
                    min-width: 280px;
                    background: #fdf0f0;
                    border-radius: 18px;
                    padding: 25px 30px;
                    text-align: center;
                    box-shadow: 0 4px 20px rgba(196,150,150,0.1);
                }
                .pp-user-avatar {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: #e8d4d4;
                    margin: 0 auto 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    overflow: hidden;
                }
                .pp-user-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .pp-user-name {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 18px;
                    font-family: 'Playfair Display', serif;
                }
                .pp-user-info {
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .pp-info-row {
                    display: flex;
                    gap: 12px;
                    font-size: 0.85rem;
                }
                .pp-info-label { color: #888; font-weight: 600; min-width: 70px; }
                .pp-info-value { color: #333; font-weight: 600; }
                .pp-edit-btn {
                    margin-top: 16px;
                    padding: 10px 28px;
                    border: 2px solid #333;
                    background: transparent;
                    color: #333;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    text-decoration: none;
                    display: inline-block;
                }
                .pp-edit-btn:hover {
                    background: #333;
                    color: #fff;
                }

                /* Bottom Row: Courses + Schedule */
                .pp-bottom-row {
                    display: flex;
                    gap: 25px;
                    flex-wrap: wrap;
                }

                /* Courses Card */
                .pp-courses-card {
                    flex: 1;
                    min-width: 320px;
                    background: #fdf0f0;
                    border-radius: 18px;
                    padding: 25px;
                    box-shadow: 0 4px 20px rgba(196,150,150,0.1);
                }
                .pp-section-badge {
                    display: inline-block;
                    padding: 8px 22px;
                    background: #c49696;
                    color: #fff;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.85rem;
                    margin-bottom: 20px;
                }
                .pp-course-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .pp-course-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px;
                    background: #fff;
                    border-radius: 10px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: #333;
                    transition: transform 0.2s;
                }
                .pp-course-item:hover { transform: translateX(3px); }
                .pp-course-btn {
                    padding: 7px 18px;
                    border-radius: 8px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    cursor: pointer;
                    border: none;
                    transition: all 0.3s;
                }
                .pp-course-btn.continue {
                    background: #c49696;
                    color: #fff;
                }
                .pp-course-btn.continue:hover { background: #b08585; }
                .pp-course-btn.complete {
                    background: #e8d4d4;
                    color: #666;
                }

                /* Schedule Card */
                .pp-schedule-card {
                    min-width: 280px;
                    max-width: 320px;
                    background: #fff;
                    border-radius: 18px;
                    padding: 22px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                }
                .pp-schedule-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 18px;
                }
                .pp-schedule-title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #333;
                }
                .pp-schedule-add {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .pp-schedule-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .pp-schedule-item {
                    display: flex;
                    gap: 12px;
                    align-items: flex-start;
                }
                .pp-schedule-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-top: 5px;
                    flex-shrink: 0;
                }
                .pp-schedule-info { flex: 1; }
                .pp-schedule-name {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 3px;
                }
                .pp-schedule-desc {
                    font-size: 0.72rem;
                    color: #888;
                    line-height: 1.4;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .pp-sidebar-btns { display: none; }
                    .pp-content { padding: 25px 15px 40px; }
                }
                @media (max-width: 640px) {
                    .pp-top-row, .pp-bottom-row { flex-direction: column; }
                    .pp-schedule-card { max-width: 100%; }
                }
            `}</style>

            <Navbar />

            {/* Sidebar Buttons */}
            <div className="pp-sidebar-btns">
                <Link to="/profile" className="pp-sidebar-btn">Profile <span className="arrow">→</span></Link>
                <Link to="/course-calendar" className="pp-sidebar-btn">Calendar <span className="arrow">→</span></Link>
                <Link to="/courses" className="pp-sidebar-btn">Courses <span className="arrow">→</span></Link>
                <Link to="/certificate" className="pp-sidebar-btn">Certificates <span className="arrow">→</span></Link>
                <button onClick={handleLogout} className="pp-sidebar-btn" style={{ background: '#333', marginTop: '20px' }}>
                    Logout <span className="arrow">→</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="pp-content">
                {/* Greeting */}
                <div className="pp-greeting-card">
                    <span className="pp-greeting">Hello!, {user.username}</span>
                </div>

                {/* Top Row */}
                <div className="pp-top-row">
                    {/* Progress Card */}
                    <div className="pp-progress-card">
                        <h3 className="pp-progress-title">Your Learning Progress</h3>
                        <div className="pp-progress-circle-container">
                            <svg className="pp-circle-svg" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#f0e0e0" strokeWidth="10" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#c49696" strokeWidth="10"
                                    strokeDasharray={`${0.63 * 314} ${314}`}
                                    strokeDashoffset="0"
                                    strokeLinecap="round"
                                    transform="rotate(-90 60 60)"
                                />
                                <text x="60" y="58" textAnchor="middle" fontSize="22" fontWeight="800" fill="#333">63%</text>
                                <text x="60" y="75" textAnchor="middle" fontSize="8" fill="#999">Course Done</text>
                            </svg>
                            <div className="pp-progress-stats">
                                <div className="pp-stat-row"><span>courses</span> <strong>14</strong></div>
                                <div className="pp-stat-row"><span>Ongoing Courses</span> <strong>64</strong></div>
                                <div className="pp-stat-row"><span>Certificates</span> <strong>4</strong></div>
                                <div className="pp-stat-row"><span>Discussion</span> <strong>12</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* User Card */}
                    <div className="pp-user-card">
                        <div className="pp-user-avatar">👩‍🎓</div>
                        <h2 className="pp-user-name">{user.username}</h2>
                        <div className="pp-user-info">
                            <div className="pp-info-row">
                                <span className="pp-info-label">Member</span>
                                <span className="pp-info-value">Gold</span>
                            </div>
                            <div className="pp-info-row">
                                <span className="pp-info-label">Address</span>
                                <span className="pp-info-value">{user.address}</span>
                            </div>
                            <div className="pp-info-row">
                                <span className="pp-info-label">E-mail</span>
                                <span className="pp-info-value">{user.email}</span>
                            </div>
                            <div className="pp-info-row">
                                <span className="pp-info-label">Contact</span>
                                <span className="pp-info-value">{user.contact}</span>
                            </div>
                        </div>
                        <Link to="/edit-profile" className="pp-edit-btn">Edit Profile</Link>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pp-bottom-row">
                    {/* Courses */}
                    <div className="pp-courses-card">
                        <span className="pp-section-badge">Your Courses</span>
                        <div className="pp-course-list">
                            {userCourses.map((c, idx) => (
                                <div key={idx} className="pp-course-item">
                                    <span>{c.title}</span>
                                    <button className={`pp-course-btn ${c.status}`}>
                                        {c.status === 'continue' ? 'Continue' : 'Complete'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="pp-schedule-card">
                        <div className="pp-schedule-header">
                            <h3 className="pp-schedule-title">Upcoming Schedule</h3>
                            <button className="pp-schedule-add">+</button>
                        </div>
                        <div className="pp-schedule-list">
                            {upcomingSchedule.map((s, idx) => (
                                <div key={idx} className="pp-schedule-item">
                                    <div className="pp-schedule-dot" style={{ background: s.color }} />
                                    <div className="pp-schedule-info">
                                        <div className="pp-schedule-name">{s.title}</div>
                                        <div className="pp-schedule-desc">{s.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;
