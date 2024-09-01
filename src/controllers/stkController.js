import PayHero from 'payhero-wrapper';

const payHero = new PayHero(process.env.PAYHERO_API_KEY);

export const initiateStkPush = async (req, res) => {
    const { amount, phone_number } = req.body;

    const paymentDetails = {
        amount,
        phone_number,
        channel_id: 333, // Customize based on your setup
        provider: "m-pesa",
        external_reference: "INV-12345",
        callback_url: "https://example.com/callback", // Replace with your actual callback URL
    };

    try {
        const response = await payHero.makeStkPush(paymentDetails);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
