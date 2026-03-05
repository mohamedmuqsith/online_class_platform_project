import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { eventsAPI } from '../api';

const lessons = [
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: true },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: false },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: false },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins', active: false },
];

const quizzes = [
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins' },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins' },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins' },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins' },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins' },
    { title: 'Lesson 01 : Introduction about XD', time: '30 mins' },
];

const CourseCalendar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: 'User' });
    const [events, setEvents] = useState([]);
    const [_loading, _setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    // Padding for first week
    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }
    for (let i = 1; i <= totalDays; i++) {
        days.push(i);
    }

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const hasEvent = (day) => {
        if (!day) return false;
        return events.some(ev => {
            const evDate = new Date(ev.startDate);
            return evDate.getDate() === day && evDate.getMonth() === month && evDate.getFullYear() === year;
        });
    };

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const saved = localStorage.getItem('eduflex_user');
                if (saved) setUser(JSON.parse(saved));

                const data = await eventsAPI.getAll();
                setEvents(data);
            } catch (err) {
                console.error('Failed to fetch calendar events:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
            <style>{`
                /* Sidebar */
                .cal-sidebar {
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
                .cal-sidebar-header {
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
                .cal-logo {
                    height: 40px;
                }
                .cal-sidebar-content {
                    padding: 20px;
                }
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
                .lesson-item.active {
                    background: #666;
                    color: #fff;
                }
                .lesson-item.orange { background: #fff3e0; border: 1px solid #ffe0b2; color: #333; }
                .lesson-item.blue { background: #e3f2fd; border: 1px solid #bbdefb; color: #333; }
                .lesson-item.red { background: #ffebee; border: 1px solid #ffcdd2; color: #333; }
                
                .lesson-item:hover:not(.active) {
                    transform: translateX(4px);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }
                .lesson-icon { font-size: 1rem; }
                .lesson-time { margin-left: auto; opacity: 0.8; }

                /* Main Content */
                .cal-main {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                }
                
                .cal-content-wrap {
                    padding: 0 40px 60px;
                }

                .cal-hero {
                    background: #c49696;
                    border-radius: 12px;
                    padding: 30px 40px;
                    color: #fff;
                    margin: 30px 0;
                    position: relative;
                }
                .cal-hero-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.2rem;
                    margin-bottom: 8px;
                }
                .cal-hero-sub {
                    font-size: 1rem;
                    opacity: 0.9;
                }
                .cal-hero-timer {
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

                /* Share Section */
                .share-section {
                    margin-bottom: 40px;
                }
                .share-title {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 12px;
                }
                .share-text {
                    font-size: 0.88rem;
                    color: #777;
                    line-height: 1.6;
                    max-width: 900px;
                }

                /* Calendar Component */
                .cal-card {
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 5px 25px rgba(0,0,0,0.04);
                    display: flex;
                    overflow: hidden;
                }
                .cal-month-view {
                    flex: 1;
                    padding: 40px;
                    border-right: 1px solid #f0f0f0;
                }
                .cal-month-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }
                .cal-month-title {
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: #333;
                }
                .cal-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 5px;
                    text-align: center;
                }
                .cal-day {
                    padding: 12px;
                    font-size: 0.9rem;
                    color: #333;
                    font-weight: 600;
                    cursor: pointer;
                    border-radius: 8px;
                    transition: all 0.2s;
                }
                .cal-day:hover { background: #f5f5f5; }
                .cal-day.today { background: #f0f0f0; border: 1px solid #c49696; }
                .cal-day.selected { border: 2px solid #333; }
                .cal-day.has-event { background: #ffebee; color: #e53935; }
                .cal-day.empty { cursor: default; }

                /* Schedule View */
                .cal-schedule-view {
                    width: 400px;
                    padding: 40px;
                }
                .schedule-header {
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 30px;
                    text-align: center;
                    font-size: 1rem;
                }
                .timeline {
                    position: relative;
                }
                .time-slot {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 25px;
                    font-size: 0.8rem;
                    color: #999;
                }
                .time-label { min-width: 40px; }
                .time-line {
                    flex: 1;
                    height: 1px;
                    background: #eee;
                }
                .event-box {
                    background: #ffebee;
                    border-radius: 10px;
                    padding: 12px 20px;
                    position: absolute;
                    left: 60px;
                    right: 0;
                    top: 15px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    color: #e53935;
                    font-weight: 700;
                    font-size: 0.8rem;
                    border-left: 4px solid #e53935;
                }

                @media (max-width: 1100px) {
                    .cal-card { flex-direction: column; }
                    .cal-month-view { border-right: none; border-bottom: 1px solid #f0f0f0; }
                    .cal-schedule-view { width: 100%; }
                }
                @media (max-width: 768px) {
                    .cal-sidebar { display: none; }
                    .cal-content-wrap { padding: 0 20px 40px; }
                    .cal-hero-timer { position: static; margin-top: 15px; background: rgba(0,0,0,0.1); width: fit-content; }
                }
                .cal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }
                .create-btn {
                    padding: 10px 20px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .create-btn:hover { background: #b08585; transform: translateY(-2px); }
            `}</style>

            {/* Sidebar */}
            <aside className="cal-sidebar">
                <div className="cal-sidebar-header">
                    <button className="back-btn" onClick={() => navigate('/profile')}>←</button>
                    <img src="/logo-black.png" alt="Eduflex" className="cal-logo"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/120x40?text=EDUFLEX"; }} />
                </div>

                <div className="cal-sidebar-content">
                    <h3 className="section-title">Change Simplification</h3>
                    {lessons.map((item, i) => (
                        <div key={i} className={`lesson-item ${item.active ? 'active' : i % 3 === 1 ? 'orange' : i % 3 === 2 ? 'blue' : 'red'}`}>
                            <span className="lesson-icon">📖</span>
                            <span>{item.title}</span>
                            <span className="lesson-time">{item.time}</span>
                        </div>
                    ))}

                    <h3 className="section-title" style={{ marginTop: '30px' }}>PRACTICE QUIZ</h3>
                    {quizzes.map((item, i) => (
                        <div key={i} className={`lesson-item ${i % 4 === 0 ? 'blue' : i % 4 === 1 ? 'orange' : i % 4 === 2 ? 'blue' : 'red'}`}>
                            <span className="lesson-icon">📖</span>
                            <span>{item.title}</span>
                            <span className="lesson-time">{item.time}</span>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main className="cal-main">
                <Navbar />

                <div className="cal-content-wrap">
                    <div className="cal-header">
                        <h2 className="cal-card-title">Calendar</h2>
                        <button className="create-btn" onClick={() => window.location.href = '/create-event'}>+ Create Event</button>
                    </div>
                    <div className="cal-hero">
                        <h1 className="cal-hero-title">Learn about Adobe XD & Prototyping</h1>
                        <p className="cal-hero-sub">Introduction about XD</p>
                        <div className="cal-hero-timer">🕒 1 hour</div>
                    </div>

                    <div className="share-section">
                        <h2 className="share-title">Share and refer</h2>
                        <p className="share-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </div>

                    <div className="cal-card">
                        <div className="cal-month-view">
                            <div className="cal-month-header">
                                <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>◀</button>
                                <div className="cal-month-title">{monthNames[month]} {year}</div>
                                <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>▶</button>
                            </div>
                            <div className="cal-grid">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                    <div key={d} style={{ fontWeight: 800, fontSize: '0.75rem', color: '#999', marginBottom: '10px' }}>{d}</div>
                                ))}
                                {days.map((d, i) => {
                                    const isToday = d === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
                                    const isSelected = selectedDay === d;
                                    const eventExists = hasEvent(d);
                                    return (
                                        <div
                                            key={i}
                                            className={`cal-day ${!d ? 'empty' : ''} ${isToday ? 'today' : ''} ${eventExists ? 'has-event' : ''} ${isSelected ? 'selected' : ''}`}
                                            onClick={() => d && setSelectedDay(d === selectedDay ? null : d)}
                                        >
                                            {d}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="cal-schedule-view">
                            <div className="schedule-header">{selectedDay ? `Events for ${monthNames[month]} ${selectedDay}` : 'Monthly Events'}</div>
                            <div className="timeline">
                                {events.filter(ev => {
                                    const evDate = new Date(ev.startDate);
                                    if (selectedDay) {
                                        return evDate.getDate() === selectedDay && evDate.getMonth() === month && evDate.getFullYear() === year;
                                    }
                                    return evDate.getMonth() === month && evDate.getFullYear() === year;
                                }).length > 0 ? events.filter(ev => {
                                    const evDate = new Date(ev.startDate);
                                    if (selectedDay) {
                                        return evDate.getDate() === selectedDay && evDate.getMonth() === month && evDate.getFullYear() === year;
                                    }
                                    return evDate.getMonth() === month && evDate.getFullYear() === year;
                                }).map((ev, i) => (
                                    <div key={i} className="time-slot" style={{ marginBottom: '40px', position: 'relative' }}>
                                        <span className="time-label">{new Date(ev.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        <div className="event-box" style={{ top: '0', position: 'relative', left: '0' }}>{ev.eventName}</div>
                                    </div>
                                )) : (
                                    <p style={{ fontSize: '0.8rem', color: '#999' }}>{selectedDay ? 'No events for this day.' : 'No events for this month.'}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default CourseCalendar;
