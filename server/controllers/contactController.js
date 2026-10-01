import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { sendEnquiry, sendAutoReply } from '../utils/mailer.js';

export async function createContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body || {};
    const doc = new Contact({ name, email, subject, message });
    await doc.validate();                       // 400 via errorHandler if invalid
    await sendEnquiry(doc);                     // required: failure -> generic 500
    if (mongoose.connection.readyState === 1) await doc.save().catch((e) => console.error('DB save failed:', e.name));
    sendAutoReply(doc).catch((e) => console.error('Auto-reply failed:', e.code || e.name));
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (err) { next(err); }
}
