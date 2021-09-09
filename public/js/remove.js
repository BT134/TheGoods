

// A function to delete a post
async function deleteFormHandler(event) {
    event.preventDefault();

    console.log(event)

    // get the id for the category
    const id = this.dataset.categoryid;
  
  console.log(id)
    // delete the post with an async function
    const response = await fetch(`/categories/${id}`, {
        method: 'DELETE'
      });
    // if the delete action is successful, redirect to the dashboard page, otherwise display the error
    if (response.ok) {
        document.location.replace('/');
        // otherwise, display the error
      } else {
        console.log(response)
        alert(response.statusText);
      }
  }
  
  document.getElementById('delete-btn').addEventListener('click', deleteFormHandler);