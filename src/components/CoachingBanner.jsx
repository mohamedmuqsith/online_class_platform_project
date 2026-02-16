import React from 'react';

const CoachingBanner = () => {
    return (
        <section className="container" style={{ padding: '20px 20px 60px' }}>
            <div style={{
                background: 'linear-gradient(135deg, #c49696 0%, #a87878 100%)',
                borderRadius: '30px',
                padding: '60px 40px',
                textAlign: 'center',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(196,150,150,0.3)'
            }}>
                {/* Decorative blobs */}
                <div style={{
                    position: 'absolute', top: '-40px', left: '10%',
                    width: '150px', height: '150px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)'
                }} />
                <div style={{
                    position: 'absolute', bottom: '-50px', right: '15%',
                    width: '180px', height: '180px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)'
                }} />

                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2.2rem',
                    marginBottom: '20px',
                    color: '#fff',
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1
                }}>
                    Online coaching lessons for remote learning.
                </h2>

                <p style={{
                    maxWidth: '650px',
                    margin: '0 auto 30px',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    opacity: 0.92,
                    position: 'relative',
                    zIndex: 1
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                    eiusmod tempor
                </p>

                <button style={{
                    background: '#5c4040',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 35px',
                    borderRadius: '30px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 4px 15px rgba(92,64,64,0.3)'
                }}
                    onMouseEnter={e => {
                        e.target.style.background = '#4a3333';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(92,64,64,0.4)';
                    }}
                    onMouseLeave={e => {
                        e.target.style.background = '#5c4040';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(92,64,64,0.3)';
                    }}
                >
                    Start learning now
                </button>
            </div>
        </section>
    );
};

export default CoachingBanner;
