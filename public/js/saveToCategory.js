let categorySaveBtn = $('.save-cat-btn');

categorySaveBtn.on("click", async function(event) {
  event.preventDefault();

  let title = event.target.getAttribute('data-name');
  let imageUrl = document.querySelector('img src');
  

  const categories = await fetch(`/categories`, {
    method: 'GET',

  })
  console.log(categories);



    
  


});




