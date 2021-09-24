const express = require('express')
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
router.get('/:id', (req, res) =>{
res.send(req.params.id)
})


// CREATE USER
router.post('/', (req, res) =>{

})

// UPDATING ONE
router.patch('/:id', (req, res) =>{

})


// DELETING ONE
router.delete('/:id', (req, res) =>{

})



module.exports = router