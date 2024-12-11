const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the User Service!' });
});

app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
