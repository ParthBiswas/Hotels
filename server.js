const express = require('express')
const app = express();
const db= require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome to Our Server')
})

const menuRouter = require('./routers/menuRouter');
app.use('/menu',menuRouter)


const personRouter = require('./routers/personRouter');
app.use('/person',personRouter)

app.listen(3000, () => {
  console.log('Listing on port 3000');
})