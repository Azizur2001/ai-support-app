// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Chat.css';

// // const Chat = () => {
// //   const [messages, setMessages] = useState([
// //     { text: "Hi! I'm the Headstarter AI support assistant. How can I help you?", user: false }
// //   ]);
// //   const [input, setInput] = useState('');

// //   const handleSendMessage = async () => {
// //     if (input.trim() === '') return;

// //     const userMessage = { text: input, user: true };
// //     setMessages([...messages, userMessage]);
// //     setInput('');

// //     try {
// //       const response = await axios.post('http://localhost:5001/api/chat', { message: input });
// //       const botMessage = { text: response.data.message, user: false };
// //       setMessages([...messages, userMessage, botMessage]);
// //     } catch (error) {
// //       const botMessage = { text: 'Error: Something went wrong', user: false };
// //       setMessages([...messages, userMessage, botMessage]);
// //     }
// //   };

// //   return (
// //     <div className="chat-container">
// //       {messages.map((msg, index) => (
// //         <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
// //           {msg.text}
// //         </div>
// //       ))}
// //       <div className="input-container">
// //         <input
// //           type="text"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
// //           placeholder="Type a message..."
// //         />
// //         <button onClick={handleSendMessage}>Send</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chat;




// import axios from 'axios';
// import config from '../config'; // Ensure config.js is inside the src directory

// export default async (req, res) => {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//     return;
//   }

//   const { message } = req.body;
//   console.log('Received message:', message);

//   try {
//     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: 'You are an AI-powered customer support assistant for HeadStartAI, a platform that provides AI-driven interviews for software engineering positions.' },
//         { role: 'user', content: message }
//       ],
//       max_tokens: 300,
//       n: 1,
//       stop: null,
//       temperature: 0.7,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${config.OPENAI_API_KEY}`, // Ensure the API key is correct
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log('OpenAI API response:', response.data);

//     const botMessage = response.data.choices[0].message.content.trim();
//     res.status(200).json({ message: botMessage });
//   } catch (error) {
//     console.error('Error fetching response:', error.response ? error.response.data : error.message);
//     res.status(500).json({ error: 'Error fetching response' });
//   }
// };

