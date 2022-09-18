var articles = [{"title": "Testing!", "description": "Just making sure the news part works!", "file": "1"}]
var newsItems = document.getElementById("news-items")

articles.forEach(article => {
    const newsGet = async () => {
        const response = await fetch('https://estrange-gov.github.io/news/'+articles[file]);
        const responseText = await response.text
    }
    newsItems.innerHTML += responseText
});

