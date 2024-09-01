import express from 'express';
import dotenv from 'dotenv';
import stkRoutes from './routes/stkRoutes.js';

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Define routes
app.use('/stk', stkRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
