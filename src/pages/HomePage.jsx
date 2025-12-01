import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Send, MessageCircle, Map, List, User } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="home-container">
            {/* Header */}
            <header className="home-header">
                <div className="brand-logo">갈래말래</div>
                <Menu className="menu-icon" size={28} />
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="plane-illustration"></div>
                <div className="hero-text">
                    <p>
                        <strong>여행 갈래말래?</strong>
                    </p>
                    <p>여행 계획을 위한 AI 도구,</p>
                    <p>지금 바로 사용해 보세요.</p>
                </div>
            </section>

            {/* Search / Input Section */}
            <div className="search-container">
                <textarea
                    className="search-input"
                    placeholder="어디로 떠나고 싶으신가요?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="send-icon-wrapper" onClick={() => navigate('/chat', { state: { initialMessage: inputValue } })}>
                    <Send size={24} />
                </div>
            </div>

            {/* Menu Grid */}
            <div className="menu-grid">
                <div className="menu-card" onClick={() => navigate('/chat-history')}>
                    <div className="menu-card-icon">
                        <MessageCircle size={32} />
                    </div>
                    <span className="menu-card-label">채팅 history</span>
                </div>

                <div className="menu-card" onClick={() => navigate('/history')}>
                    <div className="menu-card-icon">
                        <Map size={32} />
                    </div>
                    <span className="menu-card-label">팸플릿 history</span>
                </div>

                <div className="menu-card">
                    <div className="menu-card-icon">
                        <List size={32} />
                    </div>
                    <span className="menu-card-label">계획 history</span>
                </div>

                <div className="menu-card">
                    <div className="menu-card-icon">
                        <User size={32} />
                    </div>
                    <span className="menu-card-label">My page</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
