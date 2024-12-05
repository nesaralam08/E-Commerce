const mongoose = require('mongoose')

const carts = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        require:true,
        default:1
    }
},{timestamps:true})

module.exports = mongoose.model('Cart',carts)