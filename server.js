const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the static API!" });
});


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
