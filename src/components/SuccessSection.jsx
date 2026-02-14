import React from 'react';
import '../index.css';

const SuccessSection = () => {
    return (
        <section className="container" style={{ margin: '50px auto' }}>
            <div style={{
                backgroundColor: '#c4969699', // transparent dusty rose
                padding: '60px 40px',
                borderRadius: '30px',
                textAlign: 'center',
                color: '#fff',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(196, 150, 150, 0.3)'
            }}>
                <h2 style={{ fontFamily: 'serif', fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>Our Success</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Through strategic planning and creative execution, we transform challenges into opportunities.
                    We believe in building a future where technology and human insight work in perfect harmony.
                </p>
            </div>
        </section>
    );
};

export default SuccessSection;
