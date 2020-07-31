const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const app = express();

app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  return res.send('Welcome to Gidara');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 5005;

app.listen(port, () => console.log(`app is running on port ${port}`));
