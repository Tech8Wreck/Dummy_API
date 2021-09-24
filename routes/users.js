const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const User = require('../models/user')


//GET ALL USERS
router.get('/', async (req, res) =>{
    try{
        const users = await User.find()
        res.json(users)
    }
    catch(err) {
        // status 500 - error on db
        res.status(500).json({message: err.message})
    }

})


// GET ONE
// router.get('/:id', async (req, res) =>{
//     try{
//         const user = await User.findById({id: id})
//     }
//     catch(err){
// res.status().json({message: err.message})
//     }
// })
router.get('/:id', getUser, (req, res) =>{
res.send(res.user.name)
})


// CREATE USER
router.post('/', async (req, res) =>{
const user = new User({
    name: req.body.name,
    company: req.body.company,

})
try{
const createdUser = await user.save()
// status 201 - successfully created an object
res.status(201).json(createdUser)
}
catch(err){
    // status 400 something wrong with the body params
res.status(400).json({message: err.message})
}
})

// UPDATING ONE
router.patch('/:id', (req, res) =>{

})


// DELETING ONE
router.delete('/:id', (req, res) =>{

})


async function getUser(){
    let foundUser
    try{
        foundUser = await User.findById({id: req.params.id})
        if(foundUser == null){
            return res.status(404).json({message: 'cannot find user'})
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.user = foundUser;
    next()
}


module.exports = router;