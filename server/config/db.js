import mongoose from 'mongoose';
// MongoDB is optional (enquiry history). The app still works without it.
export default async function connectDB() {
  if (!process.env.MONGODB_URI) return console.log('MONGODB_URI not set: skipping DB, emails only');
  try { await mongoose.connect(process.env.MONGODB_URI); console.log('MongoDB connected'); }
  catch { console.error('MongoDB connection failed: continuing without storage'); }
}
