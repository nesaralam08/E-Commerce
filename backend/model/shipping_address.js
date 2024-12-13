const mongoose = require('mongoose')

const shipping_address = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    full_address:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model('ShippingAddress',shipping_address)