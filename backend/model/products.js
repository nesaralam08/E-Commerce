const mongoose = require('mongoose')
const {nanoid} = require('nanoid')
const product = mongoose.Schema({
    product_name:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true,
        default:nanoid(10),
        // unique:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image_url:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true,
        enum:['active','deactive'],
        default:"active"
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
},{timestamps:true})

module.exports = mongoose.model('Product',product)