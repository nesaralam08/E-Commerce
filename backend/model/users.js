const mongoose = require('mongoose')

const user = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    status:{
        type:String,
        require:true,
        enum:["active","deactive","suspend"],
        default:'active'
    }
},{timestamps:true})

module.exports = mongoose.model('User',user)