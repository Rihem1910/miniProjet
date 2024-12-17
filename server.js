const express = require('express');
const app = express();

// API Routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the static API!" });
});

// Start server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
