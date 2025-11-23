import React from 'react';
import './menu.css';

function Menu() {
  return (
    <div className="menu-container">
      <h1>🌿 메인 메뉴</h1>
      <div className="menu-grid">
        <button className="menu-card">📊 실시간 모니터링</button>
        <button className="menu-card">🎮 원격 제어</button>
        <button className="menu-card">📈 데이터 통계</button>
        <button className="menu-card">⚙️ 환경 설정</button>
      </div>
    </div>
  );
}

export default Menu;