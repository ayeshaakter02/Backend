const { default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true,
        unique: true
    },
    password : {
        type:String,
        required: true
    },
    phone : {
        type:String,
    },
    image : {
        type:String,
    },
    role : {
        enum: ["user", "admin"],
        default: "user",
        type:String,
    }
} , {timestamps:true})

module.exports = mongoose.model("User", userSchema)