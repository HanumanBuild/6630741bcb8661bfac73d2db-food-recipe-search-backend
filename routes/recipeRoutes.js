const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.YOUR_API_KEY}`;
        const response = await axios.get(apiUrl);
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;