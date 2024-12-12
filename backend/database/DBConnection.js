const mongoose = require('mongoose')

const ConnectDB = (url)=>{
    mongoose.connect(url)
    .then(()=>console.log("DB Connected"))
    .catch((e)=>console.log(e))
}

module.exports = ConnectDB