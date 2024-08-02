require('dotenv').config(); // Load environment variables from .env file
const jwt = require('jsonwebtoken');

// Function to generate a token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, {
    expiresIn: '24h'
  });
};

// Function to verify a token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
