import mongoose from "mongoose";

const loginDeta = new mongoose.Schema(
    {
        userName:{
            type:String,
            require:true
        },
        lastName:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    },
    {
        timestamps: true
    }
)

export default login = mongoose.model("login", loginDeta);