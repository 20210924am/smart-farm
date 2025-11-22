// src/App.jsx
import { useState } from 'react'
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiNaver } from "react-icons/si";
import './login.css'

function App() {
  return (
    <>
    
    <div className="login-container">
      <form className="login-form">
       <h1 style={{textAlign: 'center', margin:'0,0,20px,0'}}>Login</h1>
        <div className="input-group">
  <label>ID</label>
  <input 
    type='text' name='username' placeholder='아이디를 입력하세요' className='login-input'/>
</div>
          <div className="input-group">
  <label>Password</label>
  <input type='password' name='password'placeholder='비밀번호를 입력하세요' className='login-input'/>
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

export default App