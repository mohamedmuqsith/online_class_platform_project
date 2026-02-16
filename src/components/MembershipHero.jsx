import React from 'react';

const MembershipHero = () => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #d4a8a8 0%, #c49696 50%, #b88a8a 100%)',
            padding: '80px 20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative circles */}
            <div style={{
                position: 'absolute', top: '-60px', left: '-60px',
                width: '200px', height: '200px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)'
            }} />
            <div style={{
                position: 'absolute', bottom: '-80px', right: '-80px',
                width: '250px', height: '250px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)'
            }} />

            <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                color: '#7a3e3e',
                fontWeight: '700',
                fontStyle: 'italic',
                position: 'relative',
                zIndex: 1
            }}>
                Membership & pricing
            </h1>
        </section>
    );
};

export default MembershipHero;
