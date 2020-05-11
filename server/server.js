const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.listen(port, () => console.log(`Url Shortener Server listening at http://localhost:${port}`));
