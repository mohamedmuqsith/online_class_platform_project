import React from 'react';

const BlogPostContent = () => {
    return (
        <section className="container" style={{ padding: '60px 0', background: '#ebdcdc', borderRadius: '0 0 50px 50px', marginTop: '-30px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    {['Overview', 'Overview', 'Overview', 'Overview'].map((tag, i) => (
                        <span key={i} style={{
                            padding: '8px 25px', borderRadius: '10px',
                            background: i === 2 ? '#ebdcdc' : (i === 3 ? '#c49696' : '#d8c5c5'),
                            color: (i === 3 || i === 2) ? '#fff' : '#666',
                            fontWeight: 'bold', fontSize: '0.9rem'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 style={{ fontSize: '2.5rem', fontFamily: 'serif', color: '#333', marginBottom: '35px', lineHeight: '1.3' }}>
                    Why SwiftUI Should Be on the Radar of Every Mobile Developer.....
                </h1>

                <div style={{ color: '#000', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify', fontWeight: 'bold' }}>
                    <p style={{ marginBottom: '20px' }}>
                        In the rapidly evolving world of mobile app development, efficiency and user experience are everything. SwiftUI, Apple's declarative framework for building iOS, iPadOS, and macOS applications, has quickly become a game-changer. It allows developers to create fully functional, visually appealing apps with less code, faster development cycles, and seamless integration across Apple platforms. Its live preview feature and declarative syntax enable rapid prototyping and immediate feedback, which significantly reduces development time and improves productivity.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        For platforms like EduFlex, which allows educators to create online classes, manage course materials, assignments, quizzes, exams, track deadlines, grade results, and provide feedback all in one place, SwiftUI can be particularly beneficial. With SwiftUI, mobile developers can craft intuitive and responsive interfaces that make navigation effortless for both teachers and students. Its modern design approach ensures that EduFlex's mobile app remains consistent, scalable, and ready for future updates, giving users a smooth and engaging experience.
                    </p>
                    <p>
                        By embracing SwiftUI, mobile developers can not only streamline app development but also deliver high-quality, maintainable, and visually stunning educational applications like EduFlex
                    </p>
                </div>

                <div className="flex" style={{ justifyContent: 'center', gap: '10px', marginTop: '60px' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: i === 3 ? '#c49696' : '#999' }}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPostContent;
