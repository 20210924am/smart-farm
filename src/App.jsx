import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';   
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;