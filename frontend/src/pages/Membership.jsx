import React from 'react';
import Navbar from '../components/Navbar';
import MembershipHero from '../components/MembershipHero';
import PricingCards from '../components/PricingCards';
import CoachingBanner from '../components/CoachingBanner';
import FaqAccordion from '../components/FaqAccordion';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Footer from '../components/Footer';

const Membership = () => {
    return (
        <div>
            <Navbar />
            <MembershipHero />
            <PricingCards />
            <CoachingBanner />
            <FaqAccordion />
            <TestimonialsCarousel />
            <Footer />
        </div>
    );
};

export default Membership;
