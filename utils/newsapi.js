const APIKey = '596d896758df478f8836a97d5d0931c9';

const searchInputValue = $('#news-search');
const newsSearchBtn = $('#news-search-btn');

//search function to init fetch request from news API
newsSearchBtn.on('submit', function(event){
  event.preventDefault();

  var newsSearchInput = searchInputValue.val().trim();

  if (!newsSearchInput) {
    return;
  } else {
    searchNewsAPI(newsSearchInput);
  }
});

// Fetch request for NEWS API
function searchNewsAPI (newsSearchInput) {

  let queryURL = 'https://newsapi.org/v2/everything?qInTitle=' + newsSearchInput + '&apiKey=' + APIKey;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      console.log(data);
    })
    .catch(function (error) {
      alert('Unable to connect');
    });
};