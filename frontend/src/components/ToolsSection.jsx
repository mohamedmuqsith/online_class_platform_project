import React from 'react';
import teacherImg from '../assets/Teacher.png';

const ToolsSection = () => {
    return (
        <section className="container" style={{ margin: '80px auto', padding: '60px 0', background: '#fcfcfc' }}>
            <div className="flex items-center" style={{ gap: '60px', flexWrap: 'wrap-reverse' }}>
                <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                        width: '300px', height: '300px', background: '#fff', borderRadius: '20px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={teacherImg}
                            alt="Teacher Illustration"
                            style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                </div>

                <div style={{ flex: 1.5, minWidth: '300px' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '2rem', fontFamily: 'serif', color: '#c49696', marginBottom: '15px' }}>
                            Tools For Teachers And Learners
                        </h3>
                        <p style={{ color: '#666', lineHeight: '1.8' }}>
                            All-in-one resource for sharing, assessment, and collaboration. Teachers can create assignments and track student progress, and get real-time feedback.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '2rem', fontFamily: 'serif', color: '#c49696', marginBottom: '15px' }}>
                            Assessments, Quizzes, Tests
                        </h3>
                        <p style={{ color: '#666', lineHeight: '1.8' }}>
                            Easily create and manage quizzes and tests. Student results are automatically recorded in the online gradebook.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
