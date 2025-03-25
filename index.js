const express = require('express');
const axios = require('axios');  // <-- Add this
const app = express();
const port = process.env.PORT || 10000;

// Python API URL (Change this to your Render Python service URL)
const PYTHON_API_URL = "https://robloxsearchbot.onrender.com/search";

// Simple route
app.get('/', (req, res) => {
    res.send('AI Bot Server is Running!');
});

// Ask route
app.get('/ask', async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ error: "No query provided" });
    }

    try {
        // Send query to Python service
        const response = await axios.get(`${PYTHON_API_URL}?query=${encodeURIComponent(query)}`);
        res.json({ answer: response.data.answer });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from AI service" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
