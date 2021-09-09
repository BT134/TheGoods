let categoriesContainer = $("#user-categories");

function createDropdownCategories () {
  let userCategories = $("<button>");

  userCategories.addClass("dropdown-item");




}

let categoryBtn = $('.category-btn');

categoryBtn.on("click", async function (event){
  event.preventDefault();

  const categories = await fetch(`/categories`, {
    method: 'GET',

  })
  console.log(categories);

  
})
