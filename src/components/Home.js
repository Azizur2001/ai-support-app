import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const text = "Assistly AI";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 200); // Adjust the speed of the animation by changing the interval time
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <h1 className="animated-text">{displayText}</h1>
      <h2 className="subtext">The best AI Chatter</h2>
    </div>
  );
};

export default Home;
