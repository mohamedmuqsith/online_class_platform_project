import React from 'react';
import blogMainImg from '../assets/blogmain.png';

const BlogPostHero = () => {
    return (
        <section style={{ width: '100%', height: '500px', overflow: 'hidden', position: 'relative' }}>
            <img
                src={blogMainImg}
                alt="Blog Post Hero"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </section>
    );
};

export default BlogPostHero;
