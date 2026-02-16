import React, { useState } from 'react';

const faqData = [
    {
        question: 'Lorem ipsum dolor sit amet',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
        question: 'Consectetur adipiscing elit, sed do',
        answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
        question: 'Eiusmod tempos Lorem Ipsum',
        answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        question: 'Lorem ipsum dolor sit amet',
        answer: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor lorem tempos Lorem ipsum dolor sitamet, consectetur adipiscing eiusmod tempos eiusmod tempslorem tempos Lorem ipsum dolor.'
    },
    {
        question: 'Lorem ipsum dolor sit amet',
        answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.'
    }
];

const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = useState(3); // 4th item open by default

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
        <section className="container" style={{ padding: '40px 20px 80px' }}>
            <style>{`
                .faq-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                    color: #333;
                    text-align: center;
                    margin-bottom: 40px;
                    font-style: italic;
                }
                .faq-list {
                    max-width: 800px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .faq-item {
                    border-left: 4px solid #c49696;
                    background: #fdf6f6;
                    border-radius: 0 12px 12px 0;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .faq-item:hover {
                    box-shadow: 0 4px 15px rgba(196,150,150,0.15);
                }
                .faq-question {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 18px 24px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: #444;
                    transition: color 0.2s ease;
                    user-select: none;
                }
                .faq-question:hover {
                    color: #c49696;
                }
                .faq-chevron {
                    font-size: 1.2rem;
                    color: #c49696;
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                    margin-left: 15px;
                }
                .faq-chevron.open {
                    transform: rotate(180deg);
                }
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease, padding 0.3s ease;
                    padding: 0 24px;
                    color: #666;
                    font-size: 0.9rem;
                    line-height: 1.7;
                }
                .faq-answer.open {
                    max-height: 300px;
                    padding: 0 24px 20px;
                }
                .faq-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #c49696;
                    flex-shrink: 0;
                    margin-right: 12px;
                }
            `}</style>

            <h2 className="faq-title">Online coaching lessons for remote learning</h2>

            <div className="faq-list">
                {faqData.map((item, idx) => (
                    <div key={idx} className="faq-item">
                        <div className="faq-question" onClick={() => toggle(idx)}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span className="faq-dot" />
                                {item.question}
                            </div>
                            <span className={`faq-chevron ${openIndex === idx ? 'open' : ''}`}>▼</span>
                        </div>
                        <div className={`faq-answer ${openIndex === idx ? 'open' : ''}`}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqAccordion;
