const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Define the Person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'],
        required: true

    },
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required : true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

prosonSchema.pre('save', async function(next){
    const person = this;

    //Hash the Password only if modified (or is new)
    if (!person.isModified('password')) return next();

    try{
        // hash password genration
        const salt = await bcrypt.genSalt(10);

        //hash password
        const hashedPassword = await bcrypt.hashPassword(person.password, salt);

        //override the plain password with hashed one
        person.password = hashedPassword;
        next()
    }catch(err){
        
    }
})

 //create Person

const person = mongoose.model('person',personSchema);
module.exports= person;