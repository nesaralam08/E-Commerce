const productModel = require('../model/products')

const addProduct = async (req, res) => {
    try {
        const { product_name, price, category_id, desc, image_url, quantity } = req.body
        const t = new productModel({
            product_name: product_name,
            price: price,
            description: desc,
            image_url: image_url,
            quantity: quantity,
            category_id: category_id
        })
        const result = await t.save();
        res.status(200).send({ success: true, message: 'Product Added Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getPrById = async (req, res) => {
    try {
        const { sid } = req.query
        const result = await productModel.findOne({ _id: sid });
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllPr = async (req, res) => {
    try {
        const result = await productModel.find({})
        // console.log(result)
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllFashionPr = async (req, res) => {
    try {
        const { fid } = req.query
        const result = await productModel.find({ category_id: fid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllElectronicsPr = async (req, res) => {
    try {
        const { eid } = req.query
        const result = await productModel.find({ category_id: eid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllBooksPr = async (req, res) => {
    try {
        const { bid } = req.query
        const result = await productModel.find({ category_id: bid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllComputersPr = async (req, res) => {
    try {
        const { cid } = req.query
        const result = await productModel.find({ category_id: cid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllGamingsPr = async (req, res) => {
    try {
        const { gid } = req.query
        const result = await productModel.find({ category_id: gid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllGroceryPr = async (req, res) => {
    try {
        const { gid } = req.query
        const result = await productModel.find({ category_id: gid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllHealthPr = async (req, res) => {
    try {
        const { hid } = req.query
        const result = await productModel.find({ category_id: hid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const getAllSportsPr = async (req, res) => {
    try {
        const { sid } = req.query
        const result = await productModel.find({ category_id: sid })
        res.status(200).send({ success: true, message: 'Product Fetch Sucessfully', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
const SearchItem = async (req, res) => {
    try {
        const query = req.query.q || ""
        const result = await productModel.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
            ]
        })
        // console.log(result)
        res.status(200).send({ success: true, message: 'Product Fetch from Search', result: result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}


module.exports = { addProduct, getPrById, getAllPr, getAllFashionPr, getAllElectronicsPr, getAllBooksPr, getAllComputersPr, getAllGamingsPr, getAllGroceryPr, getAllHealthPr, getAllSportsPr, SearchItem }
