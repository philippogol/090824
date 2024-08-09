async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok`);
      }
      const data = await response.json();
      console.log(data);   
  
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);   
  
    }
  }
  
  fetchPosts();