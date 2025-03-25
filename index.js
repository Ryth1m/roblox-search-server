const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("AI Bot Server is Running!");
});

// Route for AI chatbot
app.post("/ask", async (req, res) => {
    const { question } = req.body;
    
    try {
        const response = await axios.get(`http://127.0.0.1:5000/search?query=${encodeURIComponent(question)}`);
        res.json({ answer: response.data.answer });
    } catch (error) {
        res.status(500).json({ error: "Failed to get response" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
