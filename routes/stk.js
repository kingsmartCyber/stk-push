const PayHero = require('payhero-wrapper');

router.post('/push', async (req, res) => {
    const { amount, phone_number } = req.body;

    // Initialize PayHero with your API key
    const payHero = new PayHero('iidNW7keojWPGgTZDRmkpjE1NUVwtpZswg6izV7i');

    // Define the payment details as per PayHero's requirements
    const paymentDetails = {
        amount: amount,
        phone_number: phone_number,
        channel_id: 700, // Replace with the actual channel ID
        provider: 'm-pesa', // Assuming you're using M-Pesa
        external_reference: 'INV-001', // Replace with your reference
        callback_url: 'https://example.com/callback' // Replace with your callback URL
    };

    try {
        const response = await payHero.makeSTKPush(paymentDetails);
        res.json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
