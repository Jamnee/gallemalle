import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Send, Sprout } from 'lucide-react';
import { mockChatData } from '../data/mockChatData';
import './ChatPage.css';

const ChatPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { chatId } = location.state || {};
    const initialMessage = location.state?.initialMessage || '서울 종로로 1박 2일';

    // Find chat data if chatId exists
    const chatData = chatId ? mockChatData.find(c => c.id === chatId) : null;
    const messages = chatData ? chatData.messages : [];

    // If no chat data (new chat), show default initial message
    const showDefault = !chatData;

    // Scroll to bottom on mount
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [chatId]); // Re-run when chatId changes

    return (
        <div className="chat-container">
            {/* Header */}
            <header className="chat-header">
                <div className="brand-logo" onClick={() => navigate('/home')}>갈래말래</div>
                <Menu className="menu-icon" size={28} />
            </header>

            {/* Chat Content */}
            <div className="chat-content" ref={contentRef}>
                {showDefault ? (
                    <>
                        {/* User Message */}
                        <div className="message-bubble message-user">
                            {initialMessage}
                        </div>

                        {/* AI Response */}
                        <div className="message-bubble message-ai">
                            <div className="ai-greeting">
                                안녕하세요! 갈래말래입니다. <Sprout size={18} className="leaf-icon" />
                            </div>
                            <div className="plan-summary">
                                <p>보내주신 상세 정보를 바탕으로 팸플릿에 바로 넣을 수 있도록 내용을 다듬었습니다.</p>
                                <p>특히, 팸플릿은 가독성이 생명이므로 긴 설명은 핵심만 남겨 매력적으로 요약했고, 동선과 영업시간(경복궁 겨울 마감 시간 등)을 고려해 순서를 조금 조정했습니다.</p>
                                <p>또한, [락고재] 숙소가 포함되면서 기존 예산(50만 원)을 초과하게 되므로, 예산 부분은 '변동 가능' 또는 실제 금액으로 업데이트하시는 것을 추천해 드립니다.</p>
                                <br />
                                <p><strong>3. Day 1 타임라인: 전통과 미식의 완벽한 조화</strong></p>
                                <p>시간일정상세 내용예상 비용 (2인)13:00안국역 집결 및 점심</p>
                                <p>[깡통만두] 또는 [밀양손만두]</p>
                            </div>
                        </div>
                    </>
                ) : (
                    messages.map((msg, index) => (
                        <div key={index} className={`message-bubble message-${msg.type}`}>
                            {msg.type === 'ai' ? (
                                <>
                                    <div className="ai-greeting">
                                        안녕하세요! 갈래말래입니다. <Sprout size={18} className="leaf-icon" />
                                    </div>
                                    <div className="plan-summary" style={{ whiteSpace: 'pre-wrap' }}>
                                        {msg.content.replace('안녕하세요! 갈래말래입니다. 🌱\n\n', '')}
                                    </div>
                                </>
                            ) : (
                                msg.content
                            )}
                        </div>
                    ))
                )}

                {/* Create Pamphlet Button */}
                <div className="create-pamphlet-container" onClick={() => navigate('/pamphlet')}>
                    <button className="create-pamphlet-btn">팸플릿 생성</button>
                </div>
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
                <div className="chat-input-box">
                    <span className="chat-input-placeholder">어디로 떠나고 싶으신가요?</span>
                    <Send size={20} className="chat-send-icon" />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
