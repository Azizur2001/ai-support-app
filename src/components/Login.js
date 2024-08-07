import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import LoginPage, { Reset, Submit, Title, Footer, Username, Password } from '@react-login-page/page6';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/chat'); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <LoginPage>
          <Title>Login</Title>
          <Username value={email} onChange={(e) => setEmail(e.target.value)} />
          <Password value={password} onChange={(e) => setPassword(e.target.value)} />
          <Submit onClick={handleLogin}>Login</Submit>
          <Footer>
            Not a member? <Link to="/signup">Sign up now</Link>
          </Footer>
        </LoginPage>
      </div>
    </div>
  );
};

export default Login;
