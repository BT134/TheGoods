

// A function to delete a post
async function deleteFormHandler(event) {
    event.preventDefault();

    // get the id for the category
    const id = document.querySelector({ id: category });

    // delete the post with an async function
    const response = await fetch(`/categories/${id}`, {
        method: 'DELETE'
      });
    // if the delete action is successful, redirect to the dashboard page, otherwise display the error
    if (response.ok) {
        document.location.replace('/');
        // otherwise, display the error
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('#delete-btn').addEventListener('click', deleteFormHandler);