import React from 'react';

const FeaturesGrid = () => {
    return (
        <section className="container" style={{ margin: '80px auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', color: '#c49696', marginBottom: '10px' }}>
                All-in-One Learning Platform.
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 50px', color: '#666' }}>
                Your complete e-learning solution designed to simplify teaching, learning, and academic management — all in one seamless system.
            </p>

            <div className="flex" style={{ gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Feature 1 */}
                <div style={{
                    flex: '1', minWidth: '300px', maxWidth: '350px', padding: '40px 20px',
                    borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', background: '#fff'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📋</div>
                    <h3 style={{ fontFamily: 'serif', fontSize: '1.2rem', marginBottom: '15px', color: '#c49696' }}>
                        Course Management & <br /> Content Delivery
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                        Create, organize, and publish courses with ease. Upload videos, documents, and interactive content in a structured format that students can access anytime, anywhere.
                    </p>
                </div>

                {/* Feature 2 */}
                <div style={{
                    flex: '1', minWidth: '300px', maxWidth: '350px', padding: '40px 20px',
                    borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', background: '#fff'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📅</div>
                    <h3 style={{ fontFamily: 'serif', fontSize: '1.2rem', marginBottom: '15px', color: '#c49696' }}>
                        Smart Scheduling & <br /> Attendance Tracking
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                        Effortlessly manage timetables and automate attendance tracking. Keep students and faculty synchronized with real-time updates on classes.
                    </p>
                </div>

                {/* Feature 3 */}
                <div style={{
                    flex: '1', minWidth: '300px', maxWidth: '350px', padding: '40px 20px',
                    borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', background: '#fff'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
                    <h3 style={{ fontFamily: 'serif', fontSize: '1.2rem', marginBottom: '15px', color: '#c49696' }}>
                        Student Progress & <br /> Engagement Tracking
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                        Monitor student performance, grades, and learning progress in real-time. Provide feedback and personalized support to ensure every learner succeeds.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
