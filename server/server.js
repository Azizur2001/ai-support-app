const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5001;

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
        'Authorization': `Bearer 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`,
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





// 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