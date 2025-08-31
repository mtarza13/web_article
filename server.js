const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Articles route
app.get('/articles', (req, res) => {
  res.sendFile(path.join(__dirname, 'articles.html'));
});

// Article route
app.get('/article', (req, res) => {
  res.sendFile(path.join(__dirname, 'article.html'));
});

// Web Article route
app.get('/web_article', (req, res) => {
  res.sendFile(path.join(__dirname, 'article.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
