const { default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required: [true, "name is required"]
    },
    email : {
        type:String,
        required: [true, "email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password : {
        type:String,
        required: [true, "password is required"]
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