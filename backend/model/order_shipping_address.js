const mongoose = require('mongoose')
const order_shipping_address = mongoose.Schema({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    shipping_add_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ShippingAddress"
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
module.exports = mongoose.model('OrderShippingAddress',order_shipping_address)