const userModel = require('../model/users')


const addUser = async (req, res) => {
    try {
        const { name, email} = req.body;
        // console.log(name,email)
        
        const check = await userModel.findOne({ email: email });

        if (check) {
            return res.status(200).send({ success: true, message: 'User already exists', result: check });
        }

        const userData = {
            name: name,
            email: email
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
        res.send("working")
    } catch (error) {
        res.status(400).json({
            sucess: false,
            message: error
        })
    }
}

module.exports = { addUser, updateUser }