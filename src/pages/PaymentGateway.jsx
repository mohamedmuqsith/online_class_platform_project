import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const orderItems = [
    { title: 'adipiscing elit, sed do eiusmod', sub: 'Lorem ipsum dolor…', price: '$24.69' },
    { title: 'sed do eiusmod tempor', sub: 'Lorem ipsum dolor…', price: '$24.69' },
];

const deals = [
    { discount: '50%', title: 'AWS Certified Solutions Architect', desc: 'This course helps students learn key concepts through simple and clear lessons.', color: '#c49696' },
    { discount: '10%', title: 'AWS Certified Solutions Architect', desc: 'This course helps students learn key concepts through simple and clear lessons.', color: '#7986cb' },
    { discount: '50%', title: 'AWS Certified Solutions Architect', desc: 'This course helps students learn key concepts through simple and clear lessons.', color: '#c49696' },
];

const PaymentGateway = () => {
    const [cardType, setCardType] = useState('visa');
    const [formData, setFormData] = useState({
        nameOnCard: '',
        cardNumber: '',
        expDate: '',
        cvc: '',
        saveInfo: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment confirmed successfully!');
    };

    return (
        <div className="pg-wrapper">
            <style>{`
                .pg-wrapper {
                    min-height: 100vh;
                    background: #f8f5f5;
                    font-family: 'Segoe UI', 'Inter', sans-serif;
                }

                .pg-content {
                    max-width: 950px;
                    margin: 0 auto;
                    padding: 45px 30px 60px;
                }

                /* Checkout Row */
                .pg-checkout-row {
                    display: flex;
                    gap: 30px;
                    flex-wrap: wrap;
                    margin-bottom: 55px;
                }

                /* Checkout Form */
                .pg-checkout-card {
                    flex: 1;
                    min-width: 380px;
                    background: #fff;
                    border-radius: 16px;
                    padding: 35px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }
                .pg-checkout-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #333;
                    margin-bottom: 6px;
                }
                .pg-checkout-sub {
                    font-size: 0.88rem;
                    color: #888;
                    margin-bottom: 22px;
                }

                /* Card Type Icons */
                .pg-card-types {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 28px;
                }
                .pg-card-icon {
                    width: 54px;
                    height: 34px;
                    border-radius: 6px;
                    border: 2px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.72rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.3s;
                    color: #555;
                }
                .pg-card-icon.active {
                    border-color: #c49696;
                    background: #fdf6f6;
                }
                .pg-card-icon:hover { border-color: #c49696; }
                .pg-card-paypal { color: #003087; }
                .pg-card-amex { background: #1a1f71; color: #fff; font-size: 0.5rem; }
                .pg-card-visa { color: #1a1f71; font-weight: 900; }
                .pg-card-mc { color: #eb001b; }

                /* Form Fields */
                .pg-form-group { margin-bottom: 20px; }
                .pg-form-row { display: flex; gap: 18px; margin-bottom: 20px; }
                .pg-form-row .pg-form-group { flex: 1; margin-bottom: 0; }
                .pg-form-label {
                    display: block;
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 8px;
                }
                .pg-form-input {
                    width: 100%;
                    padding: 13px 16px;
                    border: 1px solid #e0e0e0;
                    border-radius: 6px;
                    font-size: 0.92rem;
                    color: #555;
                    outline: none;
                    transition: border-color 0.3s;
                    font-family: inherit;
                    box-sizing: border-box;
                }
                .pg-form-input:focus { border-color: #c49696; }
                .pg-form-input::placeholder { color: #bbb; }

                /* Checkbox */
                .pg-checkbox-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 25px;
                    font-size: 0.82rem;
                    color: #777;
                }
                .pg-checkbox-row input { accent-color: #c49696; }

                /* Confirm Button */
                .pg-confirm-btn {
                    width: 100%;
                    padding: 15px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 1.05rem;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .pg-confirm-btn:hover {
                    background: #b08585;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(196,150,150,0.35);
                }

                /* Summary Card */
                .pg-summary-card {
                    min-width: 260px;
                    max-width: 320px;
                    background: #fdf6f6;
                    border-radius: 16px;
                    padding: 25px;
                    box-shadow: 0 4px 20px rgba(196,150,150,0.1);
                    align-self: flex-start;
                }
                .pg-summary-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 18px;
                }
                .pg-summary-item {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 14px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid #efe0e0;
                }
                .pg-summary-thumb {
                    width: 50px;
                    height: 50px;
                    border-radius: 8px;
                    background: #e8d4d4;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                }
                .pg-summary-info { flex: 1; }
                .pg-summary-item-title {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 2px;
                }
                .pg-summary-item-sub { font-size: 0.72rem; color: #999; }
                .pg-summary-item-price {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #333;
                    align-self: center;
                }
                .pg-summary-line {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.85rem;
                    padding: 6px 0;
                }
                .pg-summary-line.total {
                    font-weight: 800;
                    font-size: 1rem;
                    border-top: 2px solid #ddd;
                    margin-top: 6px;
                    padding-top: 12px;
                }

                /* Deals Section */
                .pg-deals-section { margin-top: 20px; }
                .pg-deals-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 22px;
                }
                .pg-deals-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #333;
                }
                .pg-deals-see-all {
                    font-size: 0.85rem;
                    color: #c49696;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                }
                .pg-deals-see-all:hover { text-decoration: underline; }
                .pg-deals-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                .pg-deal-card {
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 18px rgba(0,0,0,0.08);
                    transition: transform 0.3s, box-shadow 0.3s;
                    cursor: pointer;
                }
                .pg-deal-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                }
                .pg-deal-image {
                    position: relative;
                    height: 160px;
                    background: linear-gradient(135deg, rgba(0,0,0,0.45), rgba(0,0,0,0.2));
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 18px;
                    color: #fff;
                }
                .pg-deal-discount {
                    font-size: 2rem;
                    font-weight: 800;
                }
                .pg-deal-name {
                    font-size: 0.88rem;
                    font-weight: 700;
                }
                .pg-deal-desc {
                    padding: 14px 18px;
                    font-size: 0.78rem;
                    color: #666;
                    background: #fff;
                    line-height: 1.5;
                }
                .pg-deal-dots {
                    display: flex;
                    gap: 6px;
                    justify-content: center;
                    padding: 10px;
                    background: #fff;
                }
                .pg-deal-dot {
                    width: 7px; height: 7px; border-radius: 50%;
                    background: #ddd;
                }
                .pg-deal-dot.active { background: #c49696; }

                @media (max-width: 768px) {
                    .pg-checkout-row { flex-direction: column; }
                    .pg-checkout-card { min-width: unset; }
                    .pg-summary-card { max-width: 100%; }
                    .pg-deals-grid { grid-template-columns: 1fr; }
                    .pg-form-row { flex-direction: column; gap: 0; }
                    .pg-content { padding: 25px 15px 40px; }
                }
            `}</style>

            <Navbar />

            <div className="pg-content">
                {/* Checkout Row */}
                <div className="pg-checkout-row">
                    {/* Form */}
                    <div className="pg-checkout-card">
                        <h2 className="pg-checkout-title">Checkout</h2>
                        <p className="pg-checkout-sub">Cart Type</p>

                        <div className="pg-card-types">
                            <div className={`pg-card-icon pg-card-paypal ${cardType === 'paypal' ? 'active' : ''}`} onClick={() => setCardType('paypal')}>Pay<b>Pal</b></div>
                            <div className={`pg-card-icon pg-card-amex ${cardType === 'amex' ? 'active' : ''}`} onClick={() => setCardType('amex')}>AMEX</div>
                            <div className={`pg-card-icon pg-card-visa ${cardType === 'visa' ? 'active' : ''}`} onClick={() => setCardType('visa')}>VISA</div>
                            <div className={`pg-card-icon pg-card-mc ${cardType === 'mc' ? 'active' : ''}`} onClick={() => setCardType('mc')}>MC</div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="pg-form-group">
                                <label className="pg-form-label">Name on Card</label>
                                <input type="text" name="nameOnCard" className="pg-form-input" placeholder="Enter name on Card" value={formData.nameOnCard} onChange={handleChange} />
                            </div>
                            <div className="pg-form-group">
                                <label className="pg-form-label">Card Number</label>
                                <input type="text" name="cardNumber" className="pg-form-input" placeholder="Enter Card Number" value={formData.cardNumber} onChange={handleChange} />
                            </div>
                            <div className="pg-form-row">
                                <div className="pg-form-group">
                                    <label className="pg-form-label">Expiration Date (MM/YY)</label>
                                    <input type="text" name="expDate" className="pg-form-input" placeholder="Enter Expiration Date" value={formData.expDate} onChange={handleChange} />
                                </div>
                                <div className="pg-form-group">
                                    <label className="pg-form-label">CVC</label>
                                    <input type="text" name="cvc" className="pg-form-input" placeholder="Enter CVC" value={formData.cvc} onChange={handleChange} />
                                </div>
                            </div>
                            <label className="pg-checkbox-row">
                                <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleChange} />
                                Save my information for faster checkout
                            </label>
                            <button type="submit" className="pg-confirm-btn">Confirm Payment</button>
                        </form>
                    </div>

                    {/* Summary */}
                    <div className="pg-summary-card">
                        <h3 className="pg-summary-title">Summary</h3>
                        {orderItems.map((item, idx) => (
                            <div key={idx} className="pg-summary-item">
                                <div className="pg-summary-thumb">📚</div>
                                <div className="pg-summary-info">
                                    <div className="pg-summary-item-title">{item.title}</div>
                                    <div className="pg-summary-item-sub">{item.sub}</div>
                                </div>
                                <span className="pg-summary-item-price">{item.price}</span>
                            </div>
                        ))}
                        <div className="pg-summary-line"><span>Subtotal</span><strong>$51.38</strong></div>
                        <div className="pg-summary-line"><span>Coupon Discount</span><span>0 %</span></div>
                        <div className="pg-summary-line"><span>TAX</span><span>5</span></div>
                        <div className="pg-summary-line total"><span>Total</span><strong>$56.38</strong></div>
                    </div>
                </div>

                {/* Deals Section */}
                <div className="pg-deals-section">
                    <div className="pg-deals-header">
                        <h2 className="pg-deals-title">Top Education offers and deals are listed here</h2>
                        <Link to="/courses" className="pg-deals-see-all">See all</Link>
                    </div>
                    <div className="pg-deals-grid">
                        {deals.map((deal, idx) => (
                            <div key={idx} className="pg-deal-card">
                                <div className="pg-deal-image" style={{ background: `linear-gradient(135deg, ${deal.color}cc, ${deal.color}88)` }}>
                                    <span className="pg-deal-discount">{deal.discount}</span>
                                    <span className="pg-deal-name">{deal.title}</span>
                                </div>
                                <div className="pg-deal-desc">{deal.desc}</div>
                                <div className="pg-deal-dots">
                                    <span className={`pg-deal-dot ${idx === 0 ? 'active' : ''}`} />
                                    <span className="pg-deal-dot" />
                                    <span className="pg-deal-dot" />
                                    <span className="pg-deal-dot" />
                                    <span className="pg-deal-dot" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PaymentGateway;
