import React from 'react';
import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import HomeCategories from '../components/HomeCategories';
import HomeFeatured from '../components/HomeFeatured';
import HomeMarketing from '../components/HomeMarketing';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeHero />
            <HomeCategories />
            <HomeFeatured />
            <HomeMarketing />
            <Footer />
        </div>
    );
};

export default Home;
