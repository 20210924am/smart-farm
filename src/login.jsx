// src/App.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiNaver } from "react-icons/si";
import './login.css'

function Login() {

const [id, setId] = useState('');
const [pw, setPw] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  console.log('ID:', id);
  console.log('PW:', pw);
if(id === 'jss229510' && pw === 'thwntjd123'){
  alert("로그인 성공");
  navigate('/menu');
}
else{
  alert("로그인 실패");
}
}

  return (
    <>
    
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
       <h1 style={{textAlign: 'center', margin:'0,0,20px,0'}}>Login</h1>
        <div className="input-group">
  <label>ID</label>
  <input 
    type='text' name='username' placeholder='아이디를 입력하세요' className='login-input'
    value ={id}
    onChange={(e) => setId(e.target.value)}
    />
</div>
          <div className="input-group">
  <label>Password</label>
  <input type='password' name='password'placeholder='비밀번호를 입력하세요' className='login-input'
  value ={pw}
  onChange={(e) => setPw(e.target.value)}
  />

</div>
        <button type="submit" className='login-btn'>
        로그인
        </button>

<div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center',  gap: '30px', marginTop: '30px', width: '100%' }}>  
  <RiKakaoTalkFill size={32} style={{ cursor: 'pointer' }} />
  <FaGoogle size={30} color='red' style={{ cursor: 'pointer' }} />
  <FaGithub size={30} style={{ cursor: 'pointer' }} />
  <SiNaver size={28} color='green' style={{ cursor: 'pointer' }} />
</div>
      </form>
    </div>
  </>
  )
}

export default Login