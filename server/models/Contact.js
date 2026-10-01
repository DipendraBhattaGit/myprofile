import mongoose from 'mongoose';
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
  email: { type: String, required: true, trim: true, lowercase: true, match: /^\S+@\S+\.\S+$/ },
  subject: { type: String, required: true, trim: true, minlength: 3, maxlength: 120 },
  message: { type: String, required: true, trim: true, minlength: 10, maxlength: 2000 },
}, { timestamps: true });
export default mongoose.model('Contact', contactSchema);
