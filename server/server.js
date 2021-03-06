const express = require('express');
const app = express();
const port = 4008;
const cors = require('cors');

app.use(cors());
app.use('/', express.static(__dirname + '/../public'));
app.use('/:id', express.static(__dirname + '/../public'));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

const server = app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});