// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware (optional)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Node.js + Express + pnpm!');
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});

