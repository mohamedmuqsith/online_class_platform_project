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

/* Sample schedule data */
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

const scheduleEvents = [
    { day: 0, startSlot: 1, span: 2, title: 'Adobe XD Basics', color: '#c49696' },
    { day: 1, startSlot: 0, span: 1, title: 'UI Design Lab', color: '#7986cb' },
    { day: 1, startSlot: 3, span: 2, title: 'React Workshop', color: '#4db6ac' },
    { day: 2, startSlot: 2, span: 1, title: 'CSS Masterclass', color: '#ffb74d' },
    { day: 2, startSlot: 5, span: 2, title: 'JS Fundamentals', color: '#e57373' },
    { day: 3, startSlot: 0, span: 2, title: 'Figma Prototyping', color: '#81c784' },
    { day: 3, startSlot: 4, span: 1, title: 'UX Research', color: '#ba68c8' },
    { day: 4, startSlot: 1, span: 2, title: 'Web Dev Bootcamp', color: '#4fc3f7' },
    { day: 4, startSlot: 6, span: 2, title: 'Project Review', color: '#f48fb1' },
    { day: 5, startSlot: 0, span: 1, title: 'Design Sprint', color: '#a1887f' },
    { day: 5, startSlot: 3, span: 2, title: 'Code Review', color: '#90a4ae' },
];

const todaySchedule = [
    { time: '9:00 AM', title: 'Adobe XD Basics', instructor: 'Sarah Johnson', room: 'Room 101' },
    { time: '11:00 AM', title: 'React Workshop', instructor: 'Michael Chen', room: 'Lab 3' },
    { time: '2:00 PM', title: 'UI Design Lab', instructor: 'Emily Davis', room: 'Room 205' },
    { time: '4:00 PM', title: 'Project Review', instructor: 'Alex Rivera', room: 'Room 102' },
];

const Schedules = () => {
    const [activeItem, setActiveItem] = useState(4);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5' }}>
            <style>{`
                /* ============= SIDEBAR ============= */
                .sch-sidebar {
                    width: 240px; background: #fff; border-right: 1px solid #eee;
                    display: flex; flex-direction: column; flex-shrink: 0;
                    height: 100vh; position: sticky; top: 0; overflow-y: auto;
                }
                .sch-sidebar-header {
                    padding: 18px 20px; display: flex; align-items: center; gap: 12px;
                    border-bottom: 1px solid #f0f0f0;
                }
                .sch-back-btn {
                    width: 30px; height: 30px; border-radius: 6px;
                    background: #c49696; color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; border: none; font-size: 0.9rem;
                    transition: background 0.3s;
                }
                .sch-back-btn:hover { background: #b08585; }
                .sch-logo { height: 38px; }
                .sch-logo-text { font-weight: 800; font-size: 0.85rem; color: #333; letter-spacing: 1px; }
                .sch-logo-sub { font-size: 0.6rem; color: #999; letter-spacing: 2px; }
                .sch-nav { padding: 25px 20px; flex: 1; display: flex; flex-direction: column; gap: 12px; }
                .sch-nav-item {
                    display: block; padding: 14px 20px; border-radius: 10px;
                    background: #ebdcdc; color: #333; font-weight: 700;
                    text-align: center; text-decoration: none; font-size: 0.95rem;
                    transition: all 0.3s ease; cursor: pointer; border: none; width: 100%;
                }
                .sch-nav-item:hover { background: #c49696; color: #fff; transform: translateX(4px); }
                .sch-nav-item.active { background: #c49696; color: #fff; box-shadow: 0 4px 15px rgba(196,150,150,0.35); }

                /* ============= MAIN ============= */
                .sch-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
                .sch-header {
                    background: linear-gradient(135deg, #c49696 0%, #d4b0b0 100%);
                    padding: 28px 40px; display: flex; justify-content: space-between; align-items: center;
                }
                .sch-header-title { font-size: 2rem; font-weight: 800; color: #fff; font-family: 'Playfair Display', serif; }
                .sch-header-week {
                    padding: 8px 20px; border-radius: 8px; border: 2px solid rgba(255,255,255,0.4);
                    background: transparent; color: #fff; font-weight: 700; font-size: 0.85rem;
                }
                .sch-content { padding: 30px 35px 60px; flex: 1; }

                /* Timetable Grid */
                .sch-timetable {
                    background: #fff; border-radius: 18px; padding: 25px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04); margin-bottom: 30px;
                    overflow-x: auto;
                }
                .sch-grid {
                    display: grid;
                    grid-template-columns: 80px repeat(6, 1fr);
                    gap: 0;
                    min-width: 700px;
                }
                .sch-grid-header {
                    font-weight: 700; font-size: 0.85rem; color: #555;
                    text-align: center; padding: 12px 8px;
                    border-bottom: 2px solid #f0f0f0;
                }
                .sch-grid-time {
                    font-size: 0.75rem; color: #999; font-weight: 600;
                    padding: 10px 8px; text-align: right;
                    border-right: 1px solid #f5f5f5;
                    min-height: 50px; display: flex; align-items: center; justify-content: flex-end;
                }
                .sch-grid-cell {
                    padding: 4px; border-right: 1px solid #f8f8f8;
                    border-bottom: 1px solid #f8f8f8; min-height: 50px;
                    position: relative;
                }
                .sch-event {
                    padding: 6px 10px; border-radius: 8px; font-size: 0.72rem;
                    font-weight: 700; color: #fff; cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    height: 100%;
                    display: flex; align-items: center;
                }
                .sch-event:hover { transform: scale(1.03); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

                /* Today's Schedule */
                .sch-today-card {
                    background: #fff; border-radius: 18px; padding: 25px 30px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                }
                .sch-today-title { font-size: 1.15rem; font-weight: 700; color: #333; margin-bottom: 18px; }
                .sch-today-list { display: flex; flex-direction: column; gap: 12px; }
                .sch-today-item {
                    display: flex; align-items: center; gap: 16px; padding: 14px 18px;
                    background: #fdf6f6; border-radius: 12px; border-left: 4px solid #c49696;
                    transition: transform 0.2s;
                }
                .sch-today-item:hover { transform: translateX(4px); }
                .sch-today-time { font-size: 0.85rem; font-weight: 700; color: #c49696; min-width: 80px; }
                .sch-today-info { flex: 1; }
                .sch-today-name { font-size: 0.95rem; font-weight: 700; color: #333; }
                .sch-today-sub { font-size: 0.78rem; color: #888; margin-top: 2px; }

                @media (max-width: 768px) {
                    .sch-sidebar { display: none; }
                    .sch-content { padding: 20px 15px 40px; }
                    .sch-header { padding: 20px; flex-direction: column; gap: 10px; align-items: flex-start; }
                    .sch-header-title { font-size: 1.4rem; }
                }
            `}</style>

            {/* SIDEBAR */}
            <aside className="sch-sidebar">
                <div className="sch-sidebar-header">
                    <button className="sch-back-btn" onClick={() => window.history.back()}>←</button>
                    <img src={logoImg} alt="EduFlex" className="sch-logo" />
                    <div>
                        <div className="sch-logo-text">EDUFLEX</div>
                        <div className="sch-logo-sub">EDUCATION</div>
                    </div>
                </div>
                <nav className="sch-nav">
                    {sidebarItems.map((item, idx) => (
                        <Link key={idx} to={item.path}
                            className={`sch-nav-item ${activeItem === idx ? 'active' : ''}`}
                            onClick={() => setActiveItem(idx)}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* MAIN */}
            <div className="sch-main">
                <div className="sch-header">
                    <h1 className="sch-header-title">Schedules</h1>
                    <span className="sch-header-week">Week of Feb 17 – Feb 22, 2026</span>
                </div>

                <div className="sch-content">
                    {/* Timetable */}
                    <div className="sch-timetable">
                        <div className="sch-grid">
                            {/* Header row */}
                            <div className="sch-grid-header" />
                            {weekDays.map((d) => (
                                <div key={d} className="sch-grid-header">{d}</div>
                            ))}

                            {/* Time rows */}
                            {timeSlots.map((time, row) => (
                                <React.Fragment key={row}>
                                    <div className="sch-grid-time">{time}</div>
                                    {weekDays.map((_, col) => {
                                        const event = scheduleEvents.find(e => e.day === col && e.startSlot === row);
                                        return (
                                            <div key={col} className="sch-grid-cell">
                                                {event && (
                                                    <div className="sch-event" style={{ background: event.color }}>
                                                        {event.title}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="sch-today-card">
                        <h3 className="sch-today-title">📋 Today&apos;s Schedule</h3>
                        <div className="sch-today-list">
                            {todaySchedule.map((item, idx) => (
                                <div key={idx} className="sch-today-item">
                                    <span className="sch-today-time">{item.time}</span>
                                    <div className="sch-today-info">
                                        <div className="sch-today-name">{item.title}</div>
                                        <div className="sch-today-sub">{item.instructor} • {item.room}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedules;
