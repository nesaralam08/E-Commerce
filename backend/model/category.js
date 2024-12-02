const mongoose = require('mongoose')

const category = mongoose.model({
    category_name:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true,
        enum:['active','deactive'],
        default:'active'
    }
},{timestamps:true})

module.exports = mongoose.model('Category',category);