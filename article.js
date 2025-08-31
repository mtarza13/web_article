// Function to get URL parameters
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to display the article
function displayArticle() {
    // Get the article ID from the URL
    const articleId = parseInt(getUrlParam('id'));
    
    // Find the selected article
    const article = articlesData.find(a => a.id === articleId);
    
    if (article) {
        // Update the page with article details
        document.title = `${article.name} - Article`;
        document.getElementById('article-name').textContent = article.name;
        document.getElementById('article-image').src = article.image;
        document.getElementById('article-image').alt = article.name;
        
        // Create and add description
        const descriptionElement = document.getElementById('article-description');
        descriptionElement.innerHTML = `<p>${article.description}</p>`;
    } else {
        // Handle case when article is not found
        document.getElementById('article-container').innerHTML = 
            '<div class="error-message">المقال غير موجود!</div>';
    }
}

// Initialize the article page
displayArticle();
