import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostHero from '../components/BlogPostHero';
import BlogPostContent from '../components/BlogPostContent';
import RelatedBlog from '../components/RelatedBlog';

const Blog = () => {
    return (
        <div style={{ background: '#fff', minHeight: '100vh' }}>
            <Navbar />
            <main>
                <BlogPostHero />
                <BlogPostContent />
                <RelatedBlog />
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
