const express = require('express')
const app = express();
const db= require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT= process.env.PORT || 3001;

const menuRouter = require('./routers/menuRouter');
const personRouter = require('./routers/personRouter');

// Middleware function
const logRequest = (req, res, next) =>{
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.orignalUrl}`);
  next(); 
}
app.use(logRequest);

app.use(passport.initialize());
const passAuth = passport.authenticate('local', {session: false});

app.get('/',passAuth,function (req, res) {
  res.send('Welcome to Our Server')
})

app.use('/menu',menuRouter)
app.use('/person',passAuth,personRouter)

app.listen(PORT, () => {
  console.log('Listing on port 3001');
})