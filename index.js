// index.js
const express = require('express')
const app = express()
const PORT = 4000


app.get('/home', (req, res) => {
  res.status(200).json('Class Activity 03 - Vercel App - Working Perfectly!');
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app