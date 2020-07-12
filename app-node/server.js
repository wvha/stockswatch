const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const PORT = process.env.port || 5000;

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello listening');
});

require('./routes/index.js')(app);
