const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
   balance:{type:Number,default:100},
   address: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    isFreeAppUser:{type:Boolean,default:false}
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users


