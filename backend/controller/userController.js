const userModel = require('../model/users')


const addUser = async (req, res) => {
    try {
        const { name, email,picture} = req.body;
        // console.log(name,email)
        
        const check = await userModel.findOne({ email: email });

        if (check) {
            return res.status(200).send({ success: true, message: 'User already exists', result: check });
        }

        const userData = {
            name: name,
            email: email,
            picture:picture
        };

        const user = new userModel(userData);

        const result = await user.save();

        res.status(201).send({ success: true, message: 'User created successfully', result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}



const updateUser = async (req, res) => {
    try {
        const {_id,name,gender,mobile_no} = req.body
        const result = await userModel.findByIdAndUpdate(_id,{$set:{name:name,gender:gender,mobile_no:mobile_no}},{new:true})
        res.status(201).send({ success: true, message: 'User updated successfully', result });

    } catch (error) {
        res.status(400).json({
            sucess: false,
            message: error
        })
    }
}

const getUserById = async(req,res)=>{
    try {
        const {uid} = req.query
        const result = await userModel.findOne({_id:uid})
        res.status(201).send({ success: true, message: 'User fetch successfully', result });
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}
module.exports = { addUser, updateUser ,getUserById}