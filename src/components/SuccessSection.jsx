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

            {/* Stats Counter */}
            <div className="flex justify-between items-center" style={{ margin: '60px 0', textAlign: 'center', flexWrap: 'wrap', gap: '30px' }}>
                <div style={{ flex: 1, minWidth: '150px' }}>
                    <h3 style={{ fontSize: '3rem', color: '#c49696', fontFamily: 'serif', marginBottom: '5px' }}>15 K</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Students</p>
                </div>
                <div style={{ flex: 1, minWidth: '150px' }}>
                    <h3 style={{ fontSize: '3rem', color: '#c49696', fontFamily: 'serif', marginBottom: '5px' }}>80%</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Total Success</p>
                </div>
                <div style={{ flex: 1, minWidth: '150px' }}>
                    <h3 style={{ fontSize: '3rem', color: '#c49696', fontFamily: 'serif', marginBottom: '5px' }}>26</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Chief Experts</p>
                </div>
                <div style={{ flex: 1, minWidth: '150px' }}>
                    <h3 style={{ fontSize: '3rem', color: '#c49696', fontFamily: 'serif', marginBottom: '5px' }}>13</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Years Of Experience</p>
                </div>
            </div>
        </section>
    );
};

export default SuccessSection;
