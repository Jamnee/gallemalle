import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Map, Home, List, User } from 'lucide-react';
import './BottomNavigation.css';

const BottomNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'chat-history', icon: MessageCircle, path: '/chat-history' },
        { id: 'pamphlet-history', icon: Map, path: '/history' },
        { id: 'home', icon: Home, path: '/home' },
        { id: 'plan-history', icon: List, path: '/plan-history' }, // Placeholder
        { id: 'mypage', icon: User, path: '/mypage' }, // Placeholder
    ];

    return (
        <div className="bottom-nav">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                    <div
                        key={item.id}
                        className={`nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <Icon size={28} strokeWidth={isActive ? 2.5 : 2} className="nav-icon" />
                    </div>
                );
            })}
        </div>
    );
};

export default BottomNavigation;
