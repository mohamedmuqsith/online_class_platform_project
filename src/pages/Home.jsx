import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SuccessSection from '../components/SuccessSection';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SuccessSection />

            {/* Footer Placeholder if needed, or just some space */}
            <div style={{ height: '50px' }}></div>
        </div>
    );
};

export default Home;
