const mongoose = require('mongoose')


const usersSchema = new mongoose.Schema({

name: {
type: String,
required: true
},
company:{
type: String,
required: true
},
jointDate:{
    type: Date,
    required: true,
    default: Date.now

}

})

module.exports = mongoose.model('User', usersSchema)