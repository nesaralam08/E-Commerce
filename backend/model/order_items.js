const mongoose = require('mongoose')

const order_item= mongoose.Schema({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    product_name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    total_amount:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model('OrderItem',order_item)