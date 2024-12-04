const categoryModel = require('../model/category')

const addCategory = async(req,res)=>{
    try {
        const {name} = req.body
        const t = new categoryModel({
            category_name:name
        })
        const result = await t.save();
        res.status(200).send({ success: true, message: 'Category Added Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
module.exports = addCategory