const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Product Service!' });
});

app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
