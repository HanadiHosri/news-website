const news = [];

fetch("http://localhost/news-website/backend/read.php", {
    method: "GET",
    headers: {"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"}
    })
    .then(response => response.json())
    .then(data => {
        news.push(data.message.details)
    })
    .catch(error => {console.log(error)})

console.log(news);
