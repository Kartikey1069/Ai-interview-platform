import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');
dotenv.config();

await connectDB();

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});