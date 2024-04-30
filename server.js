require('dotenv').config();
const express = require('express');
const axios = require('axios');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;