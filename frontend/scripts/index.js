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
    newsDiv.innerHTML = "";
    data.details?.forEach((detail) => {
        const storyDiv = document.createElement("div");
        const storyText = document.createElement("p");
        storyText.textContent = detail;
        storyDiv.append(storyText);
        newsDiv.append(storyDiv);
    });
};

getNews();