import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div style={{ background: '#fdf6f6', minHeight: '100vh', paddingBottom: '20px' }}>
            <Navbar />

            <style>{`
                .contact-card {
                    max-width: 900px;
                    margin: 60px auto;
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 4px 30px rgba(0,0,0,0.05);
                    padding: 50px 60px;
                    position: relative;
                    z-index: 2;
                }
                
                .contact-header {
                    text-align: center;
                    margin-bottom: 50px;
                }
                
                .contact-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #c49696;
                    text-transform: uppercase;
                    display: inline-block;
                    position: relative;
                    padding-bottom: 10px;
                }
                
                .contact-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #c49696;
                }
                
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }
                
                .contact-form-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 25px;
                }
                
                .form-group {
                    margin-bottom: 20px;
                    position: relative;
                }
                
                .form-label {
                    position: absolute;
                    top: -10px;
                    left: 15px;
                    background: #fff;
                    padding: 0 5px;
                    font-size: 0.75rem;
                    color: #c49696;
                    font-weight: 600;
                }
                
                .form-input {
                    width: 100%;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    outline: none;
                    transition: border-color 0.3s;
                }
                
                .form-input:focus {
                    border-color: #c49696;
                }
                
                .form-textarea {
                    width: 100%;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    outline: none;
                    min-height: 150px;
                    resize: none;
                    transition: border-color 0.3s;
                }
                
                .form-textarea:focus {
                    border-color: #c49696;
                }
                
                .send-btn {
                    width: 100%;
                    padding: 14px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                
                .send-btn:hover {
                    background: #b08585;
                }
                
                /* Info Section */
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                }
                
                .info-text {
                    font-size: 0.9rem;
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                
                .info-highlight {
                    font-weight: 700;
                    color: #333;
                    font-size: 1rem;
                    margin-bottom: 5px;
                }
                
                .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin: 20px 0;
                }
                
                .social-icon {
                    width: 24px;
                    height: 24px;
                    color: #333;
                    cursor: pointer;
                    transition: color 0.3s;
                }
                
                .social-icon:hover {
                    color: #c49696;
                }
                
                .map-box {
                    margin-top: 20px;
                    border-radius: 12px;
                    overflow: hidden;
                    height: 180px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                }
                
                .map-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .contact-card {
                        padding: 40px 30px;
                        margin: 20px;
                    }
                }
            `}</style>

            <div className="contact-card">
                <div className="contact-header">
                    <h2 className="contact-title">Contact Us</h2>
                </div>

                <div className="contact-grid">
                    {/* Form Section */}
                    <div className="contact-form">
                        <h3 className="contact-form-title">Leave us a message</h3>

                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-input" placeholder="First_Name Last_Name" />
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-input" placeholder="Email Address" />
                        </div>

                        <div className="form-group">
                            <textarea className="form-textarea" placeholder="Your Message"></textarea>
                        </div>

                        <button className="send-btn" onClick={() => alert('Message Sent Successfully!')}>Send</button>
                    </div>

                    {/* Info Section */}
                    <div className="contact-info">
                        <div className="info-text">
                            B 37/3 ,<br />
                            colombo 02,<br />
                            Malabe,
                        </div>
                        <div className="info-highlight">+94 77 456 7890</div>
                        <div className="info-highlight" style={{ fontSize: '1.1rem' }}>info@eduflex.lk</div>

                        <div className="social-icons">
                            <span className="social-icon">▶</span>
                            <span className="social-icon">📷</span>
                            <span className="social-icon">f</span>
                            <span className="social-icon">𝕏</span>
                        </div>

                        <div className="map-box">
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=200&fit=crop"
                                alt="Location Map"
                                className="map-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
