const productModel = require('../model/products')

const addProduct = async(req,res)=>{
    try {
        const { product_name,price,category_id,desc,image_url,quantity} = req.body
        const t = new productModel({
            product_name:product_name,
            price:price,
            description:desc,
            image_url:image_url,
            quantity:quantity,
            category_id:category_id
        })
        const result = await t.save();
        res.status(200).send({ success: true, message: 'Product Added Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getPrById = async(req,res)=>{
    try {
        const {sid} = req.query
        const result = await productModel.findOne({_id:sid});
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
module.exports = {addProduct,getPrById}
