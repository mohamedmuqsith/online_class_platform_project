import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const filters = ['Subject', 'Partner', 'Program', 'Language', 'Availability', 'Learning Type'];

const mainCourses = Array(8).fill({
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Design',
    duration: '3 Month',
    instructor: 'Lina',
    oldPrice: '$10',
    newPrice: '$8',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
});

const recommendedCourses = Array(4).fill({
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Design',
    duration: '3 Month',
    instructor: 'Lina',
    oldPrice: '$10',
    newPrice: '$8',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop'
});

const creators = [
    { name: 'Jane Cooper', image: 'https://images.unsplash.com/photo-1580489944761-15a3bbd7547b?w=200&h=200&fit=crop' },
    { name: 'Adam', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
    { name: 'Tamara', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' }
];

const Search = () => {
    return (
        <div style={{ background: '#fdf6f6', minHeight: '100vh' }}>
            <Navbar />

            <style>{`
                /* Hero/Filter Area */
                .search-hero {
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200') center/cover;
                    padding: 80px 20px;
                    text-align: center;
                    position: relative;
                }
                
                .search-bar-wrap {
                    max-width: 800px;
                    margin: 0 auto 30px;
                    display: flex;
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .search-input {
                    flex: 1;
                    padding: 18px 25px;
                    border: none;
                    outline: none;
                    font-size: 1rem;
                }
                
                .search-submit {
                    background: #c49696;
                    color: #fff;
                    border: none;
                    padding: 0 40px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                
                .search-submit:hover { background: #b08585; }
                
                .filter-row {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    flex-wrap: wrap;
                }
                
                .filter-select {
                    background: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    color: #333;
                    font-weight: 600;
                    cursor: pointer;
                    outline: none;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    appearance: none;
                    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 12px top 50%;
                    background-size: 10px auto;
                    padding-right: 35px;
                }

                /* Grid Layouts */
                .search-content {
                    max-width: 1200px;
                    margin: 60px auto;
                    padding: 0 20px;
                }
                
                .grid-title-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }
                
                .grid-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #333;
                }
                
                .see-all-link {
                    color: #4db6ac;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                }
                
                .course-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 25px;
                    margin-bottom: 80px;
                }
                
                /* Course Card */
                .s-card {
                    background: #fff;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .s-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .s-card-img {
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
                }
                
                .s-card-body {
                    padding: 18px;
                }
                
                .s-card-meta {
                    display: flex;
                    gap: 12px;
                    font-size: 0.72rem;
                    color: #999;
                    margin-bottom: 8px;
                }
                
                .s-card-title {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: #333;
                    margin-bottom: 8px;
                    line-height: 1.3;
                }
                
                .s-card-desc {
                    color: #888;
                    font-size: 0.78rem;
                    line-height: 1.5;
                    margin-bottom: 15px;
                }
                
                .s-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #f5f5f5;
                    padding-top: 12px;
                }
                
                .s-instructor {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.82rem;
                    color: #555;
                }
                
                .s-avatar {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: #c49696;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.6rem;
                    color: #fff;
                }
                
                .s-price {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .s-old-price {
                    text-decoration: line-through;
                    color: #bbb;
                    font-size: 0.8rem;
                }
                
                .s-new-price {
                    color: #4db6ac;
                    font-weight: 700;
                    font-size: 1.1rem;
                }

                /* Creator Section */
                .creators-wrap {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    flex-wrap: wrap;
                    margin-bottom: 80px;
                }
                
                .creator-card {
                    background: #fff;
                    width: 280px;
                    border-radius: 20px;
                    position: relative;
                    padding-top: 140px;
                    margin-bottom: 60px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }
                
                .creator-img-wrap {
                    position: absolute;
                    top: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 180px;
                    height: 180px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .creator-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .creator-body {
                    padding: 20px 30px 40px;
                    text-align: center;
                }
                
                .creator-name {
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: #333;
                    margin-bottom: 10px;
                }
                
                .creator-desc {
                    font-size: 0.85rem;
                    color: #888;
                    line-height: 1.6;
                }

                @media (max-width: 1024px) {
                    .course-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 600px) {
                    .course-grid { grid-template-columns: 1fr !important; }
                    .filter-row { gap: 10px; }
                    .filter-select { font-size: 0.8rem; padding: 8px 15px; }
                }
            `}</style>

            <div className="search-hero">
                <div className="search-bar-wrap">
                    <input type="text" className="search-input" placeholder="Search your favourite course" />
                    <button className="search-submit" onClick={() => alert('Searching for courses...')}>Search</button>
                </div>

                <div className="filter-row">
                    {filters.map((f, i) => (
                        <select key={i} className="filter-select">
                            <option>{f}</option>
                        </select>
                    ))}
                </div>
            </div>

            <div className="search-content">
                {/* Main Course Grid */}
                <div className="course-grid">
                    {mainCourses.map((c, i) => (
                        <div key={i} className="s-card" onClick={() => window.location.href = '/course-details'} style={{ cursor: 'pointer' }}>
                            <img src={c.image} className="s-card-img" alt={c.title} />
                            <div className="s-card-body">
                                <div className="s-card-meta">
                                    <span>📚 {c.category}</span>
                                    <span>⏱ {c.duration}</span>
                                </div>
                                <h3 className="s-card-title">{c.title}</h3>
                                <p className="s-card-desc">{c.desc}</p>
                                <div className="s-card-footer">
                                    <div className="s-instructor">
                                        <span className="s-avatar">👩</span>
                                        {c.instructor}
                                    </div>
                                    <div className="s-price">
                                        <span className="s-old-price">{c.oldPrice}</span>
                                        <span className="s-new-price">{c.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recommended Section */}
                <div className="grid-title-row">
                    <h2 className="grid-title">Recommended for you</h2>
                    <span className="see-all-link">See all</span>
                </div>

                <div className="course-grid">
                    {recommendedCourses.map((c, i) => (
                        <div key={i} className="s-card" onClick={() => window.location.href = '/course-details'} style={{ cursor: 'pointer' }}>
                            <img src={c.image} className="s-card-img" alt={c.title} />
                            <div className="s-card-body">
                                <div className="s-card-meta">
                                    <span>📚 {c.category}</span>
                                    <span>⏱ {c.duration}</span>
                                </div>
                                <h3 className="s-card-title">{c.title}</h3>
                                <p className="s-card-desc">{c.desc}</p>
                                <div className="s-card-footer">
                                    <div className="s-instructor">
                                        <span className="s-avatar">👩</span>
                                        {c.instructor}
                                    </div>
                                    <div className="s-price">
                                        <span className="s-old-price">{c.oldPrice}</span>
                                        <span className="s-new-price">{c.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Creators Section */}
                <div className="grid-title-row">
                    <h2 className="grid-title">Classes taught by real creators</h2>
                    <span className="see-all-link">See all</span>
                </div>

                <div className="creators-wrap">
                    {creators.map((cr, i) => (
                        <div key={i} className="creator-card">
                            <div className="creator-img-wrap">
                                <img src={cr.image} className="creator-img" alt={cr.name} />
                            </div>
                            <div className="creator-body">
                                <h4 className="creator-name">{cr.name}</h4>
                                <p className="creator-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Search;
