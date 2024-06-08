const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/Menu');

router.post('/', async(req, res) => {
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
  
router.get('/', async (req,res) => {
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

module.exports = router;