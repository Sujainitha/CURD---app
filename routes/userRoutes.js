const express = require('express');
const router = express.Router();
const User = require('../models/user');

// CREATE a new user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);  // Get data from request body
    await user.save();                // Save user to DB
    res.status(201).send(user);       // Respond with created user
  } catch (error) {
    res.status(400).send(error);      // Handle error
  }
});

// READ all users
router.get('/users', async (req, res) => {
  const users = await User.find();    // Fetch all users
  res.send(users);
});

// READ one user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // Get user by ID
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// UPDATE a user
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }   // Return the updated user
    );
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE a user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
