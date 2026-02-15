import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SuccessSection from '../components/SuccessSection';
import FeaturesGrid from '../components/FeaturesGrid';
import InfoSection from '../components/InfoSection';
import ToolsSection from '../components/ToolsSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SuccessSection />
            <FeaturesGrid />
            <InfoSection />
            <ToolsSection />
            <Footer />
        </div>
    );
};

export default Home;
