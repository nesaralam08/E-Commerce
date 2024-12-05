const cartModel = require('../model/carts')

const addItem = async(req,res)=>{
    try {
        const {pid,uid} = req.body
        const t = new cartModel({
            user_id:uid,
            product_id:pid
        })
        const result = await t.save()
        res.status(200).send({ success: true, message: 'Product Added in cart ', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Product already added', result: error });
    }
}
const getItemById = async(req,res)=>{
    try {
        const {uid} = req.query
        const result = await cartModel.find({user_id:uid}).populate("product_id")
        res.status(200).send({ success: true, message: 'items fetch sucessfully ', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occured', result: error });
    }
}
const deleteItemById = async(req,res)=>{
    try {
        const {uid} = req.query
        const result = await cartModel.deleteOne({user_id:uid})
        res.status(200).send({ success: true, message: 'items remove sucessfully ', result: result });

    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occured', result: error });
    }
}

module.exports = {addItem,getItemById,deleteItemById}