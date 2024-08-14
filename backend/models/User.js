const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlenghth: 6,
        maxlenghth: 20,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        minlenghth: 10,
        maxlenghth: 50,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlenghth: 6,  
    },
    admin:{
        type: Boolean,
        default: false,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);