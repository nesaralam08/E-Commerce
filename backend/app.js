require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 

app.get('/alam',(req,res)=>{
    res.send("Nesar Alam")
})


app.listen(port,()=>console.log(`server is runnint at PORT ${port}`))