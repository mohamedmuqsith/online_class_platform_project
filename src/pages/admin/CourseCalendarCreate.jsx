    import React, { useState } from 'react';
import logoImg from '../../assets/logo.png';

/* Lesson list data */
const changeLessons = [
    { id: 1, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 2, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 3, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 4, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
];

const quizLessons = [
    { id: 1, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 2, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 3, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 4, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 5, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 6, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 7, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 8, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 9, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 10, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 11, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
    { id: 12, title: 'Lesson 01 : Introduction about XD', duration: '30 mins' },
];

const CourseCalendarCreate = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        startDate: '',
        endDate: '',
        location: '',
        notification: '30 mins',
        email: '',
        eventDescription: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Calendar event saved successfully!');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5' }}>
            <style>{`
                /* ============= LEFT PANEL (Lesson List) ============= */
                .ccr-left {
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
                .ccr-left-header {
                    padding: 16px 18px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border-bottom: 1px solid #f0f0f0;
                }
                .ccr-back-btn {
                    width: 30px;
                    height: 30px;
                    border-radius: 6px;
                    background: #c49696;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    font-size: 0.9rem;
                    transition: background 0.3s;
                }
                .ccr-back-btn:hover { background: #b08585; }
                .ccr-logo { height: 34px; }
                .ccr-logo-text {
                    font-weight: 800;
                    font-size: 0.85rem;
                    color: #333;
                    letter-spacing: 1px;
                }
                .ccr-logo-sub {
                    font-size: 0.58rem;
                    color: #999;
                    letter-spacing: 2px;
                }

                /* Section titles */
                .ccr-section-title {
                    font-size: 1rem;
                    font-weight: 800;
                    color: #222;
                    padding: 20px 18px 10px;
                    text-transform: uppercase;
                }

                /* Lesson items */
                .ccr-lesson-list {
                    padding: 0 12px 10px;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .ccr-lesson-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 12px;
                    border-radius: 8px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.25s;
                }
                .ccr-lesson-item.change {
                    background: #f5d6a0;
                }
                .ccr-lesson-item.quiz {
                    background: #dce8f8;
                }
                .ccr-lesson-item:hover {
                    transform: translateX(3px);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                .ccr-lesson-icon {
                    width: 22px;
                    height: 22px;
                    border-radius: 4px;
                    background: rgba(0,0,0,0.12);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    flex-shrink: 0;
                }
                .ccr-lesson-title {
                    flex: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .ccr-lesson-duration {
                    font-size: 0.72rem;
                    color: #555;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                /* ============= MAIN CONTENT ============= */
                .ccr-main {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                }

                /* Header Banner */
                .ccr-header {
                    background: linear-gradient(135deg, #333 0%, #555 100%);
                    padding: 28px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                .ccr-header-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #fff;
                    font-family: 'Playfair Display', serif;
                }
                .ccr-header-meta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #fff;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                /* Content */
                .ccr-content {
                    padding: 35px 40px 60px;
                    flex: 1;
                }
                .ccr-content-title {
                    font-size: 1.45rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 30px;
                    font-family: 'Playfair Display', serif;
                }

                /* Form Card */
                .ccr-form-card {
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 4px 25px rgba(0,0,0,0.04);
                    padding: 35px 40px 45px;
                    max-width: 780px;
                }
                .ccr-form-group {
                    margin-bottom: 22px;
                }
                .ccr-form-row {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 22px;
                }
                .ccr-form-row .ccr-form-group {
                    flex: 1;
                    margin-bottom: 0;
                }
                .ccr-form-label {
                    display: block;
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 8px;
                }
                .ccr-form-input {
                    width: 100%;
                    padding: 14px 18px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #555;
                    background: #fff;
                    outline: none;
                    transition: border-color 0.3s, box-shadow 0.3s;
                    font-family: inherit;
                    box-sizing: border-box;
                }
                .ccr-form-input:focus {
                    border-color: #c49696;
                    box-shadow: 0 0 0 3px rgba(196,150,150,0.12);
                }
                .ccr-form-input::placeholder { color: #bbb; }
                .ccr-form-select {
                    width: 100%;
                    padding: 14px 38px 14px 18px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #555;
                    background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%23999' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E") no-repeat right 14px center;
                    background-size: 14px;
                    appearance: none;
                    -webkit-appearance: none;
                    outline: none;
                    cursor: pointer;
                    transition: border-color 0.3s;
                    font-family: inherit;
                    box-sizing: border-box;
                }
                .ccr-form-select:focus { border-color: #c49696; }
                .ccr-form-textarea {
                    width: 100%;
                    padding: 14px 18px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #555;
                    background: #fff;
                    outline: none;
                    resize: vertical;
                    min-height: 130px;
                    font-family: inherit;
                    transition: border-color 0.3s, box-shadow 0.3s;
                    box-sizing: border-box;
                }
                .ccr-form-textarea:focus {
                    border-color: #c49696;
                    box-shadow: 0 0 0 3px rgba(196,150,150,0.12);
                }
                .ccr-form-textarea::placeholder { color: #bbb; }

                /* Save Button */
                .ccr-save-btn {
                    display: block;
                    margin-left: auto;
                    margin-top: 30px;
                    padding: 14px 50px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .ccr-save-btn:hover {
                    background: #b08585;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(196,150,150,0.35);
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .ccr-left { display: none; }
                    .ccr-content { padding: 20px 15px 40px; }
                    .ccr-header { padding: 20px; }
                    .ccr-header-title { font-size: 1.4rem; }
                    .ccr-form-card { padding: 25px 20px 35px; }
                    .ccr-form-row { flex-direction: column; gap: 0; }
                    .ccr-form-row .ccr-form-group { margin-bottom: 22px; }
                }
            `}</style>

            {/* ============= LEFT PANEL ============= */}
            <aside className="ccr-left">
                <div className="ccr-left-header">
                    <button className="ccr-back-btn" onClick={() => window.history.back()}>←</button>
                    <img src={logoImg} alt="EduFlex" className="ccr-logo" />
                    <div>
                        <div className="ccr-logo-text">EDUFLEX</div>
                        <div className="ccr-logo-sub">EDUCATION</div>
                    </div>
                </div>

                {/* Change Simplification */}
                <div className="ccr-section-title">Change Simplification</div>
                <div className="ccr-lesson-list">
                    {changeLessons.map((lesson) => (
                        <div key={`change-${lesson.id}`} className="ccr-lesson-item change">
                            <span className="ccr-lesson-icon">📘</span>
                            <span className="ccr-lesson-title">{lesson.title}</span>
                            <span className="ccr-lesson-duration">{lesson.duration}</span>
                        </div>
                    ))}
                </div>

                {/* Practice Quiz */}
                <div className="ccr-section-title">PRACTICE QUIZ</div>
                <div className="ccr-lesson-list">
                    {quizLessons.map((lesson) => (
                        <div key={`quiz-${lesson.id}`} className="ccr-lesson-item quiz">
                            <span className="ccr-lesson-icon">📘</span>
                            <span className="ccr-lesson-title">{lesson.title}</span>
                            <span className="ccr-lesson-duration">{lesson.duration}</span>
                        </div>
                    ))}
                </div>
            </aside>

            {/* ============= MAIN ============= */}
            <div className="ccr-main">
                {/* Header Banner */}
                <div className="ccr-header">
                    <h1 className="ccr-header-title">Add Data For Calendar</h1>
                    <div className="ccr-header-meta">
                        <span>⏱</span>
                        <span>1 hour</span>
                    </div>
                </div>

                {/* Content */}
                <div className="ccr-content">
                    <h2 className="ccr-content-title">Create new Data</h2>

                    <div className="ccr-form-card">
                        <form onSubmit={handleSubmit}>
                            {/* Event Name */}
                            <div className="ccr-form-group">
                                <label className="ccr-form-label">Event Name</label>
                                <input
                                    type="text"
                                    name="eventName"
                                    className="ccr-form-input"
                                    placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
                                    value={formData.eventName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Start / End Date row */}
                            <div className="ccr-form-row">
                                <div className="ccr-form-group">
                                    <label className="ccr-form-label">Start date / Time</label>
                                    <input
                                        type="text"
                                        name="startDate"
                                        className="ccr-form-input"
                                        placeholder="September 24, 2017 07:59 am"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="ccr-form-group">
                                    <label className="ccr-form-label">End Date / Time</label>
                                    <input
                                        type="text"
                                        name="endDate"
                                        className="ccr-form-input"
                                        placeholder="September 24, 2017 07:59 am"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div className="ccr-form-group">
                                <label className="ccr-form-label">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    className="ccr-form-input"
                                    placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Notification / Email row */}
                            <div className="ccr-form-row">
                                <div className="ccr-form-group">
                                    <label className="ccr-form-label">Notification</label>
                                    <select
                                        name="notification"
                                        className="ccr-form-select"
                                        value={formData.notification}
                                        onChange={handleChange}
                                    >
                                        <option value="15 mins">15 mins</option>
                                        <option value="30 mins">30 mins</option>
                                        <option value="1 hour">1 hour</option>
                                        <option value="2 hours">2 hours</option>
                                    </select>
                                </div>
                                <div className="ccr-form-group">
                                    <label className="ccr-form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="ccr-form-input"
                                        placeholder="jessica.hansome@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Event Description */}
                            <div className="ccr-form-group">
                                <label className="ccr-form-label">Event Description</label>
                                <textarea
                                    name="eventDescription"
                                    className="ccr-form-textarea"
                                    placeholder="Event Description"
                                    value={formData.eventDescription}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="ccr-save-btn">Save Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCalendarCreate;
