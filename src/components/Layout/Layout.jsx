import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <Header /> {/* 고정된 상단바 */}
      
      <main className="main-content">
        <Outlet /> {/* 여기가 Menu, Settings 등으로 바뀌는 부분 */}
      </main>
    </div>
  );
}
export default Layout;