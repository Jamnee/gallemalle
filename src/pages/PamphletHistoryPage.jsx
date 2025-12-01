import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './PamphletHistoryPage.css';

const PamphletHistoryPage = () => {
    const navigate = useNavigate();

    // Mock data for pamphlets based on the user's images
    const pamphlets = [
        { id: 1, title: '1박 2일 종로 여행', date: '25.12.06 ~ 25.12.07', color: '#E0F7FA' },
        { id: 2, title: '도쿄의 매력 속으로', date: '26.05.24 ~ 26.05.25', color: '#E8EAF6' },
        { id: 3, title: '서울의 숨겨진 보석', date: '26.05.24 ~ 26.05.25', color: '#F3E5F5' },
        { id: 4, title: '타이페이의 매력', date: '26.05.24 ~ 26.05.25', color: '#FFF3E0' },
        { id: 5, title: '부산 힐링 여행', date: '26.06.10 ~ 26.06.12', color: '#FFEBEE' },
        { id: 6, title: '제주도 푸른 밤', date: '26.07.01 ~ 26.07.04', color: '#E0F2F1' },
    ];

    return (
        <div className="history-container">
            {/* Header */}
            <header className="history-header">
                <Menu className="menu-icon" size={28} />
                <div className="brand-logo" onClick={() => navigate('/home')}>갈래말래</div>
            </header>

            {/* Page Title */}
            <h2 className="page-title">
                <span>팸플릿</span> history
            </h2>

            {/* Grid */}
            <div className="pamphlet-grid">
                {pamphlets.map((item) => (
                    <div
                        key={item.id}
                        className="pamphlet-card"
                        style={{ backgroundColor: item.color }}
                        onClick={() => navigate('/pamphlet')} // Navigate to the detail view
                    >
                        {/* Placeholder for actual image, using color block for now */}
                        <div className="pamphlet-overlay">
                            <div className="pamphlet-name">{item.title}</div>
                            <div className="pamphlet-date">{item.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PamphletHistoryPage;
