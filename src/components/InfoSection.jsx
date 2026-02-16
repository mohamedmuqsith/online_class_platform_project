import React from 'react';
import forInstructorsImg from '../assets/For_nstructors.png';
import forStudentsImg from '../assets/For_students.png';
import uiDesignImg from '../assets/user _interface _designed _for _the _classroom.png';

const InfoSection = () => {
    return (
        <section className="container" style={{ margin: '100px auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', color: '#555', marginBottom: '20px' }}>
                What is EDUFLEX?
            </h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 60px', color: '#666', lineHeight: '1.8' }}>
                EDUFLEX is a modern e-learning platform that empowers educators to deliver online education effectively.
                It offers seamless course management, interactive quizzes, and comprehensive tracking tools to create a dynamic and engaging learning environment.
            </p>

            <div className="flex" style={{ gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px', maxWidth: '500px', position: 'relative' }}>
                    <div style={{
                        width: '100%', height: '300px', borderRadius: '20px',
                        overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={forInstructorsImg}
                            alt="For Instructors"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <button className="btn-outline" onClick={() => window.location.href = '/courses'} style={{
                        position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                        background: '#fff', padding: '10px 30px', cursor: 'pointer'
                    }}>
                        For Instructors ➝
                    </button>
                </div>

                <div style={{ flex: 1, minWidth: '300px', maxWidth: '500px', position: 'relative' }}>
                    <div style={{
                        width: '100%', height: '300px', borderRadius: '20px',
                        overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={forStudentsImg}
                            alt="For Students"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <button className="btn-outline" onClick={() => window.location.href = '/search'} style={{
                        position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                        background: '#fff', padding: '10px 30px', borderColor: '#888', color: '#555', cursor: 'pointer'
                    }}>
                        For Students ➝
                    </button>
                </div>
            </div>

            <div style={{ marginTop: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', color: '#555', marginBottom: '20px' }}>
                    Our Features
                </h2>
                <p style={{ color: '#666' }}>
                    Discover a comprehensive suite of features making teaching and learning seamless and engaged.
                </p>

                {/* Feature Highlight 1: Classroom UI */}
                <div className="flex items-center" style={{ marginTop: '60px', textAlign: 'left', gap: '50px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ fontSize: '2rem', fontFamily: 'serif', color: '#555', marginBottom: '20px' }}>
                            A user interface designed for the classroom
                        </h3>
                        <ul style={{ color: '#666', lineHeight: '2' }}>
                            <li>• Teachers can easily organize courses and materials in one place.</li>
                            <li>• The intuitive design makes navigation simple for all users.</li>
                            <li>• Tools are optimized for both desktop and mobile classroom settings.</li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                        <img
                            src={uiDesignImg}
                            alt="Classroom User Interface"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
