import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { mockChatData } from '../data/mockChatData';
import './ChatHistoryPage.css';

const ChatHistoryPage = () => {
    const navigate = useNavigate();

    // Use mock data
    const chatHistory = mockChatData;

    return (
        <div className="chat-history-container">
            {/* Header */}
            <header className="chat-history-header">
                <Menu className="menu-icon" size={28} />
                <div className="brand-logo" onClick={() => navigate('/home')}>갈래말래</div>
            </header>

            {/* Page Title */}
            <h2 className="chat-history-title">
                <span>채팅</span> history
            </h2>

            {/* Chat List */}
            <div className="chat-list">
                {chatHistory.map((item) => (
                    <div key={item.id} className="chat-item" onClick={() => navigate('/chat', { state: { chatId: item.id } })}>
                        <div className="chat-item-title">{item.title}</div>
                        <div className="chat-item-date">{item.date}</div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation />
        </div>
    );
};

export default ChatHistoryPage;
