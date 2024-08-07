import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
   const closeMenuOnMobile = () => {
     if (window.innerWidth <= 1150) {
       setShowMenu(false);
     }
   };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Assistly AI
        </NavLink>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            {user ? (
              <li className="nav__item">
                <button className="nav__link nav__cta" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav__item">
                <NavLink to="/signup" className="nav__link nav__cta">
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

