import express from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = express.Router();

const MONGODB_URI = process.env.MONGODB_URI;

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    if (MONGODB_URI) {
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(MONGODB_URI);
      }
      const contact = new Contact({ name, email, subject: subject || '', message });
      await contact.save();
    }

    res.status(201).json({ success: true, message: 'Thank you! Your message has been sent.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

export default router;
