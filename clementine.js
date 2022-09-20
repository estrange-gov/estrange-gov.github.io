function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  
  
  document.getElementById("number").innerHTML = Math.floor(Math.random() * (1999 - 100) + 10)
  
  async function start() {
    while (true) {
      await delay(Math.random() * (4000 - 1000 + 1000));
      document.getElementById("number").innerHTML = (parseInt(document.getElementById("number").innerHTML) + 1).toString()
    }
  }
  
  start()
  