import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import PamphletPage from './pages/PamphletPage';
import PamphletHistoryPage from './pages/PamphletHistoryPage';
import ChatHistoryPage from './pages/ChatHistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/pamphlet" element={<PamphletPage />} />
        <Route path="/history" element={<PamphletHistoryPage />} />
        <Route path="/chat-history" element={<ChatHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
