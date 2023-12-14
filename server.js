// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample Chuck Norris Jokes
const chuckNorrisJokes = [
  'Chuck Norris counted to infinity. Twice.',
  'Chuck Norris can divide by zero.',
  // Add more jokes here
];

// GET request to fetch a random Chuck Norris Joke
app.get('/api/chuck-norris-joke', (req, res) => {
  const randomJoke = chuckNorrisJokes[Math.floor(Math.random() * chuckNorrisJokes.length)];
  res.json({ joke: randomJoke });
});

// POST request to add a new Chuck Norris Joke
app.post('/api/chuck-norris-joke', (req, res) => {
  const newJoke = req.body.joke;
  chuckNorrisJokes.push(newJoke);
  res.json({ message: 'Joke added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
