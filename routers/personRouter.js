const express = require('express');
const router = express.Router();

const person = require('../models/person');


// Post Request to add a person
router.post('/', async (req,res) =>{
  try{
      const data = req.body  // Assuming the request body contain the person data
    
      // create a new person document using the Mongoose model
      const newPerson = new person(data);
    
      //Save the new Person to the database
      const response = await newPerson.save();
      console.log('data saved successfully');
      res.status(200).json(response);
      
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Serve Error'});
  }
  
})
  
router.get('/', async (req, res) => {
    try { 
      const persons = await person.find();
      console.log('data fetched');
      res.status(200).json(persons);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
})


router.get('/:worktype', async(req, res) => {
  try{
    const worktype =req.params.worktype;
    if(worktype == 'chef' || worktype == 'manager' || worktype =='waiter'){
      const response = await person.find({work: worktype})
      console.log('response fetch');
      res.status(200).json(response);
    }
    else{
      res.status(404).json({error: 'Invalid work type'});
    }
  }
  catch(err){
    console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})

router.put('/:find',async (req, res) => {
  try{
    const personId = req.params.find;
    const updatePersonData = req.body;

    const response = await person.findByIdAndUpdate(personId, updatePersonData, {
      new: true,
      runValidators: true,
    })
    if (!response) {
      return res.status(404).json({error: 'Person not found'});
    }

    console.log('data update');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
})

router.delete('/:id', async(req, res) =>{
  try {
    const personId = req.params.id;

    const response =await person.findByIdAndDelete(personId);
    if(!response) {
      return res.status(404).json({error: 'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message: 'person Deleted'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
})

module.exports = router;