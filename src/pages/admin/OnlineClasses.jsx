import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

const sidebarItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Courses', path: '/admin/add-courses' },
    { label: 'Schedule', path: '/admin/calendar-create' },
    { label: 'Online Classes', path: '/admin/online-classes' },
    { label: 'Schedules', path: '/admin/schedules' },
];

/* Sample class data */
const upcomingClasses = [
    { id: 1, title: 'Adobe XD Auto-Animate', instructor: 'Sarah Johnson', date: 'Feb 20, 2026', time: '10:00 AM', duration: '1.5 hrs', students: 24, status: 'Live' },
    { id: 2, title: 'Figma Advanced Prototyping', instructor: 'Michael Chen', date: 'Feb 20, 2026', time: '2:00 PM', duration: '2 hrs', students: 18, status: 'Scheduled' },
    { id: 3, title: 'React Fundamentals', instructor: 'Emily Davis', date: 'Feb 21, 2026', time: '9:00 AM', duration: '1 hr', students: 35, status: 'Scheduled' },
    { id: 4, title: 'UI/UX Design Principles', instructor: 'Alex Rivera', date: 'Feb 21, 2026', time: '11:30 AM', duration: '1.5 hrs', students: 20, status: 'Scheduled' },
    { id: 5, title: 'JavaScript ES6+', instructor: 'David Park', date: 'Feb 22, 2026', time: '3:00 PM', duration: '2 hrs', students: 30, status: 'Scheduled' },
    { id: 6, title: 'CSS Grid & Flexbox', instructor: 'Lisa Wang', date: 'Feb 23, 2026', time: '10:00 AM', duration: '1 hr', students: 22, status: 'Scheduled' },
];

const OnlineClasses = () => {
    const [activeItem, setActiveItem] = useState(3);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5' }}>
            <style>{`
                /* ============= SIDEBAR ============= */
                .oc-sidebar {
                    width: 240px;
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
                .oc-sidebar-header {
                    padding: 18px 20px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border-bottom: 1px solid #f0f0f0;
                }
                .oc-back-btn {
                    width: 30px; height: 30px; border-radius: 6px;
                    background: #c49696; color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; border: none; font-size: 0.9rem;
                    transition: background 0.3s;
                }
                .oc-back-btn:hover { background: #b08585; }
                .oc-logo { height: 38px; }
                .oc-logo-text { font-weight: 800; font-size: 0.85rem; color: #333; letter-spacing: 1px; }
                .oc-logo-sub { font-size: 0.6rem; color: #999; letter-spacing: 2px; }
                .oc-nav { padding: 25px 20px; flex: 1; display: flex; flex-direction: column; gap: 12px; }
                .oc-nav-item {
                    display: block; padding: 14px 20px; border-radius: 10px;
                    background: #ebdcdc; color: #333; font-weight: 700;
                    text-align: center; text-decoration: none; font-size: 0.95rem;
                    transition: all 0.3s ease; cursor: pointer; border: none; width: 100%;
                }
                .oc-nav-item:hover { background: #c49696; color: #fff; transform: translateX(4px); }
                .oc-nav-item.active { background: #c49696; color: #fff; box-shadow: 0 4px 15px rgba(196,150,150,0.35); }

                /* ============= MAIN ============= */
                .oc-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
                .oc-header {
                    background: linear-gradient(135deg, #c49696 0%, #d4b0b0 100%);
                    padding: 28px 40px;
                    display: flex; justify-content: space-between; align-items: center;
                }
                .oc-header-title {
                    font-size: 2rem; font-weight: 800; color: #fff;
                    font-family: 'Playfair Display', serif;
                }
                .oc-header-actions { display: flex; gap: 12px; }
                .oc-header-btn {
                    padding: 10px 24px; border-radius: 8px; border: 2px solid rgba(255,255,255,0.4);
                    background: transparent; color: #fff; font-weight: 700; font-size: 0.85rem;
                    cursor: pointer; transition: all 0.3s;
                }
                .oc-header-btn:hover { background: rgba(255,255,255,0.15); border-color: #fff; }
                .oc-header-btn.primary { background: #fff; color: #c49696; border-color: #fff; }
                .oc-header-btn.primary:hover { background: #f5e8e8; }

                /* Content */
                .oc-content { padding: 30px 40px 60px; flex: 1; }

                /* Stats Row */
                .oc-stats-row { display: flex; gap: 20px; margin-bottom: 30px; flex-wrap: wrap; }
                .oc-stat-box {
                    flex: 1; min-width: 160px; background: #fff; border-radius: 14px;
                    padding: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.04);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .oc-stat-box:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(196,150,150,0.15); }
                .oc-stat-icon { font-size: 1.4rem; margin-bottom: 8px; }
                .oc-stat-val { font-size: 1.6rem; font-weight: 800; color: #333; }
                .oc-stat-label { font-size: 0.8rem; color: #888; margin-top: 2px; }

                /* Class Cards */
                .oc-section-title { font-size: 1.2rem; font-weight: 700; color: #333; margin-bottom: 18px; }
                .oc-class-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
                .oc-class-card {
                    background: #fff; border-radius: 16px; padding: 22px 25px;
                    box-shadow: 0 3px 15px rgba(0,0,0,0.04);
                    transition: transform 0.3s, box-shadow 0.3s;
                    border-left: 4px solid #c49696;
                }
                .oc-class-card:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(196,150,150,0.15); }
                .oc-class-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
                .oc-class-title { font-size: 1.05rem; font-weight: 700; color: #333; }
                .oc-class-badge {
                    padding: 4px 12px; border-radius: 20px; font-size: 0.72rem; font-weight: 700;
                }
                .oc-badge-live { background: #e8f5e9; color: #2e7d32; }
                .oc-badge-scheduled { background: #e3f2fd; color: #1565c0; }
                .oc-class-instructor { font-size: 0.85rem; color: #666; margin-bottom: 14px; }
                .oc-class-meta { display: flex; gap: 18px; flex-wrap: wrap; }
                .oc-class-meta-item { font-size: 0.8rem; color: #777; display: flex; align-items: center; gap: 5px; }
                .oc-class-actions { display: flex; gap: 10px; margin-top: 16px; }
                .oc-class-btn {
                    padding: 8px 18px; border-radius: 8px; font-size: 0.8rem; font-weight: 700;
                    cursor: pointer; transition: all 0.3s; border: none;
                }
                .oc-class-btn.join { background: #c49696; color: #fff; }
                .oc-class-btn.join:hover { background: #b08585; transform: translateY(-1px); }
                .oc-class-btn.details { background: #f5f5f5; color: #555; }
                .oc-class-btn.details:hover { background: #eee; }

                /* Responsive */
                @media (max-width: 768px) {
                    .oc-sidebar { display: none; }
                    .oc-content { padding: 20px 15px 40px; }
                    .oc-header { padding: 20px; flex-direction: column; gap: 12px; align-items: flex-start; }
                    .oc-header-title { font-size: 1.4rem; }
                    .oc-class-grid { grid-template-columns: 1fr; }
                    .oc-stats-row { flex-direction: column; }
                }
            `}</style>

            {/* SIDEBAR */}
            <aside className="oc-sidebar">
                <div className="oc-sidebar-header">
                    <button className="oc-back-btn" onClick={() => window.history.back()}>←</button>
                    <img src={logoImg} alt="EduFlex" className="oc-logo" />
                    <div>
                        <div className="oc-logo-text">EDUFLEX</div>
                        <div className="oc-logo-sub">EDUCATION</div>
                    </div>
                </div>
                <nav className="oc-nav">
                    {sidebarItems.map((item, idx) => (
                        <Link key={idx} to={item.path}
                            className={`oc-nav-item ${activeItem === idx ? 'active' : ''}`}
                            onClick={() => setActiveItem(idx)}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* MAIN */}
            <div className="oc-main">
                <div className="oc-header">
                    <h1 className="oc-header-title">Online Classes</h1>
                    <div className="oc-header-actions">
                        <button className="oc-header-btn">View Calendar</button>
                        <button className="oc-header-btn primary">+ New Class</button>
                    </div>
                </div>

                <div className="oc-content">
                    {/* Stats */}
                    <div className="oc-stats-row">
                        <div className="oc-stat-box">
                            <div className="oc-stat-icon">🟢</div>
                            <div className="oc-stat-val">1</div>
                            <div className="oc-stat-label">Live Now</div>
                        </div>
                        <div className="oc-stat-box">
                            <div className="oc-stat-icon">📅</div>
                            <div className="oc-stat-val">5</div>
                            <div className="oc-stat-label">Upcoming</div>
                        </div>
                        <div className="oc-stat-box">
                            <div className="oc-stat-icon">👥</div>
                            <div className="oc-stat-val">149</div>
                            <div className="oc-stat-label">Total Students</div>
                        </div>
                        <div className="oc-stat-box">
                            <div className="oc-stat-icon">⏱</div>
                            <div className="oc-stat-val">9 hrs</div>
                            <div className="oc-stat-label">Total Duration</div>
                        </div>
                    </div>

                    {/* Class List */}
                    <h2 className="oc-section-title">Upcoming & Live Classes</h2>
                    <div className="oc-class-grid">
                        {upcomingClasses.map((cls) => (
                            <div key={cls.id} className="oc-class-card">
                                <div className="oc-class-top">
                                    <h3 className="oc-class-title">{cls.title}</h3>
                                    <span className={`oc-class-badge ${cls.status === 'Live' ? 'oc-badge-live' : 'oc-badge-scheduled'}`}>
                                        {cls.status === 'Live' ? '● Live' : cls.status}
                                    </span>
                                </div>
                                <p className="oc-class-instructor">👤 {cls.instructor}</p>
                                <div className="oc-class-meta">
                                    <span className="oc-class-meta-item">📅 {cls.date}</span>
                                    <span className="oc-class-meta-item">🕐 {cls.time}</span>
                                    <span className="oc-class-meta-item">⏱ {cls.duration}</span>
                                    <span className="oc-class-meta-item">👥 {cls.students} students</span>
                                </div>
                                <div className="oc-class-actions">
                                    <button className="oc-class-btn join">{cls.status === 'Live' ? 'Join Now' : 'Start Class'}</button>
                                    <button className="oc-class-btn details">Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineClasses;
