import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Send, MessageCircle, Map, List, User } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [bgImage, setBgImage] = useState('');

    // Curated high-quality travel images from Unsplash
    const backgroundImages = [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop', // Swiss Alps
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', // Beach
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop', // Mountain Lake
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop', // Beach Sunset
        'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop', // Forest
        'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop', // Venice
        'https://images.unsplash.com/photo-1533929736472-11199a9d55ae?q=80&w=2071&auto=format&fit=crop', // Santorini
        'https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2073&auto=format&fit=crop', // Tuscany
    ];

    useEffect(() => {
        const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
        setBgImage(randomImage);
    }, []);

    return (
        <div className="home-container">
            {/* Header */}
            <header className="home-header">
                <div className="brand-logo">갈래말래</div>
                <Menu className="menu-icon" size={28} />
            </header>

            {/* Hero Section */}
            <section
                className="hero-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage})`
                }}
            >
                {/* Removed .plane-illustration as we are using real photos now */}
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
