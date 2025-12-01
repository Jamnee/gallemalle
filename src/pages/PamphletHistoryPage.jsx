import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './PamphletHistoryPage.css';

const PamphletHistoryPage = () => {
    const navigate = useNavigate();

    // Mock data for pamphlets based on the user's images
    const pamphlets = [
        {
            id: 1,
            title: '1박 2일 종로 여행',
            date: '25.12.06 ~ 25.12.07',
            image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1974&auto=format&fit=crop' // Bukchon Hanok Village
        },
        {
            id: 2,
            title: '도쿄의 매력 속으로',
            date: '26.05.24 ~ 26.05.25',
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop' // Tokyo Tower
        },
        {
            id: 3,
            title: '서울의 숨겨진 보석',
            date: '26.05.24 ~ 26.05.25',
            image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070&auto=format&fit=crop' // Seoul City
        },
        {
            id: 4,
            title: '타이페이의 매력',
            date: '26.05.24 ~ 26.05.25',
            image: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?q=80&w=2074&auto=format&fit=crop' // Taipei
        },
        {
            id: 5,
            title: '부산 힐링 여행',
            date: '26.06.10 ~ 26.06.12',
            image: 'https://images.unsplash.com/photo-1634282266842-839556272559?q=80&w=1974&auto=format&fit=crop' // Busan
        },
        {
            id: 6,
            title: '제주도 푸른 밤',
            date: '26.07.01 ~ 26.07.04',
            image: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=2070&auto=format&fit=crop' // Jeju
        },
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
                        style={{ backgroundImage: `url(${item.image})` }}
                        onClick={() => navigate('/pamphlet')} // Navigate to the detail view
                    >
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
