// scripts.js
async function getRandomJoke() {
    const response = await fetch('/api/chuck-norris-joke');
    const data = await response.json();
    document.getElementById('random-joke-result').textContent = data.joke;
  }
  
  async function addJoke() {
    const newJoke = document.getElementById('new-joke').value;
    const response = await fetch('/api/chuck-norris-joke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ joke: newJoke }),
    });
    const data = await response.json();
    document.getElementById('add-joke-result').textContent = data.message;
  }
  