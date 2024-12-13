<<<<<<< HEAD
const mongoose = require('mongoose')
const nanoid = require('nanoid')
const orders = mongoose.Schema({
    order_no:{
        type:Number,
        require:true,
        unique:true,
        default:parseInt(nanoid(10), 36)
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    shipping_amount:{
        type:Number,
        default:0
    },
    total_amount:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true,
        enum:['placed','processing','shipping','delivered'],
        default:'processing'
    },
    payment_status:{
        type:String,
        require:true,
        enum:['paid','not paid'],
        default:'not paid'
    },
    payment_type:{
        type:String,
        require:true,
        enum:['upi','card','netbanking','cod'],
        default:'cod'
    },
    transaction_id:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

=======
const mongoose = require('mongoose')
const nanoid = require('nanoid')
const orders = mongoose.Schema({
    order_no:{
        type:Number,
        require:true,
        unique:true,
        default:parseInt(nanoid(10), 36)
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    shipping_amount:{
        type:Number,
        default:0
    },
    total_amount:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true,
        enum:['placed','processing','shipping','delivered'],
        default:'processing'
    },
    payment_status:{
        type:String,
        require:true,
        enum:['paid','not paid'],
        default:'not paid'
    },
    payment_type:{
        type:String,
        require:true,
        enum:['upi','card','netbanking','cod'],
        default:'cod'
    },
    transaction_id:{
        type:String,
        default:"null",
        unique:true
    }
},{timestamps:true})

>>>>>>> development
module.exports = mongoose.model('Order',orders)