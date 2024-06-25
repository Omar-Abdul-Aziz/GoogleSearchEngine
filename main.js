function searchGoogle() {
  const apiKey = 'AIzaSyC0djtFWnUcMQimKaht7BvAbdIIBmL8ogU'; // Replace with your API key
  const searchEngineId = '72f290cbed5504182'; // Replace with your search engine ID
  const query = document.getElementById('searchInput').value;
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${searchEngineId}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayResults(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function displayResults(data) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (data.items) {
    data.items.forEach(item => {
      const resultElement = document.createElement('div');
      resultElement.classList.add('result');
      resultElement.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>${item.snippet}</p>
        <p><a href="${item.link}" target="_blank">${item.link}</a></p>
      `;
      resultsContainer.appendChild(resultElement);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found.</p>';
  }
}
