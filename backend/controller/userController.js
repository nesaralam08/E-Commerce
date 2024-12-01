
const addCustomer = (req,res)=>{
    try {
        res.send("Working")
    } catch (error) {
        res.status(400).json({
            sucess:false,
            message:error
        })
    }
}

module.exports = {addCustomer}