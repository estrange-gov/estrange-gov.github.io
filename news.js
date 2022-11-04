var articles = [{"title":"The Daily Estrange Email being so predictable is a major security risk.", "description": "A not to far fetched parody of The Daily Estrange Email. <small>By Isaiah Day</small>", "file": "3"},
{"title": "Grumbling among Populace over Owen's Campaign", "description": "Who will win this month's election? <small>By Isaiah Day</small>", "file": "2"}, 
{"title": "Testing!", "description": "Just making sure the news part works!", "file": "1"}]
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

