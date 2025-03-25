const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
    res.send('Roblox Search Server is running!');
});

// Search route
app.get('/search', (req, res) => {
    const query = req.query.query; // Get query parameter
    if (!query) {
        return res.status(400).json({ error: 'Missing query parameter' });
    }
    
    // Placeholder response (Replace this with actual search logic)
    res.json({ message: `Searching for: ${query}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
