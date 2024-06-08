const express = require('express')
const app = express();
const db= require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const MenuItem = require('./models/Menu');

app.get('/', function (req, res) {
  res.send('Welcome to Our Server')
})



app.post('/menu', async(req, res) => {
  try {
    const data = req.body
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log('Menu Saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

app.get('/menu', async (req,res) => {
  try {
    const menuItems = await MenuItem.find();
    console.log('menu items fetched');
    res.status(200).json(menuItems);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

const personRouter = require('./routers/personRouter');
app.use('/person',personRouter)

app.listen(3000, () => {
  console.log('Listing on port 3000');
})