import React from 'react';

const plans = [
    {
        name: '1 Month Plan',
        price: '$6',
        period: 'month',
        features: [
            'Components-driven system',
            'Sales-boosting landing pages',
            'Awesome Feather Icons pack'
        ],
        featured: false,
        btnText: 'Try for month'
    },
    {
        name: '6 Months Plan',
        price: '$36',
        period: '6 months',
        features: [
            'Components-driven system',
            'Sales-boosting landing pages',
            'Awesome Feather Icons pack',
            'Themed into 3 different styles',
            'Will help to learn Figma'
        ],
        featured: true,
        btnText: 'Try for 6 months'
    },
    {
        name: '1 Year Plan',
        price: '$70',
        period: 'year',
        features: [
            'Components-driven system',
            'Sales-boosting landing pages',
            'Awesome Feather Icons pack',
            'Themed into 3 different styles'
        ],
        featured: false,
        btnText: 'Try for 1 year'
    }
];

const PricingCards = () => {
    return (
        <section className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
            <style>{`
                .pricing-grid {
                    display: flex;
                    gap: 30px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 10px;
                }
                .pricing-card {
                    background: #fff;
                    border-radius: 20px;
                    padding: 35px 30px;
                    flex: 1;
                    min-width: 260px;
                    max-width: 340px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                    text-align: left;
                    animation: fadeInUp 0.5s ease forwards;
                    opacity: 0;
                }
                .pricing-card:nth-child(1) { animation-delay: 0.1s; }
                .pricing-card:nth-child(2) { animation-delay: 0.25s; }
                .pricing-card:nth-child(3) { animation-delay: 0.4s; }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .pricing-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 35px rgba(196,150,150,0.25);
                }
                .pricing-card.featured {
                    border: 2px solid #c49696;
                    transform: scale(1.03);
                }
                .pricing-card.featured:hover {
                    transform: scale(1.03) translateY(-8px);
                }
                .plan-badge {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #c49696;
                    color: #fff;
                    font-size: 0.7rem;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-weight: 600;
                }
                .plan-name {
                    font-size: 0.85rem;
                    color: #c49696;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                .plan-price {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.8rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 25px;
                }
                .plan-features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 30px 0;
                }
                .plan-features li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 0;
                    color: #555;
                    font-size: 0.9rem;
                }
                .feature-icon {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    flex-shrink: 0;
                }
                .feature-icon.green {
                    background: #e8f5e9;
                    color: #4caf50;
                }
                .feature-icon.orange {
                    background: #fff3e0;
                    color: #ff9800;
                }
                .pricing-btn {
                    display: block;
                    width: 100%;
                    padding: 14px;
                    border-radius: 30px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                .pricing-btn.outline {
                    background: transparent;
                    border: 2px solid #c49696;
                    color: #c49696;
                }
                .pricing-btn.outline:hover {
                    background: #c49696;
                    color: #fff;
                }
                .pricing-btn.filled {
                    background: #c49696;
                    border: 2px solid #c49696;
                    color: #fff;
                }
                .pricing-btn.filled:hover {
                    background: #b08585;
                    border-color: #b08585;
                    box-shadow: 0 6px 20px rgba(196,150,150,0.4);
                }
            `}</style>

            <div className="pricing-grid">
                {plans.map((plan, idx) => (
                    <div key={idx} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                        {plan.featured && <span className="plan-badge">🔥 HOT</span>}
                        <div className="plan-name">{plan.name}</div>
                        <div className="plan-price">{plan.price}</div>
                        <ul className="plan-features">
                            {plan.features.map((feat, i) => (
                                <li key={i}>
                                    <span className={`feature-icon ${idx === 1 ? 'orange' : 'green'}`}>✓</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`pricing-btn ${plan.featured ? 'filled' : 'outline'}`}
                            onClick={() => window.location.href = '/payment'}
                        >
                            {plan.btnText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingCards;
