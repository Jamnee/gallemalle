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
        <div
            className="home-container"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`
            }}
        >
            {/* Header */}
            <header className="home-header">
                <div className="brand-logo">갈래말래</div>
                <Menu className="menu-icon" size={28} />
            </header>

            {/* Main Content (Centered) */}
            <main className="home-main">
                <div className="hero-text-center">
                    <h1>어디로 떠나고 싶으신가요?</h1>
                    <p>AI와 함께 나만의 특별한 여행을 계획해보세요.</p>
                </div>

                {/* Search / Input Section */}
                <div className="search-container-floating">
                    <input
                        type="text"
                        className="search-input-floating"
                        placeholder="예: 제주도 3박 4일 힐링 여행"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && navigate('/chat', { state: { initialMessage: inputValue } })}
                    />
                    <div className="send-icon-floating" onClick={() => navigate('/chat', { state: { initialMessage: inputValue } })}>
                        <Send size={20} />
                    </div>
                </div>
            </main>

            {/* Bottom Menu (Simplified) */}
            <div className="menu-bar-bottom">
                <div className="menu-item" onClick={() => navigate('/chat-history')}>
                    <MessageCircle size={24} />
                    <span>채팅</span>
                </div>
                <div className="menu-item" onClick={() => navigate('/history')}>
                    <Map size={24} />
                    <span>팸플릿</span>
                </div>
                <div className="menu-item">
                    <List size={24} />
                    <span>계획</span>
                </div>
                <div className="menu-item">
                    <User size={24} />
                    <span>MY</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
