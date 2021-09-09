//let categorySaveBtn = $('.save-cat-btn');

// categorySaveBtn.on("click", async function(event) {
//   event.preventDefault();

//   let title = event.target.getAttribute('data-name');
//   let imageUrl = document.querySelector('img src');
  

//   const categories = await fetch(`/categories`, {
//     method: 'GET',

//   })
//   console.log(categories);

  
//   let modalContainer = $("<div>");
//   let modalBackground = $("<div>");
//   let modalContent = $("<div>");
//   let categoryList = $("<button>");
//   let closeBtn = $("<button>");

//   modalContainer.addClass("modal");
//   modalContainer.toggleClass('is-active')
//   modalBackground.addClass("modal-background");

//   modalContent.addClass("modal-content");
//   categoryList.addClass("category");
//   categoryList.text(categories.category_name);
//   closeBtn.addClass("modal-close  is-large").attr("aria-label", "close");

//   modalContainer.append(modalBackground, modalContent, closeBtn);
//   modalContent.append(categoryList);


// });

const saveCatBtn = document.querySelector('#save-cat-btn');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

saveCatBtn.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});
