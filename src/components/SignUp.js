import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import LoginPage, { Reset, Submit, Title, Footer, Username, Password } from '@react-login-page/page6';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/chat'); // Navigate to chat after successful sign up
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <LoginPage>
          <Title>Sign Up</Title>
          <Username value={email} onChange={(e) => setEmail(e.target.value)} />
          <Password value={password} onChange={(e) => setPassword(e.target.value)} />
          <Submit onClick={handleSignUp}>Sign Up</Submit>
          <Footer>
            Already a member? <Link to="/login">Login now</Link>
          </Footer>
        </LoginPage>
      </div>
    </div>
  );
};

export default SignUp;
