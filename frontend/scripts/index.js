const news = [];

fetch("http://localhost/news-website/backend/read.php", {
    method: "GET",
     headers: {
        "Access-Control-Allow-Origin": "*"
     }
    })
    .then(response => response.json())
    .then(data => {
        news.push(data.message.details)
    })
    .catch(error => {console.error(error);});

console.log(news);
