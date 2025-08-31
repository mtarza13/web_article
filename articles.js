const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the articles page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'articles.html'));
});

// Function to display articles on the articles page
function displayArticles() {
    const container = document.getElementById('articles-container');
    
    articlesData.forEach(article => {
        const preview = document.createElement('div');
        preview.className = 'article-preview';
        preview.innerHTML = `
            <img src="${article.image}" alt="${article.name}">
            <h2>${article.name}</h2>
            <p>${article.description.substring(0, 100)}...</p>
            <a href="article.html?id=${article.id}" class="read-more">قراءة المزيد</a>
        `;
        
        container.appendChild(preview);
    });
}

// Initialize the articles page
displayArticles();

module.exports = router;
