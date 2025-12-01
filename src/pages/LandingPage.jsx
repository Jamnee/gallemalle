import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // For demo purposes, navigate to Home
        navigate('/home');
    };

    return (
        <div className="landing-container">
            {/* Close Button */}
            <button className="close-button">×</button>

            {/* Logo & Headline */}
            <div className="landing-content">
                <div className="brand-logo" style={{ fontSize: '3rem', marginBottom: '40px' }}>갈래말래</div>
                <h1 className="headline">
                    여행을 떠나봐요<br />
                    <span>지금 바로!</span>
                </h1>
            </div>

            {/* Bottom Sheet */}
            <div className="bottom-sheet">
                <button className="btn btn-google" onClick={handleLogin}>
                    <span className="google-icon">G</span> Google로 계속하기
                </button>
                <button className="btn btn-signup" onClick={handleLogin}>
                    회원가입
                </button>
                <button className="btn btn-login" onClick={handleLogin}>
                    로그인
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
