const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/ask', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post('https://tekoäly.api.url', {
      prompt: prompt
    }, {
      headers: {
        'Authorization': `Bearer SINUN_API_AVAIN`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Palvelin käynnissä portissa 3000');
});
