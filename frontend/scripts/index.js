const newsDiv = $("#news");
const newsInput = $("#news-input");
const newsForm = $("#news-form");

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
        const storyText = $("<li></li>").addClass("list-group-item").text(detail); 
        const storyDiv = $("<ul></ul>").addClass("list-group").append(storyText);
        newsDiv.append(storyDiv);
    });
};

getNews();

const addNews = async () => {
    try {
        const formData = new FormData();
        formData.append('details', newsInput.val());

        const response = await fetch("http://localhost/news-website/backend/add.php", {
            method: "POST",
            body: formData
        });

        const responseData = await response.text();
        console.log(responseData);
    } catch (error) {
        console.error(error);
        alert("Error occured while sending request");
    }
}

newsForm.on("submit", async (event) => {
    event.preventDefault();
    await addNews();
    await getNews();
});