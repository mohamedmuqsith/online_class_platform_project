import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { authAPI } from '../api';

const EditProfile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        contact: '',
        bio: '',
        dateOfBirth: '',
        gender: '',
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [changingPassword, setChangingPassword] = useState(false);
    const [showPasswordSection, setShowPasswordSection] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    /* Fetch user data from backend API */
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await authAPI.getUser();
                setFormData({
                    name: user.username || '',
                    email: user.email || '',
                    address: user.address || '',
                    contact: user.contact || '',
                    bio: user.bio || '',
                    dateOfBirth: user.dateOfBirth || '',
                    gender: user.gender || '',
                });
            } catch (err) {
                console.error('Failed to fetch user:', err);
                // Fallback to localStorage
                const saved = localStorage.getItem('eduflex_user');
                if (saved) {
                    const user = JSON.parse(saved);
                    setFormData(prev => ({
                        ...prev,
                        name: user.username || '',
                        email: user.email || '',
                        address: user.address || '',
                        contact: user.contact || '',
                        bio: user.bio || '',
                        dateOfBirth: user.dateOfBirth || '',
                        gender: user.gender || '',
                    }));
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage({ text: '', type: '' });

        try {
            const updatedUser = await authAPI.updateProfile({
                username: formData.name,
                email: formData.email,
                address: formData.address,
                contact: formData.contact,
                bio: formData.bio,
                dateOfBirth: formData.dateOfBirth,
                gender: formData.gender,
            });

            // Update localStorage with server response
            localStorage.setItem('eduflex_user', JSON.stringify(updatedUser));
            setMessage({ text: 'Profile updated successfully!', type: 'success' });
            setTimeout(() => navigate('/profile'), 1500);
        } catch (err) {
            setMessage({ text: err.message || 'Failed to update profile', type: 'error' });
        } finally {
            setSaving(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setMessage({ text: 'New passwords do not match', type: 'error' });
            return;
        }
        if (passwordData.newPassword.length < 6) {
            setMessage({ text: 'Password must be at least 6 characters', type: 'error' });
            return;
        }

        setChangingPassword(true);
        try {
            await authAPI.changePassword(passwordData.currentPassword, passwordData.newPassword);
            setMessage({ text: 'Password changed successfully!', type: 'success' });
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            setShowPasswordSection(false);
        } catch (err) {
            setMessage({ text: err.message || 'Failed to change password', type: 'error' });
        } finally {
            setChangingPassword(false);
        }
    };

    const handleCancel = () => {
        navigate('/profile');
    };

    if (loading) return <div style={{ textAlign: 'center', padding: '100px' }}>Loading profile...</div>;

    return (
        <div className="ep-wrapper">
            <style>{`
                .ep-wrapper {
                    min-height: 100vh;
                    background: #fdf6f6;
                    font-family: 'Segoe UI', 'Inter', sans-serif;
                }

                /* ============= NAVBAR ============= */
                .ep-navbar {
                    display: flex;
                    align-items: center;
                    padding: 14px 35px;
                    background: #fff;
                    border-bottom: 1px solid #f0e0e0;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                .ep-nav-back {
                    width: 34px;
                    height: 34px;
                    border-radius: 8px;
                    background: #c49696;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    font-size: 1rem;
                    margin-right: 14px;
                    transition: background 0.3s;
                }
                .ep-nav-back:hover { background: #b08585; }
                .ep-nav-logo { height: 42px; margin-right: 8px; }
                .ep-nav-brand {
                    font-weight: 800;
                    font-size: 1.1rem;
                    color: #333;
                    letter-spacing: 1.5px;
                    margin-right: auto;
                }
                .ep-nav-brand small {
                    display: block;
                    font-size: 0.55rem;
                    color: #999;
                    letter-spacing: 2.5px;
                    font-weight: 600;
                }
                .ep-nav-links {
                    display: flex;
                    gap: 28px;
                    align-items: center;
                }
                .ep-nav-link {
                    text-decoration: none;
                    color: #444;
                    font-size: 0.9rem;
                    font-weight: 600;
                    transition: color 0.3s;
                    position: relative;
                }
                .ep-nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #c49696;
                    transition: width 0.3s;
                }
                .ep-nav-link:hover { color: #c49696; }
                .ep-nav-link:hover::after { width: 100%; }

                /* ============= CONTENT ============= */
                .ep-content {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 50px 30px 80px;
                }
                .ep-title {
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 35px;
                    font-family: 'Playfair Display', serif;
                }

                /* Profile Image */
                .ep-avatar-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 45px;
                    position: relative;
                }
                .ep-avatar {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 4px solid #e8d4d4;
                    box-shadow: 0 6px 25px rgba(196,150,150,0.25);
                    transition: transform 0.3s;
                }
                .ep-avatar:hover { transform: scale(1.05); }
                .ep-avatar-edit {
                    position: absolute;
                    bottom: 5px;
                    left: calc(50% + 30px);
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: #c49696;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    cursor: pointer;
                    border: 2px solid #fff;
                    transition: background 0.3s;
                }
                .ep-avatar-edit:hover { background: #b08585; }

                /* Form */
                .ep-form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px 40px;
                }
                .ep-field-group {
                    display: flex;
                    flex-direction: column;
                }
                .ep-label {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 10px;
                }
                .ep-input {
                    padding: 15px 18px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #333;
                    background: #fff;
                    outline: none;
                    transition: border-color 0.3s, box-shadow 0.3s;
                    font-family: inherit;
                }
                .ep-input:focus {
                    border-color: #c49696;
                    box-shadow: 0 0 0 3px rgba(196,150,150,0.12);
                }
                .ep-input::placeholder {
                    color: #bbb;
                    font-weight: 400;
                }

                /* Buttons Row */
                .ep-buttons {
                    grid-column: 1 / -1;
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 25px;
                }
                .ep-btn {
                    padding: 14px 45px;
                    border-radius: 6px;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    letter-spacing: 0.5px;
                }
                .ep-btn-cancel {
                    background: #fff;
                    color: #333;
                    border: 2px solid #333;
                }
                .ep-btn-cancel:hover {
                    background: #333;
                    color: #fff;
                }
                .ep-btn-save {
                    background: #222;
                    color: #fff;
                    border: 2px solid #222;
                }
                .ep-btn-save:hover {
                    background: #000;
                    border-color: #000;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 18px rgba(0,0,0,0.2);
                }
                .ep-btn-save:disabled, .ep-btn-password:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }

                /* Message */
                .ep-message {
                    grid-column: 1 / -1;
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    text-align: center;
                }
                .ep-message.success {
                    background: #d4edda;
                    color: #155724;
                    border: 1px solid #c3e6cb;
                }
                .ep-message.error {
                    background: #f8d7da;
                    color: #721c24;
                    border: 1px solid #f5c6cb;
                }

                /* Textarea */
                .ep-textarea {
                    padding: 15px 18px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #333;
                    background: #fff;
                    outline: none;
                    transition: border-color 0.3s, box-shadow 0.3s;
                    font-family: inherit;
                    resize: vertical;
                    min-height: 80px;
                }
                .ep-textarea:focus {
                    border-color: #c49696;
                    box-shadow: 0 0 0 3px rgba(196,150,150,0.12);
                }

                /* Select */
                .ep-select {
                    padding: 15px 18px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #333;
                    background: #fff;
                    outline: none;
                    transition: border-color 0.3s, box-shadow 0.3s;
                    font-family: inherit;
                    cursor: pointer;
                }
                .ep-select:focus {
                    border-color: #c49696;
                    box-shadow: 0 0 0 3px rgba(196,150,150,0.12);
                }

                /* Full width field */
                .ep-field-full {
                    grid-column: 1 / -1;
                }

                /* Password Section */
                .ep-password-section {
                    grid-column: 1 / -1;
                    border-top: 2px solid #f0e0e0;
                    padding-top: 25px;
                    margin-top: 10px;
                }
                .ep-password-toggle {
                    background: none;
                    border: none;
                    color: #c49696;
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    padding: 0;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .ep-password-toggle:hover { color: #b08585; }
                .ep-password-fields {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 15px;
                }
                .ep-btn-password {
                    padding: 12px 30px;
                    border-radius: 6px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    transition: all 0.3s;
                }
                .ep-btn-password:hover { background: #b08585; }

                /* Responsive */
                @media (max-width: 640px) {
                    .ep-form { grid-template-columns: 1fr; gap: 22px; }
                    .ep-content { padding: 30px 18px 60px; }
                    .ep-title { font-size: 1.6rem; }
                    .ep-nav-links { display: none; }
                    .ep-navbar { padding: 12px 18px; }
                    .ep-buttons { flex-direction: column; align-items: center; gap: 14px; }
                    .ep-btn { width: 100%; text-align: center; }
                    .ep-password-fields { grid-template-columns: 1fr; }
                }
            `}</style>

            {/* NAVBAR */}
            <nav className="ep-navbar">
                <button className="ep-nav-back" onClick={() => window.history.back()}>←</button>
                <img src={logoImg} alt="EduFlex" className="ep-nav-logo" />
                <div className="ep-nav-brand">
                    EDUFLEX
                    <small>EDUCATION</small>
                </div>
                <div className="ep-nav-links">
                    <Link to="/" className="ep-nav-link">Home</Link>
                    <Link to="/courses" className="ep-nav-link">Courses</Link>
                    <Link to="/search" className="ep-nav-link">Careers</Link>
                    <Link to="/blog" className="ep-nav-link">Blog</Link>
                    <Link to="/contact" className="ep-nav-link">About us</Link>
                </div>
            </nav>

            {/* CONTENT */}
            <div className="ep-content">
                <h1 className="ep-title">Edit Profile</h1>

                {/* Avatar */}
                <div className="ep-avatar-wrapper">
                    <div className="ep-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8d4d4', fontSize: '3rem' }}>👩‍🎓</div>
                    <span className="ep-avatar-edit">✏️</span>
                </div>

                {/* Form */}
                <form className="ep-form" onSubmit={handleSubmit}>
                    {message.text && (
                        <div className={`ep-message ${message.type}`}>{message.text}</div>
                    )}
                    <div className="ep-field-group">
                        <label className="ep-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="ep-input"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="ep-field-group">
                        <label className="ep-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="ep-input"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="ep-field-group">
                        <label className="ep-label">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="ep-input"
                            placeholder="Enter Your Address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ep-field-group">
                        <label className="ep-label">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            className="ep-input"
                            placeholder="Enter Your Contact Number"
                            value={formData.contact}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ep-field-group">
                        <label className="ep-label">Date of Birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            className="ep-input"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ep-field-group">
                        <label className="ep-label">Gender</label>
                        <select
                            name="gender"
                            className="ep-select"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="ep-field-group ep-field-full">
                        <label className="ep-label">Bio</label>
                        <textarea
                            name="bio"
                            className="ep-textarea"
                            placeholder="Tell us about yourself..."
                            value={formData.bio}
                            onChange={handleChange}
                            maxLength={300}
                        />
                        <span style={{ fontSize: '0.75rem', color: '#999', marginTop: '4px' }}>
                            {formData.bio.length}/300 characters
                        </span>
                    </div>

                    {/* Password Change Section */}
                    <div className="ep-password-section">
                        <button
                            type="button"
                            className="ep-password-toggle"
                            onClick={() => setShowPasswordSection(!showPasswordSection)}
                        >
                            {showPasswordSection ? '▼' : '▶'} Change Password
                        </button>
                        {showPasswordSection && (
                            <>
                                <div className="ep-password-fields">
                                    <div className="ep-field-group">
                                        <label className="ep-label">Current Password</label>
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            className="ep-input"
                                            placeholder="Current password"
                                            value={passwordData.currentPassword}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="ep-field-group">
                                        <label className="ep-label">New Password</label>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            className="ep-input"
                                            placeholder="New password"
                                            value={passwordData.newPassword}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="ep-field-group">
                                        <label className="ep-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            className="ep-input"
                                            placeholder="Confirm new password"
                                            value={passwordData.confirmPassword}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="ep-btn-password"
                                    onClick={handlePasswordSubmit}
                                    disabled={changingPassword}
                                >
                                    {changingPassword ? 'Changing...' : 'Update Password'}
                                </button>
                            </>
                        )}
                    </div>

                    <div className="ep-buttons">
                        <button type="button" className="ep-btn ep-btn-cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="ep-btn ep-btn-save" disabled={saving}>
                            {saving ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
