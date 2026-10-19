const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// In-memory fallback if MongoDB connection is pending during local offline testing
const memoryStore = [];

// @route   POST /api/contact
// @desc    Submit a new contact message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, and message.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    let savedContact;
    // Check if Mongoose is connected to MongoDB
    const isDbConnected = require('mongoose').connection.readyState === 1;

    if (isDbConnected) {
      const newContact = new Contact({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim()
      });
      savedContact = await newContact.save();
    } else {
      // Fallback for development/offline test if MongoDB isn't running yet
      savedContact = {
        _id: 'mem_' + Date.now(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        createdAt: new Date(),
        _fallback: true
      };
      memoryStore.push(savedContact);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received.',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt
      }
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while sending message. Please try again later.',
      error: error.message
    });
  }
});

// @route   GET /api/contact
// @desc    Get all messages (useful for evaluation/demonstration)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const isDbConnected = require('mongoose').connection.readyState === 1;
    if (isDbConnected) {
      const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
      return res.json({ success: true, count: contacts.length, data: contacts });
    } else {
      return res.json({
        success: true,
        count: memoryStore.length,
        data: memoryStore.slice().reverse(),
        note: 'MongoDB offline; showing memory session messages.'
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
