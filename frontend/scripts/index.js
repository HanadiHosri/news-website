const newsDiv = $("#news");

const getNews = () => {
    fetch("http://localhost/news-website/backend/read.php", {
    method: "GET"})
    .then(response => response.json())
    .then(data => {
        displayNews(data);
    })
    .catch(error => {
        console.log(error);
    });
};


const displayNews = (data) => {
    newsDiv.empty();
    data.details?.forEach((detail) => {
        const storyText = $("<li></li>").text(detail); 
        const storyDiv = $("<ul></ul>").append(storyText);
        newsDiv.append(storyDiv);
    });
};

getNews();