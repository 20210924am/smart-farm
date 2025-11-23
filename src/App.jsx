import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Menu from './menu';   

function App() {
  return (
    <Routes>
      {}
      <Route path="/" element={<Login />} />
      
      {}
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;