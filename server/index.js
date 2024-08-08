// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const config = require('../config'); // Adjust the path if necessary

// const app = express();
// const PORT = 5001;

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/api/chat', async (req, res) => {
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
//         'Authorization': `Bearer ${config.OPENAI_API_KEY}`, // Use API key from config.js
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log('OpenAI API response:', response.data);

//     const botMessage = response.data.choices[0].message.content.trim();
//     res.json({ message: botMessage });
//   } catch (error) {
//     console.error('Error fetching response:', error.response ? error.response.data : error.message);
//     res.status(500).json({ error: 'Error fetching response' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config'); // Adjust the path if necessary

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  console.log('Received message:', message);

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are an AI-powered customer support assistant for HeadStartAI, a platform that provides AI-driven interviews for software engineering positions.' },
        { role: 'user', content: message }
      ],
      max_tokens: 300,
      n: 1,
      stop: null,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${config.OPENAI_API_KEY}`, // Use API key from config.js
        'Content-Type': 'application/json',
      },
    });

    console.log('OpenAI API response:', response.data);

    const botMessage = response.data.choices[0].message.content.trim();
    res.json({ message: botMessage });
  } catch (error) {
    console.error('Error fetching response:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error fetching response' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
