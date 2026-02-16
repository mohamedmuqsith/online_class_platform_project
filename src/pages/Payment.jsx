import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Payment = () => {
    return (
        <div>
            <Navbar />

            <style>{`
                .payment-container {
                    max-width: 1100px;
                    margin: 60px auto;
                    padding: 0 20px;
                    display: flex;
                    gap: 30px;
                    flex-wrap: wrap;
                }
                
                .checkout-section {
                    flex: 1;
                    min-width: 350px;
                    background: #fff;
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 4px 30px rgba(0,0,0,0.05);
                }
                
                .checkout-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 5px;
                }
                
                .cart-type-label {
                    font-size: 0.9rem;
                    color: #888;
                    margin-bottom: 20px;
                    display: block;
                }
                
                .payment-icons {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                }
                
                .payment-icon-box {
                    border: 1px solid #eee;
                    padding: 8px 15px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: #0070ba; /* PayPal blue */
                    font-family: sans-serif;
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                .form-label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #444;
                    margin-bottom: 8px;
                }
                
                .form-input {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    outline: none;
                    transition: border-color 0.3s;
                }
                
                .form-input:focus {
                    border-color: #c49696;
                }
                
                .form-row {
                    display: flex;
                    gap: 20px;
                }
                
                .form-row > div {
                    flex: 1;
                }
                
                .checkbox-group {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 25px;
                    font-size: 0.85rem;
                    color: #666;
                }
                
                .confirm-btn {
                    width: 100%;
                    padding: 15px;
                    background: #c49696;
                    color: #fff;
                    border: none;
                    border-radius: 30px;
                    font-size: 1rem;
                    font-weight: 700;
                    margin-top: 30px;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                
                .confirm-btn:hover {
                    background: #b08585;
                }
                
                /* Summary Styling */
                .summary-section {
                    width: 320px;
                    flex-shrink: 0;
                }
                
                .summary-card {
                    background: #fdf6f6;
                    border-radius: 20px;
                    padding: 30px;
                }
                
                .summary-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 25px;
                }
                
                .summary-item {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 20px;
                }
                
                .summary-item-img {
                    width: 70px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                
                .summary-item-text {
                    flex: 1;
                }
                
                .summary-item-title {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #333;
                    line-height: 1.3;
                    margin-bottom: 4px;
                }
                
                .summary-item-desc {
                    font-size: 0.75rem;
                    color: #888;
                }
                
                .summary-item-price {
                    font-weight: 700;
                    color: #333;
                    font-size: 0.9rem;
                    margin-top: 5px;
                }
                
                .summary-divider {
                    height: 1px;
                    background: #eee;
                    margin: 20px 0;
                }
                
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.9rem;
                    color: #555;
                    margin-bottom: 12px;
                }
                
                .summary-total {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 800;
                    color: #333;
                    font-size: 1.1rem;
                    margin-top: 15px;
                }
                
                /* Offers Section */
                .offers-section {
                    max-width: 1100px;
                    margin: 20px auto 80px;
                    padding: 0 20px;
                }
                
                .offers-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }
                
                .offers-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #333;
                }
                
                .see-all-btn {
                    color: #4db6ac;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                }
                
                .offers-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                }
                
                .offer-card {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    height: 380px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                }
                
                .offer-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .offer-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 30px;
                    color: #fff;
                }
                
                .offer-badge {
                    background: #4db6ac;
                    color: #fff;
                    width: 70px;
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 1.2rem;
                    position: absolute;
                    top: 40px;
                    left: 20px;
                }
                
                .offer-badge span {
                    font-size: 0.8rem;
                    font-weight: 400;
                }
                
                .offer-card-title {
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                
                .offer-card-text {
                    font-size: 0.85rem;
                    opacity: 0.9;
                    line-height: 1.5;
                }
                
                @media (max-width: 900px) {
                    .payment-container {
                        flex-direction: column;
                    }
                    .summary-section {
                        width: 100%;
                        order: -1;
                    }
                    .offers-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="payment-container">
                {/* Checkout Section */}
                <div className="checkout-section">
                    <h2 className="checkout-title">Checkout</h2>
                    <span className="cart-type-label">Cart Type</span>

                    <div className="payment-icons">
                        <div className="payment-icon-box" style={{ color: '#003087' }}>PayPal</div>
                        <div className="payment-icon-box" style={{ background: '#007bc1', color: '#fff', border: 'none' }}>AMEX</div>
                        <div className="payment-icon-box" style={{ color: '#1a1f71', fontWeight: '800', fontStyle: 'italic', fontSize: '1.2rem' }}>VISA</div>
                        <div className="payment-icon-box" style={{ display: 'flex', gap: '3px' }}>
                            <div style={{ width: '15px', height: '15px', background: '#eb001b', borderRadius: '50%' }}></div>
                            <div style={{ width: '15px', height: '15px', background: '#f79e1b', borderRadius: '50%', marginLeft: '-8px', opacity: 0.8 }}></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Name on Card</label>
                        <input type="text" className="form-input" placeholder="Enter name on Card" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Card Number</label>
                        <input type="text" className="form-input" placeholder="Enter Card Number" />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Expiration Date ( MM/YY )</label>
                            <input type="text" className="form-input" placeholder="Enter Expiration Date" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">CVC</label>
                            <input type="text" className="form-input" placeholder="Enter CVC" />
                        </div>
                    </div>

                    <div className="checkbox-group">
                        <input type="checkbox" id="saveInfo" />
                        <label htmlFor="saveInfo">Save my information for faster checkout</label>
                    </div>

                    <button className="confirm-btn">Confirm Payment</button>
                </div>

                {/* Summary Section */}
                <div className="summary-section">
                    <div className="summary-card">
                        <h3 className="summary-title">Summary</h3>

                        <div className="summary-item">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100" className="summary-item-img" />
                            <div className="summary-item-text">
                                <div className="summary-item-title">adipisising elit, sed do eiusmod</div>
                                <div className="summary-item-desc">Lorem ipsum dollar...</div>
                                <div className="summary-item-price">$24.69</div>
                            </div>
                        </div>

                        <div className="summary-item">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100" className="summary-item-img" />
                            <div className="summary-item-text">
                                <div className="summary-item-title">sed do eiusmod tempor</div>
                                <div className="summary-item-desc">Lorem ipsum dollar...</div>
                                <div className="summary-item-price">$24.69</div>
                            </div>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$51.38</span>
                        </div>
                        <div className="summary-row">
                            <span>Coupon Discount</span>
                            <span>0 %</span>
                        </div>
                        <div className="summary-row" style={{ marginBottom: '20px' }}>
                            <span>TAX</span>
                            <span>5</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-total">
                            <span>Total</span>
                            <span>$56.38</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deals Section */}
            <div className="offers-section">
                <div className="offers-header">
                    <h2 className="offers-title">Top Education offers and deals are listed here</h2>
                    <span className="see-all-btn">See all</span>
                </div>

                <div className="offers-grid">
                    <div className="offer-card">
                        <div className="offer-badge">50<span>%</span></div>
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500" className="offer-img" />
                        <div className="offer-overlay">
                            <div className="offer-card-title">Lorem ipsum dolor</div>
                            <p className="offer-card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>

                    <div className="offer-card">
                        <div className="offer-badge" style={{ background: '#4db6ac', opacity: 0.9 }}>10<span>%</span></div>
                        <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?w=500" className="offer-img" />
                        <div className="offer-overlay">
                            <div className="offer-card-title">Lorem ipsum dolor</div>
                            <p className="offer-card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>

                    <div className="offer-card">
                        <div className="offer-badge">50<span>%</span></div>
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500" className="offer-img" />
                        <div className="offer-overlay">
                            <div className="offer-card-title">Lorem ipsum dolor</div>
                            <p className="offer-card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Payment;
