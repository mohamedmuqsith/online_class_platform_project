import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const certificates = [
    { title: 'Project Management' },
    { title: 'React' },
    { title: 'UI/UX Design Fundamentals' },
];

const Certificate = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCerts = certificates.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDownload = (title) => {
        alert(`Downloading certificate: ${title}`);
    };

    return (
        <div className="cert-wrapper">
            <style>{`
                .cert-wrapper {
                    min-height: 100vh;
                    background: #f8f5f5;
                    font-family: 'Segoe UI', 'Inter', sans-serif;
                }

                .cert-content {
                    max-width: 820px;
                    margin: 0 auto;
                    padding: 45px 30px 60px;
                }

                /* Search Bar */
                .cert-search-bar {
                    display: flex;
                    background: #f0e8e8;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 25px;
                    box-shadow: 0 2px 12px rgba(196,150,150,0.1);
                }
                .cert-search-input {
                    flex: 1;
                    padding: 15px 22px;
                    border: none;
                    outline: none;
                    font-size: 0.95rem;
                    color: #555;
                    background: transparent;
                    font-family: inherit;
                }
                .cert-search-input::placeholder { color: #b0a0a0; }
                .cert-search-btn {
                    padding: 15px 35px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .cert-search-btn:hover { background: #b08585; }

                /* Motivational Banner */
                .cert-banner {
                    background: #fdf0f0;
                    border-radius: 14px;
                    padding: 18px 28px;
                    text-align: center;
                    margin-bottom: 35px;
                }
                .cert-banner p {
                    font-size: 1rem;
                    color: #c49696;
                    font-weight: 600;
                    font-style: italic;
                    margin: 0;
                }

                /* Certificates Card */
                .cert-card {
                    background: #fdf0f0;
                    border-radius: 20px;
                    padding: 30px 35px;
                    max-width: 520px;
                    margin: 0 auto 30px;
                    box-shadow: 0 6px 25px rgba(196,150,150,0.12);
                }
                .cert-card-badge {
                    display: inline-block;
                    padding: 10px 24px;
                    background: #c49696;
                    color: #fff;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    margin-bottom: 24px;
                }
                .cert-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .cert-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 13px 18px;
                    background: #fff;
                    border-radius: 10px;
                    transition: transform 0.2s;
                }
                .cert-item:hover { transform: translateX(4px); }
                .cert-item-title {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #333;
                    padding: 8px 16px;
                    background: #f0e0e0;
                    border-radius: 8px;
                }
                .cert-download-btn {
                    padding: 9px 22px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.82rem;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .cert-download-btn:hover {
                    background: #b08585;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(196,150,150,0.3);
                }

                /* Bottom Banner */
                .cert-bottom-banner {
                    background: #dcc8c8;
                    border-radius: 14px;
                    padding: 22px 30px;
                    max-width: 820px;
                    margin: 0 auto;
                }
                .cert-bottom-banner p {
                    font-size: 0.95rem;
                    color: #888;
                    font-weight: 600;
                    font-style: italic;
                    margin: 0;
                    line-height: 1.5;
                }

                /* No Results */
                .cert-no-results {
                    text-align: center;
                    padding: 30px;
                    color: #999;
                    font-size: 0.95rem;
                }

                @media (max-width: 640px) {
                    .cert-content { padding: 25px 15px 40px; }
                    .cert-card { padding: 22px 20px; }
                    .cert-item { flex-direction: column; gap: 10px; }
                }
            `}</style>

            <Navbar />

            <div className="cert-content">
                {/* Search */}
                <div className="cert-search-bar">
                    <input
                        type="text"
                        className="cert-search-input"
                        placeholder="Search your Certificates"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="cert-search-btn">Search</button>
                </div>

                {/* Banner */}
                <div className="cert-banner">
                    <p>Every certificate is proof of your dedication, growth, and success.</p>
                </div>

                {/* Certificates Card */}
                <div className="cert-card">
                    <span className="cert-card-badge">Your Certificates</span>
                    <div className="cert-list">
                        {filteredCerts.length > 0 ? (
                            filteredCerts.map((cert, idx) => (
                                <div key={idx} className="cert-item">
                                    <span className="cert-item-title">{cert.title}</span>
                                    <button className="cert-download-btn" onClick={() => handleDownload(cert.title)}>Download</button>
                                </div>
                            ))
                        ) : (
                            <div className="cert-no-results">No certificates found matching your search.</div>
                        )}
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="cert-bottom-banner">
                    <p>Access, download, and share the certificates you&apos;ve earned through your learning journey.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Certificate;
