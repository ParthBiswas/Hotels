const express = require('express')
const app = express();
const db= require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT= process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send('Welcome to Our Server')
})

const menuRouter = require('./routers/menuRouter');
app.use('/menu',menuRouter)


const personRouter = require('./routers/personRouter');
app.use('/person',personRouter)



app.listen(PORT, () => {
  console.log('Listing on port 3001');
})