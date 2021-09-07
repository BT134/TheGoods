const APIKey = '596d896758df478f8836a97d5d0931c9';

const searchInputValue = $('#news-search');
const newsSearchBtn = $('#news-search-btn');

const newsGrid = $('#news-grid');

//search function to init fetch request from news API
newsSearchBtn.on('submit', function(event){
  event.preventDefault();

  var newsSearchInput = searchInputValue.val().trim();

  if (!newsSearchInput) {
    window.alert("w");
    return;
  } else {
    window.alert("wrong");
    window.location.href("/news/discover?title=" + newsSearchInput);
  }
});

// Fetch request for NEWS API
// function searchNewsAPI (newsSearchInput) {

//   let queryURL = 'https://newsapi.org/v2/everything?qInTitle=' + newsSearchInput + '&pageSize=5&apiKey=' + APIKey;

//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (newsData){
//       console.log(newsData);

//       for (let i = 0; i < newsData.length; i++) {
//         let articleCard = $("<div>");
//         let articleCardBody = $("<div>")
      
//         let cardImage = $("<img>");
//         let cardTitle = $("<h5>");
//         let cardText = $("<p>");
//         let articleLink = $("<a>");
//         let articleSaveBtn = $("<button>");

//         articleCard.addClass("card shadow-sm p-3 mb-5 bg-body rounded");
//         articleCard.css("width", "18rem");

//         articleCardBody.addClass("card-body");

//         cardImage.addClass("card-img-top").attr("src", newsData.articles[i].urlToImage);

//         cardTitle.addClass("card-title")
//         cardTitle.text(newsData.articles[i].title);

//         cardText.addClass("card-text");
//         cardText.text(newsData.articles[i].description);
        
//         articleLink.attr("href", newsData.articles[i].url).attr("target", "_blank");

//         articleSaveBtn.addClass("btn float-left").attr("type", "button").attr("src", "./assets/images/icons8-save-24.png");

//         newsGrid.append(articleCard);
//         articleCard.append(cardImage);
//         articleCardBody.append(cardTitle, cardText);
//         articleCard.append(articleCardBody);
        
//         articleCard.append(articleLink);
//         articleCard.append(articleSaveBtn);
        
//       }
      
//     })
//     .catch(function (error) {
//       alert('Unable to connect');
//     });
// };