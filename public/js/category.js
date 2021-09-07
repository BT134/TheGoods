const newCategoryHandler = async (event) => {
    event.preventDefault();
  
    const category = document.querySelector('#category').value.trim();

  
    if (category) {
      const response = await fetch(`/api/categories`, {
        method: 'POST',
        body: JSON.stringify({ category_name: category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create category');
      }
    }
  };
  

  
  document
    .addEventListener('submit', newCategoryHandler);