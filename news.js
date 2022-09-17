const fs = require('fs')

const dir = '/news'
const files = fs.readdirSync(dir)

for (const file of files) {
  document.getElementById("news-section").innerHTML += file;
}
