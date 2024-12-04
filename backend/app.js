require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8080
const ConnectDB = require('./database/DBConnection')

const userRouter = require('./router/userRouter')
const categoryRouter = require('./router/categoryRouter')
const productRouter = require('./router/productRouter')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(bodyparser.json())

ConnectDB(process.env.MONGO_URL)

app.use('/api',userRouter)
app.use('/api',categoryRouter)
app.use('/api',productRouter)

app.get('/alam',(req,res)=>{
    res.send("Nesar Alam")
})


app.listen(port,()=>console.log(`server is runnint at PORT ${port}`))