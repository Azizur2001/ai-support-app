// // src/components/Chat.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Chat.css';

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hi! I'm the Headstarter AI support assistant. How can I help you?", user: false }
//   ]);
//   const [input, setInput] = useState('');

//   const handleSendMessage = async () => {
//     if (input.trim() === '') return;

//     const userMessage = { text: input, user: true };
//     setMessages([...messages, userMessage]);
//     setInput('');

//     try {
//       const response = await axios.post('/api/chat', { message: input });
//     //   const response = await axios.post('http://localhost:5001/api/chat', { message: input });
//       const botMessage = { text: response.data.message, user: false };
//       setMessages([...messages, userMessage, botMessage]);
//     } catch (error) {
//       const botMessage = { text: 'Error: Something went wrong', user: false };
//       setMessages([...messages, userMessage, botMessage]);
//     }
//   };

//   return (
//     <div className="chat-container">
//       {messages.map((msg, index) => (
//         <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
//           {msg.text}
//         </div>
//       ))}
//       <div className="input-container">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//           placeholder="Type a message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

// src/components/Chat.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the Headstarter AI support assistant. How can I help you?", user: false }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, user: true };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('/api/chat', { message: input });
      const botMessage = { text: response.data.message, user: false };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      const botMessage = { text: 'Error: Something went wrong', user: false };
      setMessages([...messages, userMessage, botMessage]);
    }
  };

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
          {msg.text}
        </div>
      ))}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
