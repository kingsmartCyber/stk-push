const express = require('express');
const router = express.Router();

router.post('/push', async (req, res) => {
    const { amount, phone_number } = req.body;

    // Implement your STK Push logic here using the PayHero wrapper

    res.json({ success: true, message: 'STK Push initiated.' });
});

module.exports = router;

