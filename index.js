const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
    res.send('Roblox Search Server is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
