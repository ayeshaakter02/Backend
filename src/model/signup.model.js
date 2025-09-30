const { default: mongoose } = require("mongoose")
const bcrypt = require('bcrypt');
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
    },
    otp:{
        type:Number,
    },
    verify:{
        type:Boolean,
        default: false,
    }
} , {timestamps:true})

// userSchema.pre("save", async (next)=>{
//     if (!this.isModified("password")) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// })

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema)