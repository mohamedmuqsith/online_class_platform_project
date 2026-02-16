import React from 'react';
import Navbar from '../components/Navbar';
import CourseHero from '../components/CourseHero';
import CourseCategories from '../components/CourseCategories';
import CourseRecommended from '../components/CourseRecommended';
import Footer from '../components/Footer';

const Courses = () => {
    return (
        <div>
            <Navbar />
            <CourseHero />
            <CourseCategories />
            <CourseRecommended />
            <Footer />
        </div>
    );
};

export default Courses;
