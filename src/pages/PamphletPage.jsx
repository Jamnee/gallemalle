import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Calendar, Users, MapPin, DollarSign, Menu, Utensils, Camera, Coffee, Moon, Sun } from 'lucide-react';
import './PamphletPage.css';
import './PamphletTimeline.css';

const PamphletPage = () => {
    const navigate = useNavigate();

    const day1Schedule = [
        { id: 1, name: '밀양손만두', desc: '추운 날씨, 언 몸을 녹이는 따뜻한 만두전골과 칼국수의 깊은 국물 맛을 느껴보세요.', icon: Utensils },
        { id: 2, name: '경복궁 산책', desc: '겨울 고궁의 운치는 해가 떠 있을 때 가장 아름답습니다. 근정전과 경회루의 설경을 배경으로 인생 사진을 남겨보세요.', icon: Camera },
        { id: 3, name: '미완성식탁', desc: '안국동의 숨은 보석 같은 디저트 바에서 Signature: 참기름 마카롱 & 백호은침 차를 즐겨보세요', icon: Coffee },
        { id: 4, name: '락고재 서울 본관', desc: '130년 역사의 기품이 서린 프리미엄 한옥 스테이. 툇마루에 앉아 고즈넉한 한옥의 정취를 온전히 누려보세요.', icon: Moon },
    ];

    const day2Schedule = [
        { id: 5, name: '호호식당', desc: '익선동 한옥 거리 속, 아늑한 조명 아래서 즐기는 따뜻한 일본 가정식은 겨울 저녁 최고의 선택입니다.', icon: Utensils },
        { id: 6, name: '청계천 빛초롱', desc: '청계천을 수놓은 화려한 빛 조형물을 따라 걸으며 낭만적인 하루 마무리.', icon: Sun },
        { id: 7, name: '광장시장', desc: '서울의 맛을 느낄 수 있는 활기찬 시장 투어. 빈대떡과 육회는 필수 코스!', icon: Utensils },
        { id: 8, name: 'DDP 전시 관람', desc: '동대문 디자인 플라자에서 열리는 최신 예술 전시를 관람하며 영감을 채우세요.', icon: Camera },
    ];

    return (
        <div className="pamphlet-container">
            {/* Map Background */}
            <div className="map-background"></div>

            {/* Header */}
            <header className="pamphlet-header">
                <Menu className="menu-icon" size={28} />
                <div className="pamphlet-title">1박 2일 종로 여행</div>
                <Home className="home-icon" size={28} onClick={() => navigate('/home')} />
            </header>

            {/* Timeline Scroll Container */}
            <div className="timeline-scroll-container">
                {/* Day 1 Card */}
                <div className="day-card">
                    <div className="day-header">DAY 1</div>
                    {day1Schedule.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="timeline-item">
                                <div className="timeline-icon-wrapper">
                                    <Icon size={20} color="#FF8B29" />
                                </div>
                                <div className="timeline-content">
                                    <div className="place-name">{item.name}</div>
                                    <div className="place-desc">{item.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Day 2 Card */}
                <div className="day-card">
                    <div className="day-header">DAY 2</div>
                    {day2Schedule.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="timeline-item">
                                <div className="timeline-icon-wrapper">
                                    <Icon size={20} color="#056169" />
                                </div>
                                <div className="timeline-content">
                                    <div className="place-name">{item.name}</div>
                                    <div className="place-desc">{item.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Trip Info Sheet */}
            <div className="trip-info-sheet">
                <div className="info-row">
                    <div className="info-icon"><Calendar size={24} color="#5D4037" /></div>
                    <span className="info-text">25.12.06 ~ 25.12.07</span>
                </div>

                <div className="info-row">
                    <div className="info-icon"><Users size={24} color="#1976D2" /></div>
                    <span className="info-text">2명</span>
                </div>

                <div className="info-row">
                    <div className="info-icon"><MapPin size={24} color="#D32F2F" /></div>
                    <span className="info-text">대한민국, 서울 종로</span>
                </div>

                <div className="info-row">
                    <div className="info-icon"><DollarSign size={24} color="#FBC02D" /></div>
                    <span className="info-text">700,000 (인당 350,000)</span>
                </div>
            </div>
        </div>
    );
};

export default PamphletPage;
