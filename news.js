var articles = [{"title": "Testing!", "description": "Just making sure the news part works!", "file": "1"}]
var newsItems = document.getElementById("news-items")

articles.forEach(article => {
    newsItems.innerHTML += `
    <a href="https://estrange-gov.github.io/news/${article["file"]}">
    <div style="margin-left:15px;">
    <h1>${article["title"]}</h1>
    <p>${article["description"]}
    </div>
    </a>`
    
});

