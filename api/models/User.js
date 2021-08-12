const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },

    resetToken:{
        type:String,
    },

    expireToken:{
        type:Date,
    },

    profilePic:{
        type:String,
        default:"",
    },
}, 
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
