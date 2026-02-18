import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import Footer from '../../components/Footer';

const statCards = [
    { label: 'Total Students', value: '2285', icon: '👥', color: '#c49696' },
    { label: 'Courses', value: '150', icon: '📅', color: '#c49696' },
    { label: 'Lectures', value: '54', icon: '🎓', color: '#c49696' },
    { label: 'Total Revenue', value: '$ 850', icon: '💰', color: '#c49696' },
];

const sidebarItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Courses', path: '/admin/add-courses' },
    { label: 'Schedule', path: '/admin/calendar-create' },
    { label: 'Online Classes', path: '/admin/online-classes' },
    { label: 'Schedules', path: '/admin/schedules' },
];

/* Static bar chart data — Students Types */
const barData = [
    { day: 'Aug 01', recurring: 180, oneShot: 120 },
    { day: 'Aug 02', recurring: 220, oneShot: 150 },
    { day: 'Aug 03', recurring: 140, oneShot: 100 },
    { day: 'Aug 04', recurring: 200, oneShot: 160 },
    { day: 'Aug 05', recurring: 100, oneShot: 80 },
    { day: 'Aug 06', recurring: 250, oneShot: 180 },
    { day: 'Aug 07', recurring: 130, oneShot: 110 },
    { day: 'Aug 08', recurring: 260, oneShot: 200 },
    { day: 'Aug 09', recurring: 170, oneShot: 120 },
    { day: 'Aug 10', recurring: 300, oneShot: 150 },
    { day: 'Aug 11', recurring: 140, oneShot: 90 },
    { day: 'Aug 12', recurring: 280, oneShot: 190 },
    { day: 'Aug 13', recurring: 160, oneShot: 110 },
    { day: 'Aug 14', recurring: 240, oneShot: 170 },
    { day: 'Aug 15', recurring: 200, oneShot: 130 },
];

/* Performance line chart data */
const perfData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 40 },
    { month: 'Jun', value: 50 },
];

const AdminDashboard = () => {
    const [activeItem, setActiveItem] = useState(0);

    /* Compute SVG line path for performance chart */
    const perfMaxVal = 80;
    const perfW = 360;
    const perfH = 140;
    const perfPoints = perfData.map((d, i) => {
        const x = (i / (perfData.length - 1)) * perfW;
        const y = perfH - (d.value / perfMaxVal) * perfH;
        return `${x},${y}`;
    });
    const perfLine = `M${perfPoints.join(' L')}`;

    /* Bar chart constants */
    const barMax = 500;
    const barChartH = 200;

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
            <style>{`
                /* ============= SIDEBAR ============= */
                .admin-sidebar {
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
                .admin-sidebar-header {
                    padding: 18px 20px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border-bottom: 1px solid #f0f0f0;
                }
                .admin-back-btn {
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
                .admin-back-btn:hover { background: #b08585; }
                .admin-logo { height: 38px; }
                .admin-logo-text {
                    font-weight: 800;
                    font-size: 1rem;
                    color: #333;
                    letter-spacing: 1px;
                }

                /* Nav Items */
                .admin-nav {
                    padding: 25px 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .admin-nav-item {
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
                .admin-nav-item:hover {
                    background: #c49696;
                    color: #fff;
                    transform: translateX(4px);
                }
                .admin-nav-item.active {
                    background: #c49696;
                    color: #fff;
                    box-shadow: 0 4px 15px rgba(196,150,150,0.35);
                }

                .admin-sidebar-footer {
                    padding: 20px;
                    border-top: 1px solid #f0f0f0;
                }
                .admin-footer-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 0;
                    color: #555;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: color 0.3s;
                }
                .admin-footer-item:hover { color: #c49696; }

                /* ============= MAIN CONTENT ============= */
                .admin-main {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                }

                /* Top Bar */
                .admin-topbar {
                    background: linear-gradient(135deg, #c49696 0%, #d4b0b0 100%);
                    padding: 15px 35px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 20px;
                }
                .admin-hello-btn {
                    background: #c49696;
                    color: #fff;
                    border: 2px solid rgba(255,255,255,0.3);
                    padding: 10px 35px;
                    border-radius: 30px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .admin-hello-btn:hover {
                    background: #b08585;
                    border-color: #fff;
                }
                .admin-topbar-icon {
                    position: relative;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    cursor: pointer;
                    color: #333;
                    transition: transform 0.3s;
                }
                .admin-topbar-icon:hover { transform: scale(1.15); }
                .admin-badge {
                    position: absolute;
                    top: -4px;
                    right: -4px;
                    background: #e53935;
                    color: #fff;
                    font-size: 0.6rem;
                    font-weight: 700;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Content Area */
                .admin-content {
                    padding: 30px 35px 60px;
                    flex: 1;
                }

                /* Stat Cards */
                .admin-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    margin-bottom: 35px;
                }
                .admin-stat-card {
                    background: #fdf6f6;
                    border: 1px solid #f0e0e0;
                    border-radius: 16px;
                    padding: 20px 22px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .admin-stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 25px rgba(196,150,150,0.2);
                }
                .admin-stat-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: #c49696;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    color: #fff;
                }
                .admin-stat-label {
                    font-size: 0.82rem;
                    color: #888;
                    margin-bottom: 3px;
                }
                .admin-stat-value {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #333;
                }

                /* Chart Cards */
                .admin-chart-card {
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                    padding: 25px 30px;
                    margin-bottom: 30px;
                }
                .admin-chart-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .admin-chart-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #333;
                }
                .admin-chart-legend {
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    font-size: 0.82rem;
                    color: #666;
                }
                .admin-legend-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 5px;
                }
                .admin-chart-filter {
                    padding: 6px 14px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    color: #555;
                    background: #fff;
                    cursor: pointer;
                }

                /* Performance Row */
                .admin-perf-row {
                    display: flex;
                    gap: 30px;
                    align-items: flex-start;
                    flex-wrap: wrap;
                }
                .admin-perf-left {
                    flex: 1;
                    min-width: 300px;
                }
                .admin-perf-right {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    min-width: 200px;
                }
                .admin-perf-pct {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #333;
                    margin: 10px 0 15px;
                }

                /* Action Buttons */
                .admin-action-btn {
                    padding: 14px 32px;
                    border-radius: 10px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    width: 100%;
                    text-align: center;
                }
                .admin-action-btn:hover {
                    background: #b08585;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 18px rgba(196,150,150,0.35);
                }

                /* Bar chart bars */
                .bar-group {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3px;
                    flex: 1;
                }
                .bar-pair {
                    display: flex;
                    gap: 3px;
                    align-items: flex-end;
                    height: 200px;
                }
                .bar-single {
                    width: 8px;
                    border-radius: 4px 4px 0 0;
                    transition: height 0.6s ease;
                }
                .bar-label {
                    font-size: 0.65rem;
                    color: #999;
                    margin-top: 6px;
                    white-space: nowrap;
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .admin-stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .admin-perf-row { flex-direction: column; }
                }
                @media (max-width: 768px) {
                    .admin-sidebar { display: none; }
                    .admin-content { padding: 20px 15px 40px; }
                    .admin-stats-grid { grid-template-columns: 1fr; }
                    .admin-topbar { padding: 12px 15px; }
                }
            `}</style>

            {/* ============= SIDEBAR ============= */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <button className="admin-back-btn" onClick={() => window.history.back()}>←</button>
                    <img src={logoImg} alt="EduFlex" className="admin-logo" />
                    <span className="admin-logo-text">EDUFLEX</span>
                </div>

                <nav className="admin-nav">
                    {sidebarItems.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.path}
                            className={`admin-nav-item ${activeItem === idx ? 'active' : ''}`}
                            onClick={() => setActiveItem(idx)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="admin-sidebar-footer">
                    <div style={{ borderTop: '1px solid #ddd', marginBottom: '20px' }}></div>
                    <div className="admin-footer-item">
                        <span>❓</span> <span>help</span>
                    </div>
                    <div className="admin-footer-item" onClick={() => window.location.href = '/login'}>
                        <span>🚪</span> <span>Logout</span>
                    </div>
                </div>
            </aside>

            {/* ============= MAIN ============= */}
            <div className="admin-main">
                {/* Top Bar */}
                <div className="admin-topbar">
                    <button className="admin-hello-btn">Hello Admin</button>
                    <div className="admin-topbar-icon">
                        ✉️
                        <span className="admin-badge">3</span>
                    </div>
                    <div className="admin-topbar-icon">
                        🔔
                        <span className="admin-badge">5</span>
                    </div>
                    <div className="admin-topbar-icon">👤</div>
                </div>

                {/* Content */}
                <div className="admin-content">
                    {/* Stat Cards */}
                    <div className="admin-stats-grid">
                        {statCards.map((card, idx) => (
                            <div key={idx} className="admin-stat-card">
                                <div className="admin-stat-icon">{card.icon}</div>
                                <div>
                                    <div className="admin-stat-label">{card.label}</div>
                                    <div className="admin-stat-value">{card.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Students Types Bar Chart */}
                    <div className="admin-chart-card">
                        <div className="admin-chart-header">
                            <h3 className="admin-chart-title">Students Types</h3>
                            <div className="admin-chart-legend">
                                <span><span className="admin-legend-dot" style={{ background: '#4db6ac' }}></span>Recurring</span>
                                <span><span className="admin-legend-dot" style={{ background: '#3f51b5' }}></span>One Shot</span>
                            </div>
                            <select className="admin-chart-filter">
                                <option>Last 15 Days</option>
                                <option>Last 30 Days</option>
                                <option>Last 7 Days</option>
                            </select>
                        </div>

                        {/* Y-axis labels + bars */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {/* Y-axis */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: `${barChartH}px`, fontSize: '0.7rem', color: '#999', paddingRight: '5px' }}>
                                {[500, 400, 300, 200, 100, 0].map(v => (
                                    <span key={v}>{v}</span>
                                ))}
                            </div>
                            {/* Bars */}
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative' }}>
                                {/* Horizontal grid lines */}
                                {[0, 1, 2, 3, 4, 5].map(i => (
                                    <div key={i} style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: `${(i / 5) * barChartH}px`,
                                        height: '1px',
                                        background: '#f0f0f0',
                                        zIndex: 0
                                    }} />
                                ))}
                                {barData.map((d, idx) => (
                                    <div key={idx} className="bar-group" style={{ zIndex: 1 }}>
                                        <div className="bar-pair">
                                            <div
                                                className="bar-single"
                                                style={{
                                                    height: `${(d.recurring / barMax) * barChartH}px`,
                                                    background: '#4db6ac'
                                                }}
                                            />
                                            <div
                                                className="bar-single"
                                                style={{
                                                    height: `${(d.oneShot / barMax) * barChartH}px`,
                                                    background: '#3f51b5'
                                                }}
                                            />
                                        </div>
                                        <span className="bar-label">{d.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Performance Section */}
                    <div className="admin-chart-card">
                        <h3 className="admin-chart-title" style={{ marginBottom: '5px' }}>Performance</h3>
                        <div className="admin-perf-row">
                            <div className="admin-perf-left">
                                <div className="admin-perf-pct">40%</div>

                                {/* SVG line chart */}
                                <svg viewBox={`-10 -10 ${perfW + 20} ${perfH + 40}`} style={{ width: '100%', maxWidth: '420px', height: 'auto' }}>
                                    {/* Grid lines */}
                                    {[0, 0.25, 0.5, 0.75, 1].map((f, i) => (
                                        <line key={i} x1="0" x2={perfW} y1={perfH - f * perfH} y2={perfH - f * perfH} stroke="#f0f0f0" strokeWidth="1" />
                                    ))}
                                    {/* Line */}
                                    <path d={perfLine} fill="none" stroke="#c49696" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    {/* Second decorative line (lighter) */}
                                    <path
                                        d={`M${perfData.map((d, i) => {
                                            const x = (i / (perfData.length - 1)) * perfW;
                                            const y = perfH - ((d.value * 0.6) / perfMaxVal) * perfH;
                                            return `${x},${y}`;
                                        }).join(' L')}`}
                                        fill="none" stroke="#b0c4de" strokeWidth="2" strokeLinecap="round" strokeDasharray="0"
                                    />
                                    {/* Dots */}
                                    {perfData.map((d, i) => {
                                        const x = (i / (perfData.length - 1)) * perfW;
                                        const y = perfH - (d.value / perfMaxVal) * perfH;
                                        return <circle key={i} cx={x} cy={y} r="4" fill="#c49696" stroke="#fff" strokeWidth="2" />;
                                    })}
                                    {/* X-axis labels */}
                                    {perfData.map((d, i) => (
                                        <text
                                            key={i}
                                            x={(i / (perfData.length - 1)) * perfW}
                                            y={perfH + 25}
                                            textAnchor="middle"
                                            fontSize="11"
                                            fill={d.month === 'Feb' ? '#c49696' : '#999'}
                                            fontWeight={d.month === 'Feb' ? '700' : '400'}
                                        >
                                            {d.month}
                                        </text>
                                    ))}
                                </svg>
                            </div>

                            <div className="admin-perf-right">
                                <button className="admin-action-btn" onClick={() => window.location.href = '/admin/add-courses'}>Add Courses</button>
                                <button className="admin-action-btn" onClick={() => alert('Navigate to Add Student')}>Add Student</button>
                                <button className="admin-action-btn" onClick={() => alert('Navigate to Add Lectures')}>Add Lectures</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default AdminDashboard;
