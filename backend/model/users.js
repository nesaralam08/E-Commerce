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
    gender:{
        type:String,
        require:true,
        enum:['male','female','custom','not-select'],
        default:'not-select'
    },
    mobile_no:{
        type:String,
        require:false,
        default:"null",
    },
    picture:{
        type:String,
        require:false,
        default:"null"
    },
    status:{
        type:String,
        require:true,
        enum:["active","deactive","suspend"],
        default:'active'
    }
},{timestamps:true})

module.exports = mongoose.model('User',user)