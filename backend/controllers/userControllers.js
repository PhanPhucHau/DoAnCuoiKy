const User = require("../models/User");

const userController = {
    //Lấy tất cả user
    getAllUser: async(req, res) =>{
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteUser: async(req, res) =>{
        try {

            const user = User.findById(req.params.id);
            // xóa user đó luôn thì sử dụng
            //const user = User.findByIdAndDelete(req.params.id);
            res.status(200).json("Xóa thành công");
        } catch (error) {
            res.status(500).json(error);
        }
    }


}

module.exports = userController;