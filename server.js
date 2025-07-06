const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/cruddb')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.log('❌ MongoDB connection error:', err));

// Clean and professional home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome - CRUD API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 40px;
            line-height: 1.8;
            color: #333;
          }
          h1 {
            color: #2c3e50;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
          }
          ul {
            padding-left: 20px;
          }
          li {
            margin-bottom: 10px;
          }
          .emoji {
            font-size: 20px;
            margin-right: 6px;
          }
        </style>
      </head>
      <body>
        <h1><span class="emoji">👋</span>Welcome to Sujanitha's Node.js CRUD API</h1>

        <p>This backend application is built using <strong>Express.js</strong> and <strong>MongoDB</strong>. It allows basic Create, Read, Update, and Delete operations on user data.</p>

        <h2>📌 API Endpoints:</h2>
        <ul>
          <li><span class="emoji">➕</span><strong>POST</strong> <code>/users</code> – Create a user</li>
          <li><span class="emoji">📥</span><strong>GET</strong> <code>/users</code> – Get all users</li>
          <li><span class="emoji">🔍</span><strong>GET</strong> <code>/users/:id</code> – Get user by ID</li>
          <li><span class="emoji">✏️</span><strong>PUT</strong> <code>/users/:id</code> – Update user</li>
          <li><span class="emoji">❌</span><strong>DELETE</strong> <code>/users/:id</code> – Delete user</li>
        </ul>

        <p>🧪 Test all endpoints using <strong>Postman</strong>.</p>

        <hr style="margin-top:40px;">
        <p style="font-size: 14px; color: #999;">&copy; 2025 | CRUD API by Sujanitha G.</p>
      </body>
    </html>
  `);
});

// Routes
app.use(userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
