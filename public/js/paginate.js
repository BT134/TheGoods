function paginated_fetch(
    url = is_required('https://newsapi.org/v2/everything?qInTitle=&pageSize=8&apiKey=',
    page = 1,
    previousResponse = []
  ) {
    return fetch(`${url}&page=${page}`) // Append the page number to the base URL
      .then(response => response.json())
      .then(newResponse => {
        const response = [...previousResponse, ...newResponse]; // Combine the two arrays
  
        if (newResponse.length !== 0) {
          page++;
  
          return paginated_fetch(url, page, response);
        }
  
        return response;
      });
