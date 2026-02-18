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

const AddCourses = () => {
    const [activeItem, setActiveItem] = useState(1);
    const [formData, setFormData] = useState({
        eventName: '',
        addLessons: '',
        lessonType: '',
        notification: '30 mins',
        lessonDescription: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Course saved successfully!');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5' }}>
            <style>{`
                /* ============= SIDEBAR ============= */
                .ac-sidebar {
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
                .ac-sidebar-header {
                    padding: 18px 20px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border-bottom: 1px solid #f0f0f0;
                }
                .ac-back-btn {
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
                .ac-back-btn:hover { background: #b08585; }
                .ac-logo { height: 38px; }
                .ac-logo-text {
                    font-weight: 800;
                    font-size: 0.85rem;
                    color: #333;
                    letter-spacing: 1px;
                }
                .ac-logo-sub {
                    font-size: 0.6rem;
                    color: #999;
                    letter-spacing: 2px;
                }

                /* Nav Items */
                .ac-nav {
                    padding: 25px 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .ac-nav-item {
                    display: block;
                    padding: 14px 20px;
                    border-radius: 10px;
                    background: #ebdcdc;
                    color: #333;
                    font-weight: 700;
                    text-align: center;
                    text-decoration: none;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    border: none;
                    width: 100%;
                }
                .ac-nav-item:hover {
                    background: #c49696;
                    color: #fff;
                    transform: translateX(4px);
                }
                .ac-nav-item.active {
                    background: #c49696;
                    color: #fff;
                    box-shadow: 0 4px 15px rgba(196,150,150,0.35);
                }

                /* ============= MAIN ============= */
                .ac-main {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                }

                /* Top Header Banner */
                .ac-header-banner {
                    background: linear-gradient(135deg, #c49696 0%, #d4b0b0 100%);
                    padding: 28px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                .ac-header-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 4px;
                    font-family: 'Playfair Display', serif;
                }
                .ac-header-sub {
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.85);
                }
                .ac-header-meta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #fff;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                /* Content */
                .ac-content {
                    padding: 35px 40px 60px;
                    flex: 1;
                }
                .ac-content-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #c49696;
                    margin-bottom: 30px;
                    font-family: 'Playfair Display', serif;
                }

                /* Form Card */
                .ac-form-card {
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 4px 25px rgba(0,0,0,0.04);
                    padding: 35px 40px 45px;
                    max-width: 780px;
                }
                .ac-form-group {
                    margin-bottom: 22px;
                }
                .ac-form-label {
                    display: block;
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 8px;
                }
                .ac-form-input {
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
                }
                .ac-form-input:focus {
                    border-color: #c49696;
                    box-shadow: 0 0 0 3px rgba(196,150,150,0.12);
                }
                .ac-form-input::placeholder {
                    color: #bbb;
                }
                .ac-form-select {
                    width: auto;
                    min-width: 200px;
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
                }
                .ac-form-select:focus {
                    border-color: #c49696;
                }
                .ac-form-textarea {
                    width: 100%;
                    padding: 14px 18px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #555;
                    background: #fff;
                    outline: none;
                    resize: vertical;
                    min-height: 140px;
                    font-family: inherit;
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                .ac-form-textarea:focus {
                    border-color: #c49696;
                    box-shadow: 0 0 0 3px rgba(196,150,150,0.12);
                }
                .ac-form-textarea::placeholder {
                    color: #bbb;
                }

                /* Save Button */
                .ac-save-btn {
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
                .ac-save-btn:hover {
                    background: #b08585;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(196,150,150,0.35);
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .ac-sidebar { display: none; }
                    .ac-content { padding: 20px 15px 40px; }
                    .ac-header-banner { padding: 20px; }
                    .ac-header-title { font-size: 1.4rem; }
                    .ac-form-card { padding: 25px 20px 35px; }
                }
            `}</style>

            {/* ============= SIDEBAR ============= */}
            <aside className="ac-sidebar">
                <div className="ac-sidebar-header">
                    <button className="ac-back-btn" onClick={() => window.history.back()}>←</button>
                    <img src={logoImg} alt="EduFlex" className="ac-logo" />
                    <div>
                        <div className="ac-logo-text">EDUFLEX</div>
                        <div className="ac-logo-sub">EDUCATION</div>
                    </div>
                </div>

                <nav className="ac-nav">
                    {sidebarItems.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.path}
                            className={`ac-nav-item ${activeItem === idx ? 'active' : ''}`}
                            onClick={() => setActiveItem(idx)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* ============= MAIN ============= */}
            <div className="ac-main">
                {/* Header Banner */}
                <div className="ac-header-banner">
                    <div>
                        <h1 className="ac-header-title">Add Courses</h1>
                        <p className="ac-header-sub">Introduction about XD</p>
                    </div>
                    <div className="ac-header-meta">
                        <span>⏱</span>
                        <span>1 hour</span>
                    </div>
                </div>

                {/* Content */}
                <div className="ac-content">
                    <h2 className="ac-content-title">Create new Courses</h2>

                    <div className="ac-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="ac-form-group">
                                <label className="ac-form-label">Event Name</label>
                                <input
                                    type="text"
                                    name="eventName"
                                    className="ac-form-input"
                                    placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
                                    value={formData.eventName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="ac-form-group">
                                <label className="ac-form-label">Add Lessons</label>
                                <input
                                    type="text"
                                    name="addLessons"
                                    className="ac-form-input"
                                    placeholder="September 24, 2017 07:59 am"
                                    value={formData.addLessons}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="ac-form-group">
                                <label className="ac-form-label">Lesson Type</label>
                                <input
                                    type="text"
                                    name="lessonType"
                                    className="ac-form-input"
                                    placeholder="Lesson Type"
                                    value={formData.lessonType}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="ac-form-group">
                                <label className="ac-form-label">Notification</label>
                                <select
                                    name="notification"
                                    className="ac-form-select"
                                    value={formData.notification}
                                    onChange={handleChange}
                                >
                                    <option value="15 mins">15 mins</option>
                                    <option value="30 mins">30 mins</option>
                                    <option value="1 hour">1 hour</option>
                                    <option value="2 hours">2 hours</option>
                                </select>
                            </div>

                            <div className="ac-form-group">
                                <label className="ac-form-label">Lesson Description</label>
                                <textarea
                                    name="lessonDescription"
                                    className="ac-form-textarea"
                                    placeholder="Lesson Description"
                                    value={formData.lessonDescription}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="ac-save-btn">Save Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourses;
