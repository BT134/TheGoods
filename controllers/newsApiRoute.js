const router = require('express').Router();
const axios = require('axios').default;


router.get('/discover', async (req, res) => {
  let url;
  if(req.params.title) {
    url = "https://newsapi.org/v2/everything?q=" + req.params.title + "&pageSize=5&apiKey=596d896758df478f8836a97d5d0931c9";
  } else {
    url = "https://newsapi.org/v2/everything?q=keyword&pageSize=5&apiKey=596d896758df478f8836a97d5d0931c9"
  }
  axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
    //res.send(response.data);
    res.render('discover', {
      articles: response.data.articles,
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});

module.exports = router;